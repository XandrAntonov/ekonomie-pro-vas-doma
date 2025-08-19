import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Mail, Phone } from 'lucide-react';

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <FileText className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Obchodní podmínky</h1>
            <p className="text-xl text-muted-foreground">
              Podmínky používání služeb EkonomieProVás.net
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Základní ustanovení</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Tyto obchodní podmínky upravují vztahy mezi provozovatelem webu 
                  EkonomieProVás.net a uživateli služeb.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p><strong>Provozovatel:</strong></p>
                  <p>Adresa: Jungmannova 26/15, 110 00 Praha 1, Česká republika</p>
                  <p>Email: info@ekonomieprovas.net</p>
                  <p>Telefon: +420 222 210 111</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Služby</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">2.1 Bezplatné služby</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Přístup k článkům a základním tipům na webu</li>
                    <li>Newsletter s praktickými radami</li>
                    <li>Základní šablony ke stažení</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2.2 Premium služby</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Exkluzivní články a detailní návody</li>
                    <li>Přístup k pokročilým šablonám a nástrojům</li>
                    <li>Účast v měsíčních webinářích</li>
                    <li>Přístup k uzavřené komunitě</li>
                    <li>Osobní podpora od finančních expertů</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Premium členství</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">3.1 Cenový plán</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Měsíční členství: 299 Kč/měsíc</li>
                    <li>Roční členství: 2999 Kč/rok (úspora 589 Kč)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3.2 Aktivace Premium</h4>
                  <p>
                    Premium služby se aktivují po úspěšném zaplacení prvního období. 
                    Přístup získáte do 24 hodin od platby.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3.3 Obnovení členství</h4>
                  <p>
                    Měsíční členství se automaticky obnovuje každý měsíc, 
                    roční členství každý rok, pokud není zrušeno.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Platební podmínky</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">4.1 Způsoby platby</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Platební karta (Visa, MasterCard)</li>
                    <li>Bankovní převod</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4.2 Splatnost</h4>
                  <p>
                    Platby kartou jsou zpracovány okamžitě. Bankovní převody 
                    do 5 pracovních dnů.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4.3 Daňové doklady</h4>
                  <p>
                    Faktury jsou automaticky zasílány na emailovou adresu 
                    po každé platbě.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Zrušení a refundace</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">5.1 Zrušení členství</h4>
                  <p>
                    Premium členství můžete zrušit kdykoliv bez udání důvodu. 
                    Přístup vám zůstane až do konce zaplaceného období.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">5.2 14denní záruka</h4>
                  <p>
                    Pokud nebudete spokojeni s Premium službami do 14 dnů 
                    od aktivace, vrátíme vám celou částku.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">5.3 Způsob refundace</h4>
                  <p>
                    Peníze jsou vráceny na původní platební metodu do 7 pracovních dnů.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Práva a povinnosti</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">6.1 Práva uživatele</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Přístup ke všem placeným službám po dobu trvání členství</li>
                    <li>Technickou podporu při problémech se službami</li>
                    <li>Ochranu osobních údajů dle GDPR</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">6.2 Povinnosti uživatele</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Poskytovat pravdivé a aktuální údaje</li>
                    <li>Nesdílet přístupové údaje s třetími osobami</li>
                    <li>Respektovat autorská práva k obsahu</li>
                    <li>Chovat se slušně v komunitě</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Duševní vlastnictví</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Veškerý obsah webu (články, videa, šablony, návody) 
                  je chráněn autorskými právy a je vlastnictvím provozovatele.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">7.1 Povolené použití</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Osobní použití obsahu pro vlastní potřeby</li>
                    <li>Stažení šablon pro vlastní finanční plánování</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">7.2 Zakázané použití</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Komerční využití obsahu bez souhlasu</li>
                    <li>Kopírování a redistribuce materiálů</li>
                    <li>Úpravy obsahu bez povolení</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Vyloučení odpovědnosti</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800">
                    <strong>Důležité upozornění:</strong> Obsah na webu slouží pouze 
                    pro vzdělávací účely a nepředstavuje finanční poradenství. 
                    Před důležitými finančními rozhodnutími se poraďte s odborníkem.
                  </p>
                </div>
                <p>
                  Provozovatel nenese odpovědnost za škody vzniklé použitím 
                  informací z webu. Každý uživatel jedná na vlastní odpovědnost.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Řešení sporů</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Případné spory se snažíme řešit smírnou cestou. 
                  V případě neúspěchu jsou spory řešeny u věcně příslušného soudu.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">9.1 Mimosoudní řešení</h4>
                  <p>
                    Pro řešení sporů můžete kontaktovat Českou obchodní inspekci 
                    nebo využít platformu ODR (Online Dispute Resolution).
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Závěrečná ustanovení</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Tyto obchodní podmínky se řídí českým právem. 
                  Změny podmínek jsou možné s 30denním předstihem.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p><strong>Kontakt pro dotazy:</strong></p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>info@ekonomieprovas.net</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+420 222 210 111</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  <strong>Platnost od:</strong> 19. srpna 2024
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;