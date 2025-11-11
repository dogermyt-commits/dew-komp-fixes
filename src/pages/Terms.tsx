import { Card } from "@/components/ui/card";
import { FileText, Shield, Scale } from "lucide-react";

const Terms = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Regulamin i polityka prywatności</h1>
            <p className="text-xl text-muted-foreground">
              Zasady współpracy i ochrony danych osobowych
            </p>
          </div>

          {/* Status prawny */}
          <Card className="p-8 mb-6 border-primary/30 bg-primary-light/20">
            <div className="flex items-start gap-4 mb-4">
              <Scale className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-3">Status prawny działalności</h2>
                <p className="text-muted-foreground mb-4">
                  DEW-Komp prowadzi działalność nierejestrowaną zgodnie z art. 5 ustawy z dnia 6 marca 2018 r. 
                  - Prawo przedsiębiorców. Wszelkie świadczone usługi oraz sprawy związane ze współpracą 
                  podlegają przepisom prawa cywilnego, w szczególności Kodeksowi cywilnemu.
                </p>
                <p className="text-muted-foreground">
                  Działalność prowadzona jest na podstawie przepisów o działalności gospodarczej nierejestrowanej, 
                  co oznacza, że przychód z tej działalności nie przekracza połowy minimalnego wynagrodzenia w skali miesiąca.
                </p>
              </div>
            </div>
          </Card>

          {/* Ogólne warunki */}
          <Card className="p-8 mb-6 border-border">
            <h2 className="text-2xl font-bold mb-4">1. Postanowienia ogólne</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>1.1.</strong> Niniejszy regulamin określa zasady korzystania z usług serwisu komputerowego DEW-Komp 
                oraz świadczenia usług naprawy, modernizacji i diagnostyki sprzętu komputerowego.
              </p>
              <p>
                <strong>1.2.</strong> Usługodawcą jest DEW-Komp, kontakt: kontakt@dew-komp.pl, tel. +48 535 660 656
              </p>
              <p>
                <strong>1.3.</strong> Akceptacja niniejszego regulaminu jest dobrowolna, ale konieczna do korzystania z usług serwisu.
              </p>
            </div>
          </Card>

          {/* Zakres usług */}
          <Card className="p-8 mb-6 border-border">
            <h2 className="text-2xl font-bold mb-4">2. Zakres świadczonych usług</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>2.1.</strong> DEW-Komp świadczy usługi w zakresie:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>naprawy i serwisu sprzętu komputerowego</li>
                <li>modernizacji komputerów (wymiana podzespołów, rozbudowa)</li>
                <li>diagnostyki sprzętowej i programowej</li>
                <li>instalacji systemów operacyjnych i oprogramowania</li>
                <li>konserwacji i czyszczenia sprzętu</li>
                <li>doradztwa w zakresie zakupu i doboru podzespołów</li>
              </ul>
              <p>
                <strong>2.2.</strong> Szczegółowy zakres usługi oraz koszt są każdorazowo ustalane indywidualnie z klientem 
                przed rozpoczęciem prac.
              </p>
              <p>
                <strong>2.3.</strong> Usługodawca zastrzega sobie prawo do odmowy wykonania usługi, jeżeli stan sprzętu 
                lub charakter żądanych czynności budzi wątpliwości co do zgodności z prawem.
              </p>
            </div>
          </Card>

          {/* Realizacja zamówienia */}
          <Card className="p-8 mb-6 border-border">
            <h2 className="text-2xl font-bold mb-4">3. Realizacja zamówienia</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>3.1.</strong> Termin realizacji usługi jest ustalany indywidualnie i zależy od rodzaju usługi, 
                dostępności części oraz obłożenia serwisu.
              </p>
              <p>
                <strong>3.2.</strong> Usługodawca dołoży wszelkich starań, aby zrealizować usługę w ustalonym terminie, 
                jednak nie ponosi odpowiedzialności za opóźnienia wynikające z przyczyn niezależnych 
                (np. opóźnienia dostawców, awarie).
              </p>
              <p>
                <strong>3.3.</strong> Klient zobowiązany jest do odbioru sprzętu w terminie 14 dni od poinformowania 
                o zakończeniu naprawy. Po tym terminie Usługodawca może naliczyć opłatę za magazynowanie.
              </p>
            </div>
          </Card>

          {/* Płatności i ceny */}
          <Card className="p-8 mb-6 border-border">
            <h2 className="text-2xl font-bold mb-4">4. Płatności i ceny</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>4.1.</strong> Ceny usług są podane w złotych polskich (PLN) i obejmują podatek VAT, jeśli ma zastosowanie.
              </p>
              <p>
                <strong>4.2.</strong> Płatność następuje po zakończeniu usługi, przy odbiorze sprzętu, chyba że strony 
                ustalą inaczej.
              </p>
              <p>
                <strong>4.3.</strong> Akceptowane formy płatności: gotówka, przelew bankowy (dane do przelewu dostępne na żądanie).
              </p>
              <p>
                <strong>4.4.</strong> W przypadku usług wymagających zakupu części, może być wymagana przedpłata lub zaliczka.
              </p>
            </div>
          </Card>

          {/* Odpowiedzialność */}
          <Card className="p-8 mb-6 border-border">
            <h2 className="text-2xl font-bold mb-4">5. Odpowiedzialność</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>5.1.</strong> Usługodawca nie ponosi odpowiedzialności za dane znajdujące się na nośnikach 
                przekazanych do serwisu. Klient zobowiązany jest do wykonania kopii zapasowej przed oddaniem sprzętu.
              </p>
              <p>
                <strong>5.2.</strong> Usługodawca dołoży wszelkich starań, aby chronić dane klienta, jednak nie ponosi 
                odpowiedzialności za ich utratę w wyniku awarii sprzętu.
              </p>
              <p>
                <strong>5.3.</strong> Gwarancja na wykonane usługi wynosi 30 dni od daty odbioru, chyba że strony ustalą inaczej. 
                Gwarancja nie obejmuje uszkodzeń mechanicznych ani wynikających z nieprawidłowego użytkowania.
              </p>
              <p>
                <strong>5.4.</strong> Części zamienne mogą posiadać własną gwarancję producenta, której zasady 
                są przekazywane klientowi.
              </p>
            </div>
          </Card>

          {/* Reklamacje */}
          <Card className="p-8 mb-6 border-border">
            <h2 className="text-2xl font-bold mb-4">6. Reklamacje</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>6.1.</strong> Reklamacje dotyczące jakości usług należy zgłaszać niezwłocznie, nie później niż 
                w ciągu 7 dni od odbioru sprzętu.
              </p>
              <p>
                <strong>6.2.</strong> Reklamację można zgłosić mailowo na adres kontakt@dew-komp.pl lub telefonicznie.
              </p>
              <p>
                <strong>6.3.</strong> Usługodawca rozpatrzy reklamację w terminie 14 dni roboczych i poinformuje klienta 
                o sposobie jej rozpatrzenia.
              </p>
            </div>
          </Card>

          {/* RODO */}
          <Card className="p-8 mb-6 border-primary/30 bg-primary-light/20">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">7. Ochrona danych osobowych (RODO)</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>7.1. Administrator danych:</strong> Administratorem danych osobowych jest DEW-Komp, 
                    kontakt: kontakt@dew-komp.pl
                  </p>
                  <p>
                    <strong>7.2. Zakres zbieranych danych:</strong> Zbieramy następujące dane osobowe: imię i nazwisko, 
                    adres e-mail, numer telefonu, dane niezbędne do realizacji usługi.
                  </p>
                  <p>
                    <strong>7.3. Cel przetwarzania danych:</strong> Dane są przetwarzane wyłącznie w celu:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>realizacji umowy o świadczenie usług serwisowych (art. 6 ust. 1 lit. b RODO)</li>
                    <li>kontaktu z klientem w sprawach związanych z usługą</li>
                    <li>wystawienia dokumentacji świadczonych usług</li>
                    <li>dochodzenia ewentualnych roszczeń (prawnie uzasadniony interes - art. 6 ust. 1 lit. f RODO)</li>
                    <li>marketingu bezpośredniego - wyłącznie za zgodą klienta (art. 6 ust. 1 lit. a RODO)</li>
                  </ul>
                  <p>
                    <strong>7.4. Okres przechowywania danych:</strong> Dane osobowe przechowywane są przez okres 
                    niezbędny do realizacji usługi oraz przez okres wymagany przepisami prawa (np. przepisy podatkowe).
                  </p>
                  <p>
                    <strong>7.5. Prawa klienta:</strong> Klient ma prawo do:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>dostępu do swoich danych osobowych</li>
                    <li>sprostowania (poprawiania) danych</li>
                    <li>usunięcia danych (tzw. prawo do bycia zapomnianym)</li>
                    <li>ograniczenia przetwarzania danych</li>
                    <li>przenoszenia danych</li>
                    <li>wniesienia sprzeciwu wobec przetwarzania danych</li>
                    <li>cofnięcia zgody w dowolnym momencie (jeśli przetwarzanie opiera się na zgodzie)</li>
                    <li>wniesienia skargi do organu nadzorczego (Prezes UODO)</li>
                  </ul>
                  <p>
                    <strong>7.6. Udostępnianie danych:</strong> Dane osobowe mogą być udostępniane wyłącznie:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>podmiotom uprawnionym na podstawie przepisów prawa</li>
                    <li>dostawcom usług technicznych wspierających działalność (np. hosting, poczta elektroniczna)</li>
                  </ul>
                  <p>
                    <strong>7.7. Bezpieczeństwo danych:</strong> Administrator stosuje odpowiednie środki techniczne 
                    i organizacyjne zapewniające ochronę danych osobowych przed ich utratą, nieprawidłowym 
                    wykorzystaniem lub nieuprawnionym dostępem.
                  </p>
                  <p>
                    <strong>7.8. Pliki cookies:</strong> Strona internetowa może używać plików cookies w celach 
                    technicznych i analitycznych. Użytkownik może w każdej chwili wyłączyć obsługę cookies w 
                    ustawieniach przeglądarki.
                  </p>
                  <p>
                    <strong>7.9. Kontakt w sprawach RODO:</strong> W sprawach związanych z ochroną danych osobowych 
                    można kontaktować się mailowo: kontakt@dew-komp.pl
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Postanowienia końcowe */}
          <Card className="p-8 mb-6 border-border">
            <h2 className="text-2xl font-bold mb-4">8. Postanowienia końcowe</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>8.1.</strong> W sprawach nieuregulowanych niniejszym regulaminem mają zastosowanie przepisy 
                Kodeksu cywilnego oraz inne właściwe przepisy prawa polskiego.
              </p>
              <p>
                <strong>8.2.</strong> Usługodawca zastrzega sobie prawo do zmiany regulaminu. Zmiany wchodzą w życie 
                z chwilą opublikowania na stronie internetowej.
              </p>
              <p>
                <strong>8.3.</strong> W przypadku sporów wynikających z realizacji umów, strony dążyć będą do ich 
                polubownego rozwiązania. W przypadku braku porozumienia, spory będą rozstrzygane przez właściwy 
                sąd powszechny.
              </p>
              <p>
                <strong>8.4.</strong> Niniejszy regulamin wchodzi w życie z dniem publikacji.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-muted border-border text-center">
            <p className="text-sm text-muted-foreground">
              Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              W razie pytań dotyczących regulaminu lub polityki prywatności prosimy o kontakt:{" "}
              <a href="mailto:kontakt@dew-komp.pl" className="text-primary hover:underline">
                kontakt@dew-komp.pl
              </a>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;
