import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wrench, Settings, Cpu, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
const Home = () => {
  const features = [{
    icon: <Wrench className="w-8 h-8" />,
    title: "Naprawa komputerów",
    description: "Profesjonalna diagnostyka i naprawa sprzętu komputerowego"
  }, {
    icon: <Settings className="w-8 h-8" />,
    title: "Modernizacja",
    description: "Wymiana podzespołów i upgrade komputera"
  }, {
    icon: <Cpu className="w-8 h-8" />,
    title: "Instalacja oprogramowania",
    description: "Instalacja systemów i aktualizacja BIOS"
  }];
  return <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="DEW-Komp Serwis" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary-light/20" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            DEW-Komp
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Serwis Komputerowy w Zabrzu
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Profesjonalna naprawa, modernizacja i diagnostyka komputerów. 
            Działamy szybko, solidnie i w przystępnych cenach. Zaufało nam już wielu klientów z Zabrza i okolic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-medium">
              <Link to="/services">Poznaj nasze usługi</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary-light">
              <Link to="/contact">Skontaktuj się z nami</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Kompleksowe usługi serwisowe w Zabrzu</h2>
            <p className="text-lg text-muted-foreground">
              Specjalizujemy się w naprawie i modernizacji komputerów stacjonarnych oraz laptopów. 
              Każde zlecenie traktujemy indywidualnie, gwarantując profesjonalną obsługę i konkurencyjne ceny.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => <Card key={index} className="p-6 hover:shadow-large transition-shadow border-border bg-card">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>)}
          </div>

          <Card className="p-8 bg-card border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-center">Dlaczego warto wybrać DEW-Komp?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Szybka realizacja</h4>
                  <p className="text-sm text-muted-foreground">Większość napraw wykonujemy tego samego dnia</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Przystępne ceny</h4>
                  <p className="text-sm text-muted-foreground">Uczciwa wycena bez ukrytych kosztów</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Doświadczenie</h4>
                  <p className="text-sm text-muted-foreground">Lata praktyki w serwisie komputerowym</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Lokalizacja w Zabrzu</h4>
                  <p className="text-sm text-muted-foreground">Dogodny dojazd i możliwość osobistego kontaktu</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Quick Pricing Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Cennik wybranych usług</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transparentne ceny bez ukrytych opłat. Bezpłatna wycena dla bardziej skomplikowanych napraw.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 border-primary/20 hover:border-primary/50 transition-all shadow-soft hover:shadow-medium">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Instalacja Windows</h3>
                  <p className="text-muted-foreground text-sm mb-2">Czysty system + sprawdzenie</p>
                  <p className="text-2xl font-bold text-primary">100 zł</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-primary/20 hover:border-primary/50 transition-all shadow-soft hover:shadow-medium">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Instalacja BIOS</h3>
                  <p className="text-muted-foreground text-sm mb-2">Aktualizacja + sprawdzenie</p>
                  <p className="text-2xl font-bold text-primary">120 zł</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/pricing">Zobacz pełny cennik</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/custom-offer">Zapytaj o indywidualną wycenę</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Masz problem z komputerem?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Skontaktuj się z nami już dziś! Oferujemy bezpłatną diagnostykę i doradztwo. 
            Zadzwoń pod <span className="font-bold">535 660 656</span> lub napisz przez formularz kontaktowy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
              <Link to="/contact">Napisz do nas</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-background/90 text-primary hover:bg-background">
              <a href="tel:+48535660656">Zadzwoń teraz</a>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;