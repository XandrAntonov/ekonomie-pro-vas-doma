import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Users, Target, Award, BookOpen, Heart, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Praktičnost",
      description: "Všechny naše rady jsou testované a aplikovatelné v reálném životě českých rodin."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Jednoduchost",
      description: "Složité finanční pojmy vysvětlujeme jednoduše a srozumitelně pro každého."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Komunita",
      description: "Budujeme komunitu lidí, kteří si vzájemně pomáhají na cestě k finanční stabilitě."
    }
  ];

  const team = [
    {
      name: "Marie Nováková",
      role: "Zakladatelka a finanční poradkyně",
      description: "15 let zkušeností s rodinným finančním plánováním. Specializuje se na praktické návyky pro české domácnosti."
    },
    {
      name: "Petr Svoboda",
      role: "Editor a autor obsahu",
      description: "Bývalý novinář se specializací na ekonomiku. Pomáhá překládat finanční teorie do praktických rad."
    },
    {
      name: "Jana Kratochvílová",
      role: "Komunita a podpora",
      description: "Stará se o naše čtenáře a premium členy. Organizuje webináre a vzdělávací akce."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero sekce */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">O projektu EkonomieProVás</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pomáháme českým rodinám najít cestu k finanční stabilitě prostřednictvím 
            praktických rad, ověřených metod a podporující komunity.
          </p>
        </div>

        {/* Naše mise */}
        <section className="mb-16">
          <div className="bg-gradient-subtle rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <Award className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Naše mise</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Věříme, že každá česká rodina si zaslouží finanční stabilitu a klid. 
                Naším cílem není učit vás investovat do složitých finančních produktů, 
                ale pomoci vám vybudovat zdravé návyky, které vám dlouhodobě ušetří peníze 
                a zjednoduší život.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-accent">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Co děláme jinak */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Co děláme jinak?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Zaměřujeme se na každodenní finanční návyky, ne na složité investiční strategie
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Praktické, ne teoretické</h3>
                    <p className="text-muted-foreground">
                      Každý návod, který publikujeme, jsme nejdříve vyzkoušeli na vlastní kůži.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Pro české podmínky</h3>
                    <p className="text-muted-foreground">
                      Všechny rady upravujeme pro specifika českého trhu a českých rodin.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Dlouhodobé výsledky</h3>
                    <p className="text-muted-foreground">
                      Nesoustředíme se na rychlé triky, ale na návyky, které vám pomohou celý život.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="bg-gradient-financial text-primary-foreground p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Více než 10 000</h3>
                <p className="text-lg mb-4">českých rodin už využívá naše rady</p>
                <p className="opacity-90">
                  Připojte se k nim a začněte budovat lepší finanční budoucnost ještě dnes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Náš tým */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Náš tým</h2>
            <p className="text-xl text-muted-foreground">
              Lidé, kteří stojí za EkonomieProVás.net
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-card-custom">
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-gradient-financial mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA sekce */}
        <section className="text-center bg-gradient-subtle rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold mb-4">Chcete začít?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Začněte číst naše články nebo se připojte k Premium komunitě 
            pro přístup k exkluzivním materiálům a osobní podpoře.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" asChild>
              <Link to="/clanky">
                <BookOpen className="mr-2 h-5 w-5" />
                Procházet články
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/premium">
                <TrendingUp className="mr-2 h-5 w-5" />
                Zjistit více o Premium
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;