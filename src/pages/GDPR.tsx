import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Mail, Phone } from 'lucide-react';

const GDPR = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Ochrana osobních údajů (GDPR)</h1>
            <p className="text-xl text-muted-foreground">
              Informace o zpracování vašich osobních údajů dle nařízení GDPR
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Správce osobních údajů</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Správcem vašich osobních údajů je provozovatel webu EkonomieProVás.net:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p><strong>Adresa:</strong> Jungmannova 26/15, 110 00 Praha 1, Česká republika</p>
                  <p><strong>Email:</strong> info@ekonomieprovas.net</p>
                  <p><strong>Telefon:</strong> +420 222 210 111</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Jaké údaje zpracováváme</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Zpracováváme tyto kategorie osobních údajů:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Identifikační údaje:</strong> jméno, příjmení, email</li>
                  <li><strong>Kontaktní údaje:</strong> emailová adresa, telefonní číslo (dobrovolně)</li>
                  <li><strong>Technické údaje:</strong> IP adresa, cookies, údaje o prohlížeči</li>
                  <li><strong>Údaje o používání:</strong> návštěvy stránek, čtené články</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Účel zpracování a právní základ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Newsletter a komunikace</h4>
                  <p className="text-muted-foreground mb-2">
                    <strong>Účel:</strong> Zasílání newsletteru, odpovědi na dotazy
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Právní základ:</strong> Souhlas (čl. 6 odst. 1 písm. a) GDPR)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Premium služby</h4>
                  <p className="text-muted-foreground mb-2">
                    <strong>Účel:</strong> Poskytování Premium obsahů a podpory
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Právní základ:</strong> Plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technické cookies</h4>
                  <p className="text-muted-foreground mb-2">
                    <strong>Účel:</strong> Technické fungování webu, analytics
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Právní základ:</strong> Oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Doba uchovávání údajů</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Newsletter:</strong> Do odvolání souhlasu nebo ukončení služby</li>
                  <li><strong>Premium členství:</strong> Po dobu trvání členství + 3 roky (daňové účely)</li>
                  <li><strong>Kontaktní formuláře:</strong> 2 roky od posledního kontaktu</li>
                  <li><strong>Technické cookies:</strong> Podle typu cookie (viz Cookie Policy)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Předávání údajů třetím stranám</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Vaše osobní údaje můžeme předávat těmto kategoriím příjemců:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Technické platformy:</strong> Google Analytics (anonymizovaně)</li>
                  <li><strong>Platební brány:</strong> Pro zpracování plateb Premium členství</li>
                  <li><strong>Email služby:</strong> Pro zasílání newsletteru a komunikaci</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Všichni třetí zpracovatelé jsou vázáni smlouvami o zpracování osobních údajů 
                  a zpracovávají údaje pouze v rozsahu nezbytném pro poskytování služeb.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Vaše práva</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Podle GDPR máte následující práva:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Právo na přístup:</strong> Zjistit, jaké údaje o vás zpracováváme</li>
                  <li><strong>Právo na opravu:</strong> Opravit nesprávné nebo neúplné údaje</li>
                  <li><strong>Právo na výmaz:</strong> Smazání údajů (právo být zapomenut)</li>
                  <li><strong>Právo na omezení:</strong> Omezit zpracování za určitých podmínek</li>
                  <li><strong>Právo na přenositelnost:</strong> Získat údaje ve strojově čitelném formátu</li>
                  <li><strong>Právo vznést námitku:</strong> Proti zpracování na základě oprávněného zájmu</li>
                  <li><strong>Právo odvolat souhlas:</strong> Kdykoliv odvolat udělený souhlas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Jak uplatnit svá práva</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Pro uplatnění svých práv nás kontaktujte:</p>
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>Email: info@ekonomieprovas.net</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>Telefon: +420 222 210 111</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Na vaši žádost odpovíme do 30 dnů. V složitějších případech můžeme lhůtu 
                  prodloužit o dalších 60 dnů s předchozím upozorněním.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Stížnosti</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Pokud se domníváte, že zpracováváme vaše osobní údaje v rozporu s GDPR, 
                  můžete podat stížnost u:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p><strong>Úřad pro ochranu osobních údajů</strong></p>
                  <p>Pplk. Sochora 27, 170 00 Praha 7</p>
                  <p>Web: uoou.cz</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Aktualizace těchto informací</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Tyto informace o ochraně osobních údajů můžeme čas od času aktualizovat. 
                  O významných změnách vás budeme informovat prostřednictvím webu nebo emailu.
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>Poslední aktualizace:</strong> 19. srpna 2024
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GDPR;