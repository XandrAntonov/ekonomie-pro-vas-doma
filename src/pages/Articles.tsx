import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from 'lucide-react';
import { useState } from 'react';
import shoppingListImage from "@/assets/shopping-list-guide.jpg";
import budgetPlanningImage from "@/assets/family-budget-planning.jpg";
import travelPlanningImage from "@/assets/travel-planning-budget.jpg";
import financialHabitsImage from "@/assets/financial-habits.jpg";
import expenseControlImage from "@/assets/expense-control-home.jpg";
import dailyStabilityImage from "@/assets/daily-financial-stability.jpg";

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Všechny");

  const articles = [
    {
      id: "seznam-nakupu-ekonomie",
      title: "Jak správně vést seznam nákupů a reálně ekonomit",
      description: "Praktický průvodce efektivním plánováním nákupů, který vám ušetří čas i peníze. Naučte se vytvářet chytré nákupní seznamy a vyhnout se impulzivním nákupům.",
      image: shoppingListImage,
      date: "15. leden 2024",
      readTime: "8 min čtení",
      category: "Nákupy"
    },
    {
      id: "rodinny-rozpocet-mesic",
      title: "Plánování rozpočtu rodiny na měsíc bez stresu",
      description: "Krok za krokem k efektivnímu rodinnému rozpočtu. Jednoduchá metoda, která funguje i pro začátečníky a pomůže vám získat kontrolu nad financemi.",
      image: budgetPlanningImage,
      date: "12. leden 2024",
      readTime: "10 min čtení",
      category: "Rozpočet"
    },
    {
      id: "organizace-cest-ekonomie",
      title: "Rady pro organizaci cest: jak ušetřit a neztratit důležité",
      description: "Kompletní příručka cestování s rozpočtem. Od plánování po realizaci - všechny triky zkušených cestovatelů pro levné a kvalitní dovolené.",
      image: travelPlanningImage,
      date: "8. leden 2024",
      readTime: "12 min čtení",
      category: "Cestování"
    },
    {
      id: "navyky-financni-disciplina",
      title: "Návyky, které pomáhají disciplinovat finance v bytě",
      description: "Objevte jednoduché návyky, které můžete začít praktikovat už dnes a které vám postupně pomohou vybudovat silnou finanční disciplínu.",
      image: financialHabitsImage,
      date: "5. leden 2024",
      readTime: "7 min čtení",
      category: "Návyky"
    },
    {
      id: "kontrola-vydaju-domov",
      title: "Jednoduché metody kontroly výdajů v domácích podmínkách",
      description: "Praktické techniky a nástroje pro sledování výdajů, které si můžete nastavit doma během jednoho víkendu. Bez složitých aplikací.",
      image: expenseControlImage,
      date: "2. leden 2024",
      readTime: "9 min čtení",
      category: "Kontrola výdajů"
    },
    {
      id: "denni-navyky-stabilita",
      title: "Jak ежедневné návyky ovlivňují finanční stabilitu",
      description: "Analýza každodenních rozhodnutí a jejich dlouhodobého dopadu na vaši finanční situaci. Malé změny, velké výsledky.",
      image: dailyStabilityImage,
      date: "28. prosinec 2023",
      readTime: "11 min čtení",
      category: "Stabilita"
    }
  ];

  const categories = ["Všechny", "Nákupy", "Rozpočet", "Cestování", "Návyky", "Kontrola výdajů", "Stabilita"];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Všechny" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Všechny články</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Praktické rady a návody pro lepší finanční disciplínu a organizaci domácnosti
          </p>
        </div>

        {/* Filtry a vyhledávání */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Hledat články..."
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

        {/* Seznam článků */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Žádné články nenalezeny</h3>
            <p className="text-muted-foreground">
              Zkuste změnit vyhledávací termín nebo kategorii
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Articles;