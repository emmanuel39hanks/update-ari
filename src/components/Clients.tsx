import Image from "next/image";

const CLIENTS = [
  { name: "Nandos", logo: "https://roomnine-cdn.vercel.app/assets/clients/nandos.jpg" },
  { name: "Ecobank", logo: "https://roomnine-cdn.vercel.app/assets/clients/ecobank.jpg" },
  { name: "GIZ", logo: "https://roomnine-cdn.vercel.app/assets/clients/giz.jpg" },
  { name: "Amarula", logo: "https://roomnine-cdn.vercel.app/assets/clients/amarula.jpg" },
  { name: "Cremosa", logo: "https://roomnine-cdn.vercel.app/assets/clients/cremosa.jpg" },
  { name: "Daytona SA", logo: "https://roomnine-cdn.vercel.app/assets/clients/daytona.jpg" },
  { name: "United Nations", logo: "https://roomnine-cdn.vercel.app/assets/clients/un.jpg" },
  { name: "Alive & Kicking Zambia", logo: "https://roomnine-cdn.vercel.app/assets/clients/alive_kicking.jpg" },
  { name: "Lusaka Thrift Market", logo: "https://roomnine-cdn.vercel.app/assets/clients/lusaka_thrift.jpg" },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-black/30 text-xs font-mono tracking-[0.4em] uppercase mb-4">Trusted By</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
            Brands we&apos;ve partnered with
          </h2>
          <p className="mt-4 text-muted">
            We&apos;re proud to work with leading brands and organisations across Africa.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-6 items-center justify-items-center">
          {CLIENTS.map((client, i) => (
            <div
              key={i}
              className="w-full aspect-square relative rounded-2xl overflow-hidden bg-white border border-black/5 hover-lift flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain p-5"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
