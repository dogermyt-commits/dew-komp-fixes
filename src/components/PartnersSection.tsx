import furiozaLogo from "@/assets/partners/furioza-zabrze.jpg";
import wildrealmLogo from "@/assets/partners/wildrealm.jpg";

const partners = [
  { name: "Furioza Zabrze", logo: furiozaLogo, type: "Klub piłkarski", link: "https://www.instagram.com/furiozazabrze/", hoverText: "Najlepszy Klub <3" },
  { name: "WildRealm", logo: wildrealmLogo, type: "Serwer Minecraft", link: null, hoverText: "Najlepszy serwer minecraft!!!" },
];

export const PartnersSection = () => {
  const duplicatedPartners = [...partners, ...partners];

  const PartnerCard = ({ partner }: { partner: typeof partners[0] }) => (
    <div className="relative">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden bg-card border border-border shadow-soft group-hover:shadow-large group-hover:scale-110 transition-all duration-300">
        <img
          src={partner.logo}
          alt={partner.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-bottom-8 transition-all duration-300">
        <span className="whitespace-nowrap bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-bold text-sm drop-shadow-lg animate-pulse">
          {partner.hoverText}
        </span>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Nasi Partnerzy</h2>
        <p className="text-center text-muted-foreground">Firmy i organizacje, z którymi współpracujemy</p>
      </div>
      
      <div className="relative w-full bg-card/50 border-y border-border py-8 group/marquee">
        <div className="flex animate-marquee group-hover/marquee:[animation-play-state:paused]">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-12 group"
            >
              {partner.link ? (
                <a href={partner.link} target="_blank" rel="noopener noreferrer" className="block">
                  <PartnerCard partner={partner} />
                  <p className="text-center mt-3 font-semibold text-sm">{partner.name}</p>
                  <p className="text-center text-xs text-muted-foreground">{partner.type}</p>
                </a>
              ) : (
                <div>
                  <PartnerCard partner={partner} />
                  <p className="text-center mt-3 font-semibold text-sm">{partner.name}</p>
                  <p className="text-center text-xs text-muted-foreground">{partner.type}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
