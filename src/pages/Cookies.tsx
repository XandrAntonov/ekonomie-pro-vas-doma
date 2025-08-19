import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cookie, Settings, BarChart, Shield } from 'lucide-react';

const Cookies = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Cookie className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Zásady používání cookies</h1>
            <p className="text-xl text-muted-foreground">
              Informace o tom, jak používáme cookies na webu EkonomieProVás.net
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Co jsou cookies?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Cookies jsou malé textové soubory, které se ukládají do vašeho zařízení 
                  (počítač, tablet, mobilní telefon) při návštěvě našeho webu. Pomáhají nám 
                  zlepšovat funkčnost webu a poskytovat vám lepší uživatelský zážitek.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Jaké cookies používáme</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4 p-4 bg-muted rounded-lg">
                    <Settings className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Nezbytné cookies</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Zajišťují základní fungování webu
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Nelze zakázat • Doba platnosti: relace
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-muted rounded-lg">
                    <BarChart className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Analytické cookies</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Pomáhají zlepšovat web analýzou návštěvnosti
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Můžete zakázat • Doba platnosti: 2 roky
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Detailní přehled cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 font-semibold">Název</th>
                        <th className="text-left p-2 font-semibold">Účel</th>
                        <th className="text-left p-2 font-semibold">Doba platnosti</th>
                        <th className="text-left p-2 font-semibold">Typ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-mono text-xs">session_id</td>
                        <td className="p-2">Identifikace uživatelské relace</td>
                        <td className="p-2">Do zavření prohlížeče</td>
                        <td className="p-2"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Nezbytné</span></td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono text-xs">preferences</td>
                        <td className="p-2">Uložení uživatelských preferencí</td>
                        <td className="p-2">30 dní</td>
                        <td className="p-2"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Nezbytné</span></td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono text-xs">_ga</td>
                        <td className="p-2">Google Analytics - rozlišení uživatelů</td>
                        <td className="p-2">2 roky</td>
                        <td className="p-2"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Analytické</span></td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono text-xs">_gid</td>
                        <td className="p-2">Google Analytics - rozlišení uživatelů</td>
                        <td className="p-2">24 hodin</td>
                        <td className="p-2"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Analytické</span></td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono text-xs">_gat</td>
                        <td className="p-2">Google Analytics - omezení rychlosti požadavků</td>
                        <td className="p-2">1 minuta</td>
                        <td className="p-2"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Analytické</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies třetích stran</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Google Analytics</h4>
                  <p className="text-muted-foreground mb-2">
                    Používáme Google Analytics pro analýzu návštěvnosti webu. 
                    Všechny údaje jsou anonymizované a neobsahují osobní informace.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Více informací na: 
                    <a href="https://policies.google.com/privacy" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                      Google Privacy Policy
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Správa cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Cookies můžete spravovat přímo ve vašem prohlížeči. Zde jsou odkazy 
                  na návody pro nejoblíbenější prohlížeče:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h5 className="font-semibold">Desktop prohlížeče:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <a href="https://support.google.com/chrome/answer/95647" 
                           className="text-primary hover:underline" 
                           target="_blank" 
                           rel="noopener noreferrer">
                          Google Chrome
                        </a>
                      </li>
                      <li>
                        <a href="https://support.mozilla.org/cs/kb/povoleni-zakazani-cookies" 
                           className="text-primary hover:underline" 
                           target="_blank" 
                           rel="noopener noreferrer">
                          Mozilla Firefox
                        </a>
                      </li>
                      <li>
                        <a href="https://support.microsoft.com/cs-cz/help/17442/windows-internet-explorer-delete-manage-cookies" 
                           className="text-primary hover:underline" 
                           target="_blank" 
                           rel="noopener noreferrer">
                          Internet Explorer
                        </a>
                      </li>
                      <li>
                        <a href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac" 
                           className="text-primary hover:underline" 
                           target="_blank" 
                           rel="noopener noreferrer">
                          Safari
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-semibold">Mobilní prohlížeče:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <a href="https://support.google.com/chrome/answer/95647" 
                           className="text-primary hover:underline" 
                           target="_blank" 
                           rel="noopener noreferrer">
                          Chrome Mobile
                        </a>
                      </li>
                      <li>
                        <a href="https://support.mozilla.org/cs/kb/povoleni-zakazani-cookies" 
                           className="text-primary hover:underline" 
                           target="_blank" 
                           rel="noopener noreferrer">
                          Firefox Mobile
                        </a>
                      </li>
                      <li>
                        <a href="https://support.apple.com/cs-cz/HT201265" 
                           className="text-primary hover:underline" 
                           target="_blank" 
                           rel="noopener noreferrer">
                          Safari iOS
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-amber-800">
                    <strong>Upozornění:</strong> Zakázání nezbytných cookies může omezit 
                    funkčnost webu. Některé funkce nemusí fungovat správně.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Změny v cookie policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Tyto zásady používání cookies můžeme čas od času aktualizovat, 
                  abychom reflektovali změny v našich postupech nebo z jiných provozních, 
                  právních či regulatorních důvodů.
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>Poslední aktualizace:</strong> 19. srpna 2024
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kontakt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Pokud máte jakékoli dotazy ohledně používání cookies, kontaktujte nás:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p><strong>Email:</strong> info@ekonomieprovas.net</p>
                  <p><strong>Telefon:</strong> +420 222 210 111</p>
                  <p><strong>Adresa:</strong> Jungmannova 26/15, 110 00 Praha 1</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cookies;