import furiozaLogo from "@/assets/partners/furioza-zabrze.jpg";
import wildrealmLogo from "@/assets/partners/wildrealm.jpg";

const partners = [
  { name: "Furioza Zabrze", logo: furiozaLogo, type: "Klub piłkarski" },
  { name: "WildRealm", logo: wildrealmLogo, type: "Serwer Minecraft" },
];

export const PartnersSection = () => {
  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Nasi Partnerzy</h2>
        <p className="text-center text-muted-foreground">Firmy i organizacje, z którymi współpracujemy</p>
      </div>
      
      <div className="relative">
        <div className="flex animate-marquee">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-8 group"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden bg-card border border-border shadow-soft group-hover:shadow-medium group-hover:scale-105 transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center mt-3 font-semibold text-sm">{partner.name}</p>
              <p className="text-center text-xs text-muted-foreground">{partner.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
