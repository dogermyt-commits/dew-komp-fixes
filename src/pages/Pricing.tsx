import { Card } from "@/components/ui/card";
import { CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricingItems = [
    {
      title: "Instalacja BIOS-u + sprawdzenie",
      price: "120 zł",
      description: "Aktualizacja lub reinstalacja BIOS wraz z weryfikacją poprawności działania",
    },
    {
      title: "Instalacja Windows + sprawdzenie",
      price: "100 zł",
      description: "Czysty system operacyjny z podstawową konfiguracją i weryfikacją",
    },
    {
      title: "Instalacja Windows + diagnostyka",
      price: "350 zł",
      description: "System Windows wraz z kompleksową diagnostyką sprzętu i oprogramowania",
    },
    {
      title: "Kompletny pakiet komputerowy",
      price: "500 zł",
      description: "Zamówienie części + złożenie komputera + instalacja Windows + aktywacja + diagnostyka + testy wydajnościowe",
      featured: true,
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">Cennik</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Przejrzyste i konkurencyjne ceny usług
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {pricingItems.map((item, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-large transition-all ${
                  item.featured
                    ? "border-primary shadow-medium md:col-span-2"
                    : "border-border"
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                    <p className="text-3xl font-bold text-primary">{item.price}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-muted border-border text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Nie widzisz dla siebie oferty?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Każdy komputer i sytuacja są inne. Jeśli potrzebujesz usługi, której nie ma w cenniku, 
              lub chcesz poznać szczegóły - napisz do nas. Przygotujemy indywidualną wycenę.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
                <Link to="/contact">Napisz do nas</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/custom-offer">Oferta indywidualna</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
