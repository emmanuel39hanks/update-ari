import Image from "next/image";

const CLIENTS = [
  { name: "Nandos", logo: "/assets/clients/nandos.jpg" },
  { name: "Ecobank", logo: "/assets/clients/ecobank.jpg" },
  { name: "GIZ", logo: "/assets/clients/giz.jpg" },
  { name: "Amarula", logo: "/assets/clients/amarula.jpg" },
  { name: "Cremosa", logo: "/assets/clients/cremosa.jpg" },
  { name: "Daytona SA", logo: "/assets/clients/daytona.jpg" },
  { name: "United Nations", logo: "/assets/clients/un.jpg" },
  { name: "Alive & Kicking Zambia", logo: "/assets/clients/alive_kicking.jpg" },
  { name: "Lusaka Thrift Market", logo: "/assets/clients/lusaka_thrift.jpg" },
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

        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center">
          {CLIENTS.map((client, i) => (
            <div
              key={i}
              className="w-full aspect-[3/2] relative rounded-xl overflow-hidden bg-surface p-4 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain p-4"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
