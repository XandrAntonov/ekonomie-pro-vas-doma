import { Link } from 'react-router-dom';
import { Calculator, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo a popis */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-financial shadow-financial">
                <Calculator className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground">EkonomieProVás.net</span>
                <span className="text-sm text-muted-foreground">Praktické finanční návyky</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Pomáháme českým rodinám zlepšit finanční disciplínu, organizovat rozpočet 
              a vytvářet zdravé návyky pro lepší finanční budoucnost.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/gdpr" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                GDPR
              </Link>
              <Link 
                to="/cookies" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cookies
              </Link>
              <Link 
                to="/obchodni-podminky" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Obchodní podmínky
              </Link>
            </div>
          </div>

          {/* Kontaktní informace */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Jungmannova 26/15<br />110 00 Praha 1, Česko</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@ekonomieprovas.net" className="hover:text-primary transition-colors">
                  info@ekonomieprovas.net
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+420222210111" className="hover:text-primary transition-colors">
                  +420 222 210 111
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Po-Pá: 9:00-17:00</span>
              </div>
            </div>
          </div>

          {/* Užitečné odkazy */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Užitečné odkazy</h3>
            <div className="space-y-2">
              <Link to="/clanky" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Všechny články
              </Link>
              <Link to="/tipy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Praktické tipy
              </Link>
              <Link to="/premium" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Premium komunita
              </Link>
              <Link to="/newsletter" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Newsletter
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 EkonomieProVás.net. Všechna práva vyhrazena.
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              Vytvořeno s ❤️ pro česke rodiny
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;