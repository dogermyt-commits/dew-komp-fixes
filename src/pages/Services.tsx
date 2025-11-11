import { Card } from "@/components/ui/card";
import { CheckCircle, Cpu, HardDrive, Monitor, Wrench, Settings, ThermometerSun } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Wymiana RAM",
      description: "Rozbudowa lub wymiana pamięci operacyjnej w celu poprawy wydajności systemu.",
    },
    {
      icon: <ThermometerSun className="w-8 h-8" />,
      title: "Wymiana pasty termoprzewodzącej",
      description: "Profesjonalna wymiana pasty termicznej dla lepszego chłodzenia procesora.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Instalacja BIOS-u",
      description: "Aktualizacja lub reinstalacja BIOS-u wraz z konfiguracją ustawień.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Wymiana kart graficznych i procesorów",
      description: "Modernizacja komputera poprzez wymianę GPU i CPU na nowsze modele.",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Instalacja Windows",
      description: "Czysty system Windows z aktualizacjami i niezbędnymi sterownikami.",
    },
    {
      icon: <ThermometerSun className="w-8 h-8" />,
      title: "Wymiana termopadów",
      description: "Wymiana termicznych podkładek w celu lepszego odprowadzania ciepła.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Diagnostyka sprzętu",
      description: "Kompleksowa analiza podzespołów i identyfikacja problemów sprzętowych.",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Czyszczenie komputera",
      description: "Profesjonalne czyszczenie wnętrza komputera z kurzu i zanieczyszczeń.",
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Naprawa i wymiana dysków",
      description: "Diagnoza, naprawa lub wymiana dysków HDD/SSD wraz z migracją danych.",
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">Nasze usługi</h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Oferujemy kompleksowe usługi serwisowe dla Twojego komputera
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-large transition-all hover:border-primary/50 border-border">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-primary-light/50 border-primary/30 text-center">
            <h2 className="text-2xl font-bold mb-4">Nie znalazłeś tego, czego szukasz?</h2>
            <p className="text-muted-foreground mb-6">
              Oferujemy również inne usługi związane z serwisem komputerowym. 
              Skontaktuj się z nami, aby omówić swoje potrzeby.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-medium"
            >
              Skontaktuj się z nami
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
