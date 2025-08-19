import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import { TrendingUp, Users, BookOpen, CheckCircle, Star, Award } from 'lucide-react';
import heroImage from "@/assets/hero-financial-planning.jpg";
import shoppingListImage from "@/assets/shopping-list-guide.jpg";
import budgetPlanningImage from "@/assets/family-budget-planning.jpg";
import travelPlanningImage from "@/assets/travel-planning-budget.jpg";
import financialHabitsImage from "@/assets/financial-habits.jpg";
import expenseControlImage from "@/assets/expense-control-home.jpg";
import dailyStabilityImage from "@/assets/daily-financial-stability.jpg";

const Index = () => {
  const featuredArticles = [
    {
      id: "seznam-nakupu-ekonomie",
      title: "Jak správně vést seznam nákupů a reálně ekonomit",
      description: "Praktický průvodce efektivním plánováním nákupů, který vám ušetří čas i peníze. Naučte se vytvářet chytré nákupní seznamy.",
      image: shoppingListImage,
      date: "15. leden 2024",
      readTime: "8 min čtení",
      category: "Nákupy"
    },
    {
      id: "rodinny-rozpocet-mesic",
      title: "Plánování rozpočtu rodiny na měsíc bez stresu",
      description: "Krok za krokem k efektivnímu rodinnému rozpočtu. Jednoduchá metoda, která funguje i pro začátečníky.",
      image: budgetPlanningImage,
      date: "12. leden 2024",
      readTime: "10 min čtení",
      category: "Rozpočet"
    },
    {
      id: "organizace-cest-ekonomie",
      title: "Rady pro organizaci cest: jak ušetřit a neztratit důležité",
      description: "Kompletní příručka cestování s rozpočtem. Od plánování po realizaci - všechny triky zkušených cestovatelů.",
      image: travelPlanningImage,
      date: "8. leden 2024",
      readTime: "12 min čtení",
      category: "Cestování"
    }
  ];

  const benefits = [
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Praktické návody",
      description: "Krok za krokem průvodce k lepší finanční disciplíně"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Zkušená komunita",
      description: "Přidejte se k tisícům Čechů, kteří již zlepšili své finance"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Ověřené metody",
      description: "Všechny rady testujeme na vlastní kůži před publikováním"
    }
  ];

  return (
    <Layout>
      {/* Hero sekce */}
      <section className="relative bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Zlepšete své <span className="text-primary-glow">finanční návyky</span> každý den
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Praktické rady pro české rodiny o plánování rozpočtu, organizaci domácnosti 
              a budování finančně stabilní budoucnosti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <Link to="/clanky">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Procházet články
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <Link to="/premium">
                  <Star className="mr-2 h-5 w-5" />
                  Vyzkoušet Premium
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Výhody sekce */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Proč si vybrat EkonomieProVás?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pomáháme českým rodinám najít cestu k finanční stabilitě prostřednictvím praktických a ověřených metod.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-card-custom hover:shadow-financial transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-accent">
                      {benefit.icon}
                    </div>
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doporučené články */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Nejnovější články</h2>
            <p className="text-xl text-muted-foreground">
              Praktické rady, které můžete aplikovat již dnes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/clanky">
                Zobrazit všechny články
                <BookOpen className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Premium komunita CTA */}
      <section className="py-16 bg-gradient-financial text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="h-16 w-16 mx-auto mb-6 text-primary-glow" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Připojte se k Premium komunitě
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Získejte přístup k exkluzivním materiálům, praktickým šablonám 
              a osobní podporě od finančních expertů.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <Link to="/premium">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Zjistit více o Premium
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <Link to="/kontakt">
                  Kontaktovat nás
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
