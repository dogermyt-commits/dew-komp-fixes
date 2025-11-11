import { Card } from "@/components/ui/card";
import { Heart, Award, Users } from "lucide-react";
const About = () => {
  return <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">O nas</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Poznaj naszą historię i pasję do technologii
          </p>

          <Card className="p-8 mb-12 shadow-medium border-border">
            <p className="text-lg leading-relaxed mb-6">Dziś, z zdobytym doświadczeniem i nieustanną chęcią rozwoju, pomagamy klientom w naprawie, modernizacji i optymalizacji ich komputerów.</p>
            <p className="text-lg leading-relaxed mb-6">Nasza przygoda z komputerami rozpoczęła się od lat dzieciństwa. Od zawsze fascynowała nas elektronika i możliwości, jakie daje nam technologia. Z czasem hobby przekształciło się w zawód, a my mogliśmy połączyć pasję.</p>
            <p className="text-lg leading-relaxed">​Nasi pracownicy posiadają doświadczenie w tym zawodzie i są odpowiednio szkoleni do wykonywania usług</p>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-large transition-shadow">
              <div className="flex justify-center mb-4">
                <Heart className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Pasja</h3>
              <p className="text-muted-foreground text-sm">
                Robimy to, co kochamy. Każdy projekt to dla nas przyjemność.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-large transition-shadow">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Doświadczenie</h3>
              <p className="text-muted-foreground text-sm">Praktyki w naprawie i modernizacji komputerów.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-large transition-shadow">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Klient na pierwszym miejscu</h3>
              <p className="text-muted-foreground text-sm">
                Twoje zadowolenie jest naszym priorytetem.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default About;