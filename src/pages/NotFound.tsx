import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
        <div className="text-center px-4">
          <div className="mb-8">
            <div className="text-8xl font-bold text-primary mb-4">404</div>
            <h1 className="text-4xl font-bold mb-4">Stránka nenalezena</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
              Omlouváme se, ale stránka kterou hledáte neexistuje nebo byla přesunuta.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="default" asChild>
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Domovská stránka
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/clanky">
                <Search className="mr-2 h-5 w-5" />
                Procházet články
              </Link>
            </Button>
          </div>
          
          <div className="mt-12">
            <p className="text-muted-foreground mb-4">Možná vás bude zajímat:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link to="/tipy" className="text-primary hover:underline text-sm">
                Praktické tipy
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/premium" className="text-primary hover:underline text-sm">
                Premium komunita
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/kontakt" className="text-primary hover:underline text-sm">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
