import { Mail, Phone, Cpu } from "lucide-react";
const Footer = () => {
  return <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">DEW-Komp</span>
            </div>
            <p className="text-muted-foreground text-sm">Twój ulubiony serwis komputerowy. Naprawa, modernizacja i diagnostyka komputerów.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm">
              <a href="mailto:kontakt@dew-komp.pl" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                kontakt@dew-komp.pl
              </a>
              <a href="tel:+48535660656" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +48 535 660 656
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Szybkie linki</h3>
            <div className="space-y-2 text-sm">
              <a href="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                Usługi
              </a>
              <a href="/pricing" className="block text-muted-foreground hover:text-primary transition-colors">
                Cennik
              </a>
              <a href="/terms" className="block text-muted-foreground hover:text-primary transition-colors">
                Regulamin
              </a>
              <a href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DEW-Komp. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;