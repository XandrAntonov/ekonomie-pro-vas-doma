import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Lightbulb, 
  Calculator, 
  ShoppingCart, 
  PiggyBank, 
  Calendar,
  FileText,
  Search,
  Download,
  Clock,
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Tips = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Všechny");

  const tips = [
    {
      id: 1,
      title: "50/30/20 pravidlo pro rozpočet",
      description: "50% na potřeby, 30% na přání, 20% na spoření. Jednoduchá metoda rozdělení příjmů.",
      category: "Rozpočet",
      difficulty: "Začátečník",
      timeToRead: "2 min",
      icon: <Calculator className="h-5 w-5 text-primary" />,
      downloadable: true
    },
    {
      id: 2,
      title: "Týdenní plán nákupů",
      description: "Naplánujte si menu na celý týden a nakupujte podle seznamu. Ušetříte až 30% na potravinách.",
      category: "Nákupy",
      difficulty: "Začátečník",
      timeToRead: "3 min",
      icon: <ShoppingCart className="h-5 w-5 text-primary" />,
      downloadable: true
    },
    {
      id: 3,
      title: "Automatické spoření",
      description: "Nastavte si automatický převod na spořicí účet hned po výplatě. Co nevidíte, neutratíte.",
      category: "Spoření",
      difficulty: "Pokročilý",
      timeToRead: "4 min",
      icon: <PiggyBank className="h-5 w-5 text-primary" />,
      downloadable: false
    },
    {
      id: 4,
      title: "Měsíční finanční check-up",
      description: "Každý měsíc si projděte výdaje a příjmy. 15 minut, které vám ušetří tisíce korun.",
      category: "Kontrola",
      difficulty: "Středně pokročilý",
      timeToRead: "5 min",
      icon: <FileText className="h-5 w-5 text-primary" />,
      downloadable: true
    },
    {
      id: 5,
      title: "Rezerva na nepředvídané výdaje",
      description: "Vytvořte si rezervu ve výši 3-6 měsíčních výdajů. Začněte s 1000 Kč měsíčně.",
      category: "Rezerva",
      difficulty: "Středně pokročilý",
      timeToRead: "6 min",
      icon: <Calendar className="h-5 w-5 text-primary" />,
      downloadable: false
    },
    {
      id: 6,
      title: "Tracking výdajů přes aplikaci",
      description: "Využijte mobilní aplikace pro sledování výdajů. Doporučujeme české aplikace s bankovním propojením.",
      category: "Technologie",
      difficulty: "Pokročilý",
      timeToRead: "7 min",
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      downloadable: false
    }
  ];

  const categories = ["Všechny", "Rozpočet", "Nákupy", "Spoření", "Kontrola", "Rezerva", "Technologie"];

  const filteredTips = tips.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tip.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Všechny" || tip.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Začátečník": return "bg-green-100 text-green-800";
      case "Středně pokročilý": return "bg-yellow-100 text-yellow-800";
      case "Pokročilý": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Lightbulb className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Praktické tipy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rychlé a jednoduché rady, které můžete aplikovat ještě dnes. 
            Stažitelné check-listy a šablony zdarma.
          </p>
        </div>

        {/* Filtry a vyhledávání */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Hledat tipy..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Statistiky */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary mb-2">{tips.length}</div>
              <p className="text-sm text-muted-foreground">Celkem tipů</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary mb-2">
                {tips.filter(tip => tip.downloadable).length}
              </div>
              <p className="text-sm text-muted-foreground">Ke stažení</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary mb-2">
                {tips.filter(tip => tip.difficulty === "Začátečník").length}
              </div>
              <p className="text-sm text-muted-foreground">Pro začátečníky</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary mb-2">
                {Math.round(tips.reduce((sum, tip) => sum + parseInt(tip.timeToRead), 0) / tips.length)}
              </div>
              <p className="text-sm text-muted-foreground">Průměr minut</p>
            </CardContent>
          </Card>
        </div>

        {/* Seznam tipů */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTips.map((tip) => (
            <Card key={tip.id} className="hover:shadow-card-custom transition-shadow group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-accent">
                      {tip.icon}
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs mb-2">
                        {tip.category}
                      </Badge>
                    </div>
                  </div>
                  {tip.downloadable && (
                    <Download className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {tip.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {tip.description}
                </p>
                
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{tip.timeToRead}</span>
                    </div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${getDifficultyColor(tip.difficulty)}`}
                  >
                    {tip.difficulty}
                  </Badge>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Číst více
                  </Button>
                  {tip.downloadable && (
                    <Button size="sm" variant="outline">
                      <Download className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTips.length === 0 && (
          <div className="text-center py-12">
            <Lightbulb className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Žádné tipy nenalezeny</h3>
            <p className="text-muted-foreground">
              Zkuste změnit vyhledávací termín nebo kategorii
            </p>
          </div>
        )}

        {/* CTA sekce */}
        <section className="mt-16 text-center bg-gradient-subtle rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold mb-4">Chcete ještě více tipů?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            V Premium komunitě najdete exkluzivní tipy, detailní návody 
            a osobní podporu od finančních expertů.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" asChild>
              <Link to="/premium">
                <TrendingUp className="mr-2 h-5 w-5" />
                Vyzkoušet Premium
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/newsletter">
                Přihlásit newsletter
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Tips;