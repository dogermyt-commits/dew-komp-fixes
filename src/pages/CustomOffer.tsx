import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FileText } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const CustomOffer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    budget: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.description) {
      toast({
        title: "Błąd",
        description: "Proszę wypełnić wszystkie wymagane pola",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "58076f89-f9b0-4df0-812a-068bd92c41b3",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `
Rodzaj usługi: ${formData.serviceType}
Budżet: ${formData.budget}

Opis potrzeb:
${formData.description}
          `,
          subject: "Zapytanie o ofertę indywidualną - DEW-Komp",
        }),
      });

      if (response.ok) {
        toast({
          title: "Zapytanie wysłane!",
          description: "Przygotujemy dla Ciebie indywidualną ofertę i skontaktujemy się wkrótce.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          budget: "",
          description: "",
        });
      } else {
        throw new Error("Błąd wysyłania");
      }
    } catch (error) {
      toast({
        title: "Błąd",
        description: "Nie udało się wysłać zapytania. Spróbuj ponownie później.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Oferta indywidualna</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Potrzebujesz specyficznej usługi? Opisz swoją sytuację, a przygotujemy dla Ciebie 
              spersonalizowaną wycenę.
            </p>
          </div>

          <Card className="p-8 shadow-large border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Imię i nazwisko *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jan Kowalski"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jan@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+48 123 456 789"
                  />
                </div>

                <div>
                  <Label htmlFor="serviceType">Rodzaj usługi</Label>
                  <Input
                    id="serviceType"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    placeholder="np. Naprawa laptopa"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="budget">Budżet (opcjonalnie)</Label>
                <Input
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  placeholder="np. 500-1000 zł"
                />
              </div>

              <div>
                <Label htmlFor="description">Opis potrzeb *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Opisz szczegółowo, czego potrzebujesz. Im więcej informacji, tym dokładniejsza wycena..."
                  rows={8}
                  required
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Przykład: "Potrzebuję złożenia komputera do grafiki 3D. Mam już procesor i kartę graficzną. 
                  Potrzebuję pomocy w doborze pozostałych podzespołów i złożeniu całości."
                </p>
              </div>

              <div className="flex items-start gap-2 text-xs text-muted-foreground bg-muted p-3 rounded-md">
                <input type="checkbox" required className="mt-0.5" />
                <label>
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przygotowania oferty zgodnie z{" "}
                  <a href="/terms" className="text-primary hover:underline">
                    Polityką Prywatności
                  </a>
                  . Administrator: DEW-Komp, serwis@dew-komp.pl
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-dark" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Wysyłanie..." : "Wyślij zapytanie o wycenę"}
              </Button>
            </form>
          </Card>

          <Card className="mt-8 p-6 bg-muted border-border">
            <h3 className="font-semibold mb-2">Co dalej?</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>Przeanalizujemy Twoje zapytanie</li>
              <li>Przygotujemy spersonalizowaną ofertę z wycenę</li>
              <li>Skontaktujemy się z Tobą mailowo lub telefonicznie</li>
              <li>Ustalimy szczegóły i termin realizacji</li>
            </ol>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomOffer;
