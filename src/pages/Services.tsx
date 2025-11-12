import { Card } from "@/components/ui/card";
import { CheckCircle, Cpu, HardDrive, Monitor, Wrench, Settings, ThermometerSun } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Naprawa komputerów",
      description: "Profesjonalna naprawa komputerów stacjonarnych i laptopów. Diagnozujemy i naprawiamy awarie sprzętowe i softwarowe. Serwis komputerowy Zabrze – szybko i skutecznie.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Modernizacja sprzętu",
      description: "Modernizacja komputera to najlepszy sposób na zwiększenie jego wydajności. Wymieniamy procesory, karty graficzne, pamięć RAM oraz dyski SSD. Profesjonalna modernizacja sprzętu w Zabrzu.",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Instalacja systemów",
      description: "Instalacja Windows, Linux oraz niezbędnych sterowników i oprogramowania. Czysty system bez zbędnych programów. Gwarantujemy stabilne i szybkie działanie.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Instalacja i aktualizacja BIOS",
      description: "Bezpieczna aktualizacja BIOS-u do najnowszej wersji. Poprawiamy stabilność systemu i kompatybilność z nowymi podzespołami. Profesjonalna obsługa w Zabrzu.",
    },
    {
      icon: <ThermometerSun className="w-8 h-8" />,
      title: "Wymiana pasty termoprzewodzącej",
      description: "Wymiana pasty termicznej na wysokiej jakości produkty. Obniżamy temperatury procesora i karty graficznej, co wydłuża żywotność sprzętu i poprawia jego wydajność.",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Czyszczenie i konserwacja",
      description: "Kompleksowe czyszczenie wnętrza komputera z kurzu i zanieczyszczeń. Regularna konserwacja zapobiega przegrzewaniu i awariom. Dbamy o Twój sprzęt w Zabrzu.",
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Naprawa i wymiana dysków",
      description: "Diagnoza problemów z dyskami HDD i SSD. Profesjonalna wymiana uszkodzonych dysków z migracją danych. Odzyskujemy utracone pliki i dokumenty.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Diagnostyka i doradztwo",
      description: "Bezpłatna diagnostyka komputera i profesjonalne doradztwo techniczne. Pomożemy wybrać odpowiednie podzespoły i doradzamy najlepsze rozwiązania dla Twoich potrzeb.",
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Rozbudowa pamięci RAM",
      description: "Zwiększenie ilości pamięci operacyjnej dla płynniejszej pracy systemu i aplikacji. Dobierzemy odpowiednie moduły RAM dostosowane do Twojego komputera.",
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">Nasze usługi – Serwis komputerowy Zabrze</h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Profesjonalna naprawa komputerów, modernizacja sprzętu i instalacja systemów. 
            DEW-Komp to kompleksowe usługi serwisowe w Zabrzu – szybko, solidnie i w przystępnych cenach.
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
