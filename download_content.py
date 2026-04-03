#!/usr/bin/env python3
"""
Download all public content from Instagram profile @stiziyo (Ari)
and organize into content/videos and content/pictures folders.
"""

import os
import shutil
import instaloader
from pathlib import Path

PROFILE = "stiziyo"
BASE_DIR = Path(__file__).parent
CONTENT_DIR = BASE_DIR / "content"
PICTURES_DIR = CONTENT_DIR / "pictures"
VIDEOS_DIR = CONTENT_DIR / "videos"

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}
VIDEO_EXTENSIONS = {".mp4", ".mov", ".avi", ".mkv"}


def setup_dirs():
    """Create output directories."""
    PICTURES_DIR.mkdir(parents=True, exist_ok=True)
    VIDEOS_DIR.mkdir(parents=True, exist_ok=True)


def download_profile():
    """Download all posts from the Instagram profile."""
    L = instaloader.Instaloader(
        download_videos=True,
        download_video_thumbnails=False,
        download_geotags=False,
        download_comments=False,
        save_metadata=True,
        compress_json=False,
        post_metadata_txt_pattern="",
        dirname_pattern=str(CONTENT_DIR / "raw"),
    )

    # Login is required — Instagram blocks unauthenticated API access.
    # Option 1: Use saved session (run `instaloader -l YOUR_USERNAME` first)
    # Option 2: Pass credentials via environment variables
    username = os.environ.get("IG_USERNAME")
    password = os.environ.get("IG_PASSWORD")

    if username:
        print(f"Logging in as {username}...")
        try:
            L.load_session_from_file(username)
            print("Loaded saved session.")
        except FileNotFoundError:
            if password:
                L.login(username, password)
                print("Logged in with credentials.")
            else:
                print("No saved session found. Set IG_PASSWORD env var or run:")
                print(f"  source venv/bin/activate && instaloader -l {username}")
                return
    else:
        print("Instagram requires authentication. Set environment variables:")
        print("  export IG_USERNAME=your_instagram_username")
        print("  export IG_PASSWORD=your_instagram_password")
        print()
        print("Or login once with: source venv/bin/activate && instaloader -l YOUR_USERNAME")
        return

    print(f"Fetching profile: {PROFILE}")
    profile = instaloader.Profile.from_username(L.context, PROFILE)

    print(f"Profile: {profile.full_name}")
    print(f"Posts: {profile.mediacount}")
    print(f"Followers: {profile.followers}")
    print(f"Bio: {profile.biography}")
    print()

    # Save profile info for the marketing site
    profile_info = {
        "username": profile.username,
        "full_name": profile.full_name,
        "biography": profile.biography,
        "followers": profile.followers,
        "following": profile.followees,
        "post_count": profile.mediacount,
        "profile_pic_url": str(profile.profile_pic_url),
        "is_verified": profile.is_verified,
    }

    import json
    with open(CONTENT_DIR / "profile.json", "w") as f:
        json.dump(profile_info, f, indent=2)
    print("Saved profile.json")

    # Download profile picture
    L.download_profilepic(profile)

    # Download all posts
    post_data = []
    for i, post in enumerate(profile.get_posts()):
        print(f"Downloading post {i + 1}: {post.date_utc.strftime('%Y-%m-%d')} - {'Video' if post.is_video else 'Image'}")
        try:
            L.download_post(post, target=str(CONTENT_DIR / "raw"))
        except Exception as e:
            print(f"  Error downloading post: {e}")
            continue

        post_info = {
            "shortcode": post.shortcode,
            "date": post.date_utc.isoformat(),
            "caption": post.caption or "",
            "is_video": post.is_video,
            "likes": post.likes,
            "typename": post.typename,
            "url": f"https://www.instagram.com/p/{post.shortcode}/",
        }
        if post.is_video:
            post_info["video_view_count"] = post.video_view_count
        post_data.append(post_info)

    with open(CONTENT_DIR / "posts.json", "w") as f:
        json.dump(post_data, f, indent=2)
    print(f"\nSaved metadata for {len(post_data)} posts to posts.json")

    return post_data


def organize_files():
    """Move downloaded files into pictures/ and videos/ folders."""
    raw_dir = CONTENT_DIR / "raw"
    if not raw_dir.exists():
        print("No raw directory found. Nothing to organize.")
        return

    pic_count = 0
    vid_count = 0

    for file in raw_dir.iterdir():
        if file.is_file():
            ext = file.suffix.lower()
            if ext in IMAGE_EXTENSIONS:
                dest = PICTURES_DIR / file.name
                shutil.copy2(file, dest)
                pic_count += 1
            elif ext in VIDEO_EXTENSIONS:
                dest = VIDEOS_DIR / file.name
                shutil.copy2(file, dest)
                vid_count += 1

    print(f"\nOrganized content:")
    print(f"  Pictures: {pic_count} files -> content/pictures/")
    print(f"  Videos:   {vid_count} files -> content/videos/")


def main():
    print("=" * 50)
    print(f"  Instagram Content Downloader for @{PROFILE}")
    print("=" * 50)
    print()

    setup_dirs()
    download_profile()
    organize_files()

    print()
    print("Done! Content saved to ./content/")
    print("  ./content/pictures/  - All images")
    print("  ./content/videos/    - All videos")
    print("  ./content/profile.json - Profile metadata")
    print("  ./content/posts.json   - Post metadata")


if __name__ == "__main__":
    main()
