import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Users, 
  FileText, 
  Video, 
  MessageSquare, 
  Calendar,
  Download,
  TrendingUp,
  Award
} from 'lucide-react';

const Premium = () => {
  const features = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Exkluzivní články a návody",
      description: "Přístup k detailním průvodcům, které nejsou dostupné zdarma"
    },
    {
      icon: <Download className="h-6 w-6 text-primary" />,
      title: "Šablony a nástroje",
      description: "Stažitelné Excel šablony pro rozpočty, plánování a sledování výdajů"
    },
    {
      icon: <Video className="h-6 w-6 text-primary" />,
      title: "Video kurzy",
      description: "Krok za krokem video návody pro praktické finanční dovednosti"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Přímá podpora",
      description: "Možnost klást otázky přímo našim expertům a získat osobní rady"
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Měsíční webináře",
      description: "Živé online přednášky s možností pokládat otázky v reálném čase"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Uzavřená komunita",
      description: "Diskuze s ostatními členy, sdílení zkušeností a vzájemná podpora"
    }
  ];

  const plans = [
    {
      name: "Měsíční",
      price: "299",
      period: "měsíc",
      description: "Flexibilní plán pro začátečníky",
      popular: false,
      savings: null
    },
    {
      name: "Roční",
      price: "2999",
      originalPrice: "3588",
      period: "rok",
      description: "Nejlepší hodnota pro dlouhodobý rozvoj",
      popular: true,
      savings: "Ušetříte 589 Kč"
    }
  ];

  const testimonials = [
    {
      name: "Petra Nová",
      role: "Matka na mateřské",
      text: "Díky Premium komunitě jsem se naučila spravovat rodinný rozpočet tak, že nám každý měsíc zbyde na spoření. Šablony jsou úžasné!"
    },
    {
      name: "Martin Svoboda",
      role: "OSVČ",
      text: "Video kurzy mi pomohly pochopit, jak si správně rozdělit příjmy jako OSVČ. Konečně mám pod kontrolou i nepravidelné příjmy."
    },
    {
      name: "Jana Kratochvílová",
      role: "Úřednice",
      text: "Webináře jsou skvělé, vždy se dozvím něco nového. A komunita je velmi podporující, všichni si navzájem pomáhají."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero sekce */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Star className="h-4 w-4 mr-1" />
            Premium komunita
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Zlepšete své finance s <span className="text-primary">Premium</span> podporou
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Získejte přístup k exkluzivním materiálům, praktickým nástrojům 
            a osobní podpoře od finančních expertů. Investice, která se vrátí již první měsíc.
          </p>
        </div>

        {/* Výhody Premium */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Co získáte v Premium</h2>
            <p className="text-xl text-muted-foreground">
              Kompletní podpora pro vaši cestu k finanční stabilitě
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-card-custom hover:shadow-financial transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-accent">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cenové plány */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Vyberte si plán</h2>
            <p className="text-xl text-muted-foreground">
              Flexibilní možnosti pro každý rozpočet
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-financial' : 'shadow-card-custom'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Award className="h-4 w-4 mr-1" />
                      Nejpopulárnější
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">Kč</span>
                    </div>
                    <div className="flex items-center justify-center mt-2">
                      <span className="text-muted-foreground">za {plan.period}</span>
                      {plan.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          {plan.originalPrice} Kč
                        </span>
                      )}
                    </div>
                    {plan.savings && (
                      <Badge variant="secondary" className="mt-2">
                        {plan.savings}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-center text-muted-foreground mb-6">{plan.description}</p>
                  
                  <div className="space-y-3">
                    {features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature.title}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full mt-6 ${plan.popular ? 'bg-gradient-financial hover:bg-gradient-trust' : ''}`}
                    size="lg"
                    asChild
                  >
                    <Link to="/newsletter?premium=true">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Začít s Premium
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Co říkají naši členové</h2>
            <p className="text-xl text-muted-foreground">
              Skutečné zkušenosti lidí, kteří zlepšili své finance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card-custom">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ sekce */}
        <section className="bg-gradient-subtle rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Často kladené otázky</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-lg mb-2">Mohu zrušit kdykoliv?</h3>
              <p className="text-muted-foreground mb-4">
                Ano, můžete zrušit své Premium členství kdykoliv bez udání důvodu. 
                Přístup vám zůstane až do konce zaplaceného období.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Jak probíhá platba?</h3>
              <p className="text-muted-foreground mb-4">
                Platba probíhá bezpečně online kartou. Roční členství je zpoplatněno 
                jednorázově, měsíční se obnovuje automaticky.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Co když mi Premium nevyhovuje?</h3>
              <p className="text-muted-foreground mb-4">
                Nabízíme 14denní záruku vrácení peněz. Pokud nebudete spokojeni, 
                vrátíme vám celou částku bez ptaní.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Kolik času to zabere?</h3>
              <p className="text-muted-foreground">
                Doporučujeme věnovat Premium materiálům alespoň 30 minut týdně. 
                Výsledky uvidíte již po prvním měsíci.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Premium;