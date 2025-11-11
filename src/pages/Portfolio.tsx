import { Card } from "@/components/ui/card";

const Portfolio = () => {
  // Placeholder images - in production these would be real photos
  const portfolioItems = [
    {
      id: 1,
      title: "Modernizacja PC gamingowego",
      description: "Wymiana procesora i karty graficznej, czyszczenie i instalacja systemu",
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Naprawa laptopa Dell",
      description: "Wymiana pasty termoprzewodzącej i czyszczenie układu chłodzenia",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Złożenie PC do pracy",
      description: "Kompletne złożenie komputera biurowego wraz z instalacją Windows",
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Upgrade stacji roboczej",
      description: "Rozbudowa RAM i instalacja dodatkowych dysków SSD",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Diagnostyka i naprawa",
      description: "Kompleksowa diagnostyka problemu z rozruchem i naprawa",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Custom PC Build",
      description: "Budowa autorskiego komputera do renderingu 3D",
      image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">Portfolio</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Zobacz nasze zrealizowane projekty
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-large transition-all group border-border">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-primary-light/50 border-primary/30 text-center">
            <h2 className="text-2xl font-bold mb-4">Chcesz zobaczyć więcej?</h2>
            <p className="text-muted-foreground mb-6">
              Portfolio jest regularnie aktualizowane. Skontaktuj się z nami, aby dowiedzieć się 
              więcej o naszych realizacjach.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-medium"
            >
              Kontakt
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
