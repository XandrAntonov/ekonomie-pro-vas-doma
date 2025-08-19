import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Gift, TrendingUp, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { useSearchParams, Link } from 'react-router-dom';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreedToGDPR, setAgreedToGDPR] = useState(false);
  const [searchParams] = useSearchParams();
  const isPremium = searchParams.get('premium') === 'true';
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToGDPR) {
      toast({
        title: "Chyba",
        description: "Musíte souhlasit se zpracováním osobních údajů.",
        variant: "destructive"
      });
      return;
    }
    
    // Zde by byla logika pro registraci
    setIsSubmitted(true);
    toast({
      title: "Úspěšně přihlášeno!",
      description: isPremium 
        ? "Brzy vás kontaktujeme ohledně Premium členství." 
        : "Těšte se na první newsletter příští týden!",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-financial rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Děkujeme!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              {isPremium 
                ? "Váš zájem o Premium členství jsme zaznamenali. Brzy vás kontaktujeme s dalšími informacemi a instrukcemi k platbě."
                : "Úspěšně jste se přihlásili k odběru našeho newsletteru. První emaile očekávejte příští týden."
              }
            </p>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Mezitím můžete:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" asChild>
                  <Link to="/clanky">
                    Procházet články
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/">
                    Zpět na hlavní stránku
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">
              {isPremium ? 'Připojit se k Premium' : 'Přihlaste se k newsletteru'}
            </h1>
            <p className="text-xl text-muted-foreground">
              {isPremium 
                ? 'Získejte přístup k exkluzivním materiálům a osobní podpoře finančních expertů'
                : 'Každý týden dostanete praktické rady pro lepší finanční disciplínu'
              }
            </p>
          </div>

          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle className="flex items-center">
                {isPremium ? <TrendingUp className="mr-2 h-5 w-5" /> : <Gift className="mr-2 h-5 w-5" />}
                {isPremium ? 'Registrace Premium členství' : 'Bezplatný newsletter'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="vas@email.cz"
                    className="mt-2"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="gdpr" 
                    checked={agreedToGDPR}
                    onCheckedChange={(checked) => setAgreedToGDPR(checked === true)}
                  />
                  <div className="text-sm">
                    <Label htmlFor="gdpr" className="font-normal cursor-pointer">
                      Souhlasím se{' '}
                      <Link to="/gdpr" className="text-primary hover:underline">
                        zpracováním osobních údajů
                      </Link>
                      {' '}a{' '}
                      <Link to="/obchodni-podminky" className="text-primary hover:underline">
                        obchodními podmínkami
                      </Link>
                      . *
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-financial hover:bg-gradient-trust" 
                  size="lg"
                  disabled={!email || !agreedToGDPR}
                >
                  {isPremium ? (
                    <>
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Registrovat Premium členství
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Přihlásit se k newsletteru
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t">
                <h3 className="font-semibold mb-4">
                  {isPremium ? 'Co získáte v Premium:' : 'Co dostanete v newsletteru:'}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {isPremium ? (
                    <>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>Exkluzivní články a detailní návody</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>Šablony pro Excel (rozpočty, plánování)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>Měsíční živé webináře s Q&A</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>Přístup k uzavřené komunitě</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>Osobní podpora od expertů</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>Týdenní praktické tipy pro úsporu peněz</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>Novinky z blogu jako první</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>Exkluzivní šablony zdarma</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>Pozvánky na webináře</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Newsletter;