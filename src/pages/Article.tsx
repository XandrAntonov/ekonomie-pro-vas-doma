import { useParams, Link } from 'react-router-dom';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Share2, BookOpen, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import shoppingListImage from "@/assets/shopping-list-guide.jpg";
import budgetPlanningImage from "@/assets/family-budget-planning.jpg";
import travelPlanningImage from "@/assets/travel-planning-budget.jpg";
import financialHabitsImage from "@/assets/financial-habits.jpg";
import expenseControlImage from "@/assets/expense-control-home.jpg";
import dailyStabilityImage from "@/assets/daily-financial-stability.jpg";

const Article = () => {
  const { id } = useParams();
  const { toast } = useToast();

  const articles = {
    "seznam-nakupu-ekonomie": {
      title: "Jak správně vést seznam nákupů a reálně ekonomit",
      description: "Praktický průvodce efektivním plánováním nákupů, který vám ušetří čas i peníze",
      image: shoppingListImage,
      date: "15. leden 2024",
      readTime: "8 min čtení",
      category: "Nákupy",
      content: `
        <p>Správné vedení seznamu nákupů je jednou z nejjednodušších metod, jak ušetřit peníze a čas. Podle výzkumů mohou české rodiny ušetřit až 30% na potravinách jen tím, že budou nakupovat podle připraveného seznamu.</p>

        <h2>Proč seznam nákupů funguje?</h2>
        <p>Seznam nákupů vám pomáhá:</p>
        <ul>
          <li><strong>Vyhnout se impulzivním nákupům</strong> - podle statistik tvoří impulzivní nákupy až 40% celkových výdajů v obchodě</li>
          <li><strong>Neplýtvat potravinami</strong> - nakupujete jen to, co skutečně potřebujete</li>
          <li><strong>Ušetřit čas</strong> - víte přesně, co hledat a kde to najít</li>
          <li><strong>Dodržet rozpočet</strong> - můžete si spočítat přibližnou částku předem</li>
        </ul>

        <h2>Jak vytvořit efektivní seznam nákupů</h2>
        
        <h3>1. Naplánujte si menu na týden</h3>
        <p>Než vytvoříte seznam, věnujte 15 minut plánování jídel na celý týden. Zohledněte:</p>
        <ul>
          <li>Kolik obědů budete jíst doma vs. v práci</li>
          <li>Plánované návštěvy či oslavy</li>
          <li>Zbytky z předchozího týdne</li>
          <li>Sezónní nabídky v obchodech</li>
        </ul>

        <h3>2. Zkontrolujte, co už doma máte</h3>
        <p>Před psaním seznamu proveďte "inventuru" lednice, spíže a mrazáku. Ušetříte tím nákup duplicitních položek.</p>

        <h3>3. Organizujte seznam podle layoutu obchodu</h3>
        <p>Rozdělte seznam podle sekcí obchodu:</p>
        <ul>
          <li>Ovoce a zelenina</li>
          <li>Pečivo</li>
          <li>Mléčné výrobky</li>
          <li>Maso a uzeniny</li>
          <li>Trvanlivé potraviny</li>
          <li>Drogerie</li>
        </ul>

        <h2>Praktické tipy pro úsporu</h2>

        <h3>💡 Tip 1: Nakupujte nasyceni</h3>
        <p>Nikdy nechoďte nakupovat hladoví. Všechno vám bude vypadat lákavě a utratíte více než plánujete.</p>

        <h3>💡 Tip 2: Používejte aplikace</h3>
        <p>Využívejte aplikace obchodních řetězců pro slevy a akce. Můžete ušetřit 10-20% na každém nákupu.</p>

        <h3>💡 Tip 3: Sledujte ceny za kilo/litr</h3>
        <p>Neřiďte se pouze celkovou cenou, ale porovnávejte ceny za kilogram či litr. Větší balení není vždy výhodnější.</p>

        <h3>💡 Tip 4: Stanovte si limit</h3>
        <p>Vezměte si do obchodu jen hotovost v hodnotě vašeho rozpočtu. Když peníze dojdou, nákup končí.</p>

        <h2>Chyby, kterým se vyhnout</h2>
        <ul>
          <li><strong>Příliš obecný seznam</strong> - místo "něco k obědu" napište konkrétně "kuřecí prsa, rýže, brokolice"</li>
          <li><strong>Ignorování akcí</strong> - sledujte letáky a přizpůsobte menu aktuálním slevám</li>
          <li><strong>Nákup "do zásoby"</strong> - u rychle kazících se potravin kupujte jen na týden</li>
          <li><strong>Zapomínání seznamu doma</strong> - použijte aplikaci v telefonu</li>
        </ul>

        <h2>Šablona týdenního nákupního seznamu</h2>
        <p>Stáhněte si naši bezplatnou šablonu, která vám pomůže organizovat nákupy a ušetřit až 30% měsíčně na potravinách.</p>

        <div class="bg-accent p-6 rounded-lg my-6">
          <h3 class="text-lg font-semibold mb-3">🎯 Výzva na tento týden</h3>
          <p>Zkuste tento týden nakupovat pouze podle předem připraveného seznamu. Porovnejte své výdaje s předchozím týdnem a podělte se o výsledky v komentářích!</p>
        </div>

        <p>Pamatujte: dobrý nákupní seznam je investice do vaší finanční budoucnosti. Několik minut přípravy vám ušetří stovky korun měsíčně.</p>
      `
    },
    "rodinny-rozpocet-mesic": {
      title: "Plánování rozpočtu rodiny na měsíc bez stresu",
      description: "Krok za krokem k efektivnímu rodinnému rozpočtu pro začátečníky",
      image: budgetPlanningImage,
      date: "12. leden 2024",
      readTime: "10 min čtení",
      category: "Rozpočet",
      content: `
        <p>Plánování rodinného rozpočtu nemusí být stresující. S trochou systému a správnými nástroji si můžete vytvořit rozpočet, který bude fungovat pro celou rodinu a pomoże vám dosáhnout finančních cílů.</p>

        <h2>Proč je rozpočet důležitý?</h2>
        <p>Rodinný rozpočet vám pomůže:</p>
        <ul>
          <li><strong>Mít kontrolu nad penězi</strong> - víte, kam vaše peníze jdou</li>
          <li><strong>Ušetřit na cílech</strong> - dovolená, nové auto, rezerva</li>
          <li><strong>Vyhnout se dluhům</strong> - žijete v rámci svých možností</li>
          <li><strong>Snížit finanční stres</strong> - žádné překvapení na konci měsíce</li>
        </ul>

        <h2>Krok 1: Spočítejte příjmy</h2>
        <p>Začněte tím, že si spočítáte všechny pravidelné měsíční příjmy:</p>
        <ul>
          <li>Čistá mzda (po odečtení daní a pojištění)</li>
          <li>Přídavky na děti</li>
          <li>Příjmy z podnikání</li>
          <li>Příjmy z pronájmu</li>
          <li>Ostatní pravidelné příjmy</li>
        </ul>
        
        <div class="bg-yellow-50 p-4 rounded-lg my-4">
          <p><strong>⚠️ Tip:</strong> Pokud máte nepravidelné příjmy, použijte průměr z posledních 6 měsíců nebo raději počítejte s nižší částkou.</p>
        </div>

        <h2>Krok 2: Evidujte všechny výdaje</h2>
        <p>Jeden měsíc si zapisujte úplně všechny výdaje. Rozdělte je do kategorií:</p>

        <h3>Fixní výdaje (nemění se měsíc od měsíce):</h3>
        <ul>
          <li>Nájem nebo hypotéka</li>
          <li>Energie (elektřina, plyn, voda)</li>
          <li>Pojištění</li>
          <li>Úvěry a splátky</li>
          <li>Internet a telefon</li>
          <li>Předplatné a členství</li>
        </ul>

        <h3>Proměnné výdaje:</h3>
        <ul>
          <li>Potraviny a drogerie</li>
          <li>Doprava a pohonné hmoty</li>
          <li>Oblečení</li>
          <li>Zábava a kultura</li>
          <li>Zdraví a lékárna</li>
          <li>Dárky a drobnosti</li>
        </ul>

        <h2>Krok 3: Aplikujte pravidlo 50/30/20</h2>
        <p>Toto je osvědčená metoda rozdělení příjmů:</p>
        <ul>
          <li><strong>50% na potřeby</strong> - nájem, jídlo, doprava, základní potřeby</li>
          <li><strong>30% na přání</strong> - zábava, restaurace, hobby, nákupy</li>
          <li><strong>20% na spoření</strong> - rezerva, důchod, investice</li>
        </ul>

        <h2>Krok 4: Vytvořte konkrétní rozpočet</h2>
        <p>Na základě vašich příjmů a pravidla 50/30/20 si stanovte konkrétní částky pro každou kategorii:</p>

        <div class="bg-accent p-6 rounded-lg my-6">
          <h3 class="text-lg font-semibold mb-3">📊 Příklad pro rodinu s příjmy 45 000 Kč</h3>
          <ul class="space-y-2">
            <li><strong>Potřeby (22 500 Kč):</strong> nájem 15 000, jídlo 5 000, doprava 2 500</li>
            <li><strong>Přání (13 500 Kč):</strong> restaurace 3 000, zábava 4 000, oblečení 3 000, ostatní 3 500</li>
            <li><strong>Spoření (9 000 Kč):</strong> rezerva 5 000, důchodové spoření 4 000</li>
          </ul>
        </div>

        <h2>Nástroje pro sledování rozpočtu</h2>

        <h3>📱 Mobilní aplikace (doporučené):</h3>
        <ul>
          <li><strong>Money Manager</strong> - jednoduché, česky</li>
          <li><strong>Spending Tracker</strong> - pokročilé funkce</li>
          <li><strong>YNAB (You Need A Budget)</strong> - pro pokročilé</li>
        </ul>

        <h3>📊 Excel/Google Sheets:</h3>
        <p>Vytvořte si vlastní tabulku nebo použijte naši připravenou šablonu.</p>

        <h3>📝 Papírová forma:</h3>
        <p>Starý dobrý zápisník funguje také skvěle, zejména pro začátečníky.</p>

        <h2>Jak dodržet rozpočet?</h2>

        <h3>1. Kontrolujte průběžně</h3>
        <p>Každý týden si zkontrolujte, jak na tom jste. Neřešte to až na konci měsíce.</p>

        <h3>2. Používejte obálkovou metodu</h3>
        <p>Na proměnné výdaje si připravte hotovost do obálek. Když peníze dojdou, kategorie končí.</p>

        <h3>3. Plánujte větší výdaje</h3>
        <p>Dárky k narozeninám, dovolená, auto servis - na toto šetřete postupně každý měsíc.</p>

        <h3>4. Buďte realistní</h3>
        <p>Nesahejte si na úplné dno. Nechte si prostor pro drobné radosti.</p>

        <h2>Co když to nejde?</h2>
        <p>Pokud vám rozpočet nefunguje:</p>
        <ul>
          <li><strong>Revidujte kategorie</strong> - možná jste si stanovili nereálné částky</li>
          <li><strong>Hledejte úspory</strong> - zkontrolujte předplatné, srovnejte ceny energií</li>
          <li><strong>Zvyšte příjmy</strong> - brigáda, prodej nepotřebných věcí</li>
          <li><strong>Buďte trpěliví</strong> - na návyk potřebujete 2-3 měsíce</li>
        </ul>

        <div class="bg-green-50 p-6 rounded-lg my-6">
          <h3 class="text-lg font-semibold mb-3">🎯 Akční plán na tento měsíc</h3>
          <ol class="space-y-2">
            <li>1. Spočítejte si přesné měsíční příjmy</li>
            <li>2. Jeden týden si zapisujte všechny výdaje</li>
            <li>3. Vytvořte rozpočet podle pravidla 50/30/20</li>
            <li>4. Vyberte si nástroj pro sledování</li>
            <li>5. Na konci měsíce vyhodnoťte a upravte</li>
          </ol>
        </div>

        <p>Pamatujte: dokonalý rozpočet neexistuje. Cílem je najít systém, který funguje pro vaši rodinu a kterého se budete držet dlouhodobě.</p>
      `
    },
    "organizace-cest-ekonomie": {
      title: "Rady pro organizaci cest: jak ušetřit a neztratit důležité",
      description: "Kompletní příručka cestování s rozpočtem od plánování po realizaci",
      image: travelPlanningImage,
      date: "8. leden 2024",
      readTime: "12 min čtení",
      category: "Cestování",
      content: `
        <p>Cestování nemusí zruinovat váš rozpočet. S promyšleným plánováním a několika triky můžete ušetřit až 50% na dovolené a zároveň si ji užít naplno.</p>

        <h2>Fáze 1: Plánování a rozpočet</h2>

        <h3>Stanovte si realistický rozpočet</h3>
        <p>Před začátkem plánování si odpovězte:</p>
        <ul>
          <li>Kolik si můžete dovolit utratit celkem?</li>
          <li>Kolik lidí pojede?</li>
          <li>Jak dlouho budete pryč?</li>
          <li>Jaký typ dovolené chcete (relax vs. poznávací)?</li>
        </ul>

        <div class="bg-blue-50 p-4 rounded-lg my-4">
          <p><strong>💡 Pravidlo:</strong> Na dovolenou nikdy nevybírejte úvěr. Radši jeďte někam blíž nebo kratší čas, ale v rámci svých možností.</p>
        </div>

        <h3>Rozdělte rozpočet do kategorií</h3>
        <ul>
          <li><strong>Doprava (25-35%):</strong> letenky, vlak, auto + palivo</li>
          <li><strong>Ubytování (30-40%):</strong> hotel, apartmán, penze</li>
          <li><strong>Stravování (20-25%):</strong> restaurace, nákupy, občerstvení</li>
          <li><strong>Aktivity (10-15%):</strong> vstupné, exkurze, zábava</li>
          <li><strong>Rezerva (10%):</strong> nepředvídané výdaje</li>
        </ul>

        <h2>Fáze 2: Úspora na dopravě</h2>

        <h3>✈️ Letenky</h3>
        <ul>
          <li><strong>Rezervujte 6-8 týdnů předem</strong> pro nejlepší ceny</li>
          <li><strong>Buďte flexibilní s daty</strong> - úterý a středa jsou obvykle levnější</li>
          <li><strong>Používejte porovnávače:</strong> Skyscanner, Kayak, Google Flights</li>
          <li><strong>Zvažte rozpočtové aerolinie:</strong> Ryanair, Wizz Air, easyJet</li>
          <li><strong>Sledujte chyby v cenách</strong> - specializované weby jako Secret Flying</li>
        </ul>

        <h3>🚗 Cestování autem</h3>
        <ul>
          <li><strong>Kalkulujte vše:</strong> palivo + dálniční známky + parkování</li>
          <li><strong>Tankujte strategicky:</strong> sledujte ceny přes aplikace</li>
          <li><strong>Sdílejte náklady:</strong> pokud jedete s přáteli</li>
        </ul>

        <h3>🚂 Vlaky a busy</h3>
        <ul>
          <li><strong>Včasné rezervace:</strong> často levnější než letenky</li>
          <li><strong>Skupinové slevy:</strong> pro 3+ osoby</li>
          <li><strong>Noční spoje:</strong> ušetříte za ubytování</li>
        </ul>

        <h2>Fáze 3: Chytré ubytování</h2>

        <h3>🏨 Typy ubytování a jejich výhody</h3>
        <ul>
          <li><strong>Hotely:</strong> pohodlí, snídaně, služby (dražší)</li>
          <li><strong>Apartmány:</strong> kuchyň = úspora za jídlo</li>
          <li><strong>Penze:</strong> rodinná atmosféra, často včetně stravy</li>
          <li><strong>Hostely:</strong> pro mladé a nenáročné</li>
          <li><strong>Airbnb:</strong> jedinečné zážitky, často levnější</li>
        </ul>

        <h3>💰 Tipy pro úsporu</h3>
        <ul>
          <li><strong>Rezervujte přímo:</strong> často levnější než přes portály</li>
          <li><strong>Sledujte last minute nabídky:</strong> 1-2 týdny před odjezdem</li>
          <li><strong>Vyměňte recenze za slevy:</strong> mnoho hotelů to nabízí</li>
          <li><strong>Zvolte okrajové lokality:</strong> s dobrou dopravní dostupností</li>
        </ul>

        <h2>Fáze 4: Stravování na cestách</h2>

        <h3>🍽️ Strategie úspory</h3>
        <ul>
          <li><strong>Kombinujte:</strong> snídaně v ubytování + oběd levně + večeře v restauraci</li>
          <li><strong>Hledejte lokální místa:</strong> mimo turistické centrum</li>
          <li><strong>Využívejte happy hours:</strong> často 50% sleva</li>
          <li><strong>Nakupujte v supermarketech:</strong> zejména nápoje a svačiny</li>
        </ul>

        <h3>📱 Užitečné aplikace</h3>
        <ul>
          <li><strong>HappyCow:</strong> levné a zdravé restaurace</li>
          <li><strong>TripAdvisor:</strong> hodnocení a ceny</li>
          <li><strong>Foursquare:</strong> doporučení místních</li>
        </ul>

        <h2>Fáze 5: Aktivity a zábava</h2>

        <h3>🎯 Jak ušetřit na zážitcích</h3>
        <ul>
          <li><strong>Hledejte free walking tours:</strong> většina měst je nabízí</li>
          <li><strong>Městské karty:</strong> často se vyplatí pro 2+ atrakcí</li>
          <li><strong>Studentské slevy:</strong> i po studiích někdy fungují</li>
          <li><strong>Bezplatné atrakce:</strong> parky, pláže, výhledy, trhy</li>
          <li><strong>Lokální festivaly:</strong> často zdarma a autentické</li>
        </ul>

        <h2>Co nezapomenout před odjezdem</h2>

        <h3>📋 Kontrolní seznam</h3>
        <ul>
          <li>✅ Cestovní pojištění (povinné!)</li>
          <li>✅ Platnost dokladů (pas, občanka)</li>
          <li>✅ Víza (pokud potřebné)</li>
          <li>✅ Očkování (pro exotické země)</li>
          <li>✅ Kopie dokumentů (fyzické + v cloudu)</li>
          <li>✅ Informace o klimatu a počasí</li>
          <li>✅ Směnárny a platební karty</li>
        </ul>

        <h3>💳 Peníze na cestách</h3>
        <ul>
          <li><strong>Informujte banku</strong> o cestování</li>
          <li><strong>Mějte více karet</strong> od různých bank</li>
          <li><strong>Hotovost:</strong> vždy něco málo na začátek</li>
          <li><strong>Sledujte kurzy:</strong> aplikace jako XE Currency</li>
        </ul>

        <h2>Během dovolené: jak nepřetáhnout</h2>

        <h3>💰 Praška kontrola rozpočtu</h3>
        <ul>
          <li><strong>Aplikace:</strong> Trail Wallet, Trabee Pocket</li>
          <li><strong>Papírový zápisník:</strong> zapisujte každý výdaj</li>
          <li><strong>Foto účtenek:</strong> pro pozdější vyhodnocení</li>
          <li><strong>Denní limit:</strong> rozdělte rozpočet na dny</li>
        </ul>

        <div class="bg-accent p-6 rounded-lg my-6">
          <h3 class="text-lg font-semibold mb-3">🎯 Praktická úloha</h3>
          <p>Vyberte si destinaci a vytvořte si kompletní rozpočet podle našeho návodu. Porovnejte ceny různých variant (hotel vs. apartmán, auto vs. letadlo) a zjistěte, kde můžete nejvíce ušetřit.</p>
        </div>

        <h2>Po návratu: vyhodnocení</h2>
        <ul>
          <li><strong>Spočítejte skutečné výdaje</strong> vs. plán</li>
          <li><strong>Najděte největší "děravky"</strong> v rozpočtu</li>
          <li><strong>Poznamenejte si tipy</strong> pro příště</li>
          <li><strong>Začněte šetřit</strong> na další dovolenou</li>
        </ul>

        <p>Pamatujte: nejlepší dovolená není ta nejdražší, ale ta nejlépe naplánovaná. S našimi tipy ušetříte peníze a budete mít více na další cestování!</p>
      `
    },
    "navyky-financni-disciplina": {
      title: "Návyky, které pomáhají disciplinovat finance v bytě",
      description: "Jednoduché návyky pro vybudování silné finanční disciplíny",
      image: financialHabitsImage,
      date: "5. leden 2024",
      readTime: "7 min čtení",
      category: "Návyky",
      content: `
        <p>Finanční disciplína se nebuduje přes noc. Je to výsledek malých, každodenních návyků, které postupně změní váš vztah k penězům. Zde jsou osvědčené návyky, které můžete začít praktikovat už dnes.</p>

        <h2>Ranní návyky pro finanční úspěch</h2>

        <h3>🌅 1. Kontrola účtu každé ráno</h3>
        <p>Ještě před kávou si zkontrolujte stav účtu. Trvá to 30 sekund a:</p>
        <ul>
          <li>Víte přesně, kolik máte k dispozici</li>
          <li>Včas odhalíte podezřelé transakce</li>
          <li>Začnete den s vědomím svých financí</li>
        </ul>

        <h3>💭 2. Denní finanční cíl</h3>
        <p>Každé ráno si stanovte jeden malý finanční cíl na den:</p>
        <ul>
          <li>"Dnes neutratím víc než 200 Kč"</li>
          <li>"Dnes si odložím 50 Kč do kasičky"</li>
          <li>"Dnes si spočítám výdaje za týden"</li>
        </ul>

        <h2>Návyky během dně</h2>

        <h3>📱 3. "5-minutové pravidlo"</h3>
        <p>Před každým nákupem nad 500 Kč si počkejte 5 minut a položte si otázky:</p>
        <ul>
          <li>Skutečně to potřebuji?</li>
          <li>Nemám doma něco podobného?</li>
          <li>Můžu počkat do výplaty?</li>
          <li>Je to v mém rozpočtu?</li>
        </ul>

        <div class="bg-yellow-50 p-4 rounded-lg my-4">
          <p><strong>💡 Tip:</strong> U nákupů nad 2000 Kč používejte "24hodinové pravidlo" - počkejte den a často zjistíte, že to nepotřebujete.</p>
        </div>

        <h3>✍️ 4. Zapisování všech výdajů</h3>
        <p>Každý výdaj si zapište okamžitě. Můžete použít:</p>
        <ul>
          <li><strong>Mobilní aplikaci:</strong> Money Manager, Spendee</li>
          <li><strong>Poznámky v telefonu:</strong> jednoduché a rychlé</li>
          <li><strong>Malý zápisník:</strong> pro ty, kdo preferují papír</li>
        </ul>

        <h3>🛒 5. "Jednoznámkové nákupy"</h3>
        <p>Při každém nákupu si položte otázku: "Ohodnotil bych tento nákup známkou 1?" Pokud ne, nekupujte.</p>

        <h2>Večerní návyky</h2>

        <h3>📊 6. Večerní finanční bilance</h3>
        <p>Každý večer věnujte 2 minuty kontrole:</p>
        <ul>
          <li>Kolik jsem dnes utratil?</li>
          <li>Za co jsem utratil nejvíc?</li>
          <li>Byl některý výdaj zbytečný?</li>
          <li>Dodržel jsem dnešní cíl?</li>
        </ul>

        <h3>💰 7. Automatické spoření</h3>
        <p>Každý večer si odložte do kasičky všechny mince z peněženky. Za měsíc budete překvapeni, kolik se nasbírá.</p>

        <h2>Týdenní návyky</h2>

        <h3>📅 8. Nedělní plánování</h3>
        <p>Každou neděli si naplánujte týden:</p>
        <ul>
          <li>Kolik můžu utratit tento týden?</li>
          <li>Jaké mám plánované větší výdaje?</li>
          <li>Kdy půjdu nakupovat a za kolik?</li>
          <li>Kde můžu tento týden ušetřit?</li>
        </ul>

        <h3>🧹 9. "Finanční úklid"</h3>
        <p>Jednou týdně:</p>
        <ul>
          <li>Srovnejte si účtenky a záznamy</li>
          <li>Zkontrolujte nevyužitá předplatná</li>
          <li>Projděte si věrnostní karty a slevy</li>
          <li>Vyhodnoťte týdenní výdaje</li>
        </ul>

        <h2>Měsíční návyky</h2>

        <h3>📈 10. Měsíční finanční inventura</h3>
        <p>První víkend v měsíci si udělejte kompletní přehled:</p>
        <ul>
          <li>Příjmy vs. výdaje za minulý měsíc</li>
          <li>Největší "děravky" v rozpočtu</li>
          <li>Co fungovalo dobře?</li>
          <li>Co změnit příští měsíc?</li>
        </ul>

        <h2>Návyky pro domácnost</h2>

        <h3>🏠 11. "Inventura lednice"</h3>
        <p>Před každým nákupem si projděte:</p>
        <ul>
          <li>Co už doma máte</li>
          <li>Co se pokazí, pokud to nevyužijete</li>
          <li>Co můžete použít na dnes večer</li>
        </ul>

        <h3>⚡ 12. Energie-aware návyky</h3>
        <ul>
          <li>Vypínejte světla při opuštění místnosti</li>
          <li>Odpojujte elektrospotřebiče ze sítě</li>
          <li>Prádlo sušte na vzduchu místo v sušićce</li>
          <li>Snižte teplotu vytápění o 1°C</li>
        </ul>

        <h2>Psychologické návyky</h2>

        <h3>🎯 13. Vizualizace cílů</h3>
        <p>Každý den si připomeňte, proč šetříte:</p>
        <ul>
          <li>Fotka vysněné dovolené na telefonu</li>
          <li>Suma pro nové auto napsaná na ledničce</li>
          <li>Graf spoření na viditelném místě</li>
        </ul>

        <h3>🏆 14. Oslavování úspěchů</h3>
        <p>Za každý týden bez zbytečných výdajů si dovolte malou odměnu (do 100 Kč).</p>

        <div class="bg-green-50 p-6 rounded-lg my-6">
          <h3 class="text-lg font-semibold mb-3">🎯 Výzva: 30 dní nových návyků</h3>
          <p><strong>Týden 1-7:</strong> Vyberte si 3 návyky z tohoto seznamu<br>
          <strong>Týden 8-14:</strong> Přidejte další 2 návyky<br>
          <strong>Týden 15-21:</strong> Přidejte poslední 2 návyky<br>
          <strong>Týden 22-30:</strong> Udržujte všech 7 návyků</p>
        </div>

        <h2>Jak na návyky, které se nedaří?</h2>

        <h3>🔄 Začněte znovu, ale menší</h3>
        <p>Místo "budu si zapisovat všechny výdaje" zkuste "zapíšu si jeden výdaj denně".</p>

        <h3>⏰ Připojte k existujícímu návyku</h3>
        <p>"Po ráno kávě si zkontroluju účet" je snazší než "někdy dopoledne si zkontroluju účet".</p>

        <h3>👥 Najděte si accountability partnera</h3>
        <p>Partnera, přítele nebo kolegu, kterému budete reportovat své pokroky.</p>

        <p>Pamatujte: úspěšní lidé nejsou úspěšní kvůli velkým činům, ale kvůli malým každodenním návykům. Začněte dnes s jedním návykem a postupně přidávejte další!</p>
      `
    },
    "kontrola-vydaju-domov": {
      title: "Jednoduché metody kontroly výdajů v domácích podmínkách",
      description: "Praktické techniky sledování výdajů bez složitých aplikací",
      image: expenseControlImage,
      date: "2. leden 2024",
      readTime: "9 min čtení",
      category: "Kontrola výdajů",
      content: `
        <p>Kontrola výdajů je základ finanční disciplíny. Nemusíte být účetní ani používat složitý software. Stačí vám několik jednoduchých metod, které si můžete nastavit během jednoho víkendu.</p>

        <h2>Proč kontrolovat výdaje?</h2>
        <ul>
          <li><strong>Zjistíte, kam peníze "zmizí"</strong> - většina lidí neví, za co utrácí 30-40% příjmů</li>
          <li><strong>Najdete skryté úspory</strong> - zbytečná předplatná, drahé návyky</li>
          <li><strong>Dosáhnete finančních cílů</strong> - spoření, splácení dluhů</li>
          <li><strong>Snížíte finanční stres</strong> - víte, kde stojíte</li>
        </ul>

        <h2>Metoda 1: Obálková metoda (nejjednodušší)</h2>

        <h3>Jak funguje:</h3>
        <p>Rozdělíte hotovost do obálek podle kategorií výdajů. Když peníze dojdou, kategorie končí.</p>

        <h3>Co potřebujete:</h3>
        <ul>
          <li>6-8 obálek nebo krabičků</li>
          <li>Popisky nebo štítky</li>
          <li>Kalkulačku</li>
        </ul>

        <h3>Postup:</h3>
        <ol>
          <li><strong>Vytipujte si kategorie:</strong> potraviny, doprava, zábava, oblečení, domácnost, rezerva</li>
          <li><strong>Rozdělte měsíční rozpočet</strong> mezi kategorie</li>
          <li><strong>Na začátku měsíce</strong> vložte do každé obálky příslušnou částku</li>
          <li><strong>Platí se pouze z obálek</strong> - žádné karty pro tyto kategorie</li>
          <li><strong>Prázdná obálka = konec utrácení</strong> v té kategorii</li>
        </ol>

        <div class="bg-blue-50 p-4 rounded-lg my-4">
          <p><strong>💡 Tip:</strong> Začněte jen se 3 kategoriemi: potraviny, zábava, ostatní. Postupně přidávejte další.</p>
        </div>

        <h3>Výhody:</h3>
        <ul>
          <li>Vizuální kontrola - vidíte, kolik zbývá</li>
          <li>Nemůžete přetáhnout</li>
          <li>Funguje i pro děti</li>
          <li>Žádná technologie</li>
        </ul>

        <h2>Metoda 2: Zápisník výdajů</h2>

        <h3>Co potřebujete:</h3>
        <ul>
          <li>Malý zápisník (vejde se do kapsy/kabelky)</li>
          <li>Tužku nebo pero</li>
          <li>5 minut večer</li>
        </ul>

        <h3>Jak zapisovat:</h3>
        <div class="bg-accent p-4 rounded-lg my-4">
          <p><strong>Formát zápisu:</strong><br>
          Datum | Částka | Kategorie | Poznámka<br><br>
          <strong>Příklad:</strong><br>
          15.1. | 150 Kč | Potraviny | Rohlíky, mléko<br>
          15.1. | 35 Kč | Doprava | MHD<br>
          15.1. | 80 Kč | Oběd | Restaurace</p>
        </div>

        <h3>Pravidla úspěchu:</h3>
        <ul>
          <li><strong>Zapisujte okamžitě</strong> - nebo alespoň do hodiny</li>
          <li><strong>Každý výdaj počítá</strong> - i káva za 30 Kč</li>
          <li><strong>Buďte konkrétní</strong> - místo "jídlo" napište "oběd v Café Louvre"</li>
          <li><strong>Večer si zápisy projděte</strong> a spočítejte denní celkem</li>
        </ul>

        <h2>Metoda 3: Fotografování účtenek</h2>

        <h3>Postup:</h3>
        <ol>
          <li><strong>Vyfotografujte každou účtenku</strong> ihned po nákupu</li>
          <li><strong>Vytvořte si složku</strong> "Výdaje 2024" v telefonu</li>
          <li><strong>Jednou týdně</strong> si účtenky projděte a sečtěte</li>
          <li><strong>Seřaďte podle kategorií</strong> - potraviny, oblečení, atd.</li>
        </ol>

        <h3>Výhody:</h3>
        <ul>
          <li>Máte doklad o každém výdaji</li>
          <li>Rychlé - jen vyfotit</li>
          <li>Nemůžete nic zapomenout</li>
          <li>Můžete kontrolovat ceny později</li>
        </ul>

        <h2>Metoda 4: Týdenní kontrola účtu</h2>

        <h3>Každou neděli večer:</h3>
        <ol>
          <li><strong>Stáhněte si výpis z účtu</strong> za poslední týden</li>
          <li><strong>Roztřiďte výdaje do kategorií:</strong>
            <ul>
              <li>Fixní náklady (nájem, energie, pojištění)</li>
              <li>Potraviny a drogerie</li>
              <li>Doprava</li>
              <li>Zábava a restaurace</li>
              <li>Oblečení a doplňky</li>
              <li>Zdraví a lékárna</li>
              <li>Ostatní</li>
            </ul>
          </li>
          <li><strong>Spočítejte částky v každé kategorii</strong></li>
          <li><strong>Porovnejte s plánem</strong> - kde jste přetáhli?</li>
          <li><strong>Naplánujte příští týden</strong> - kde můžete ušetřit?</li>
        </ol>

        <h2>Metoda 5: Domácí "účetnictví"</h2>

        <h3>Materiály:</h3>
        <ul>
          <li>Velký nástěnný kalendář</li>
          <li>Barevné propisky (každá kategorie = jedna barva)</li>
          <li>Kalkulačka</li>
        </ul>

        <h3>Systém:</h3>
        <ul>
          <li><strong>Červená:</strong> fixní výdaje (nájem, pojištění)</li>
          <li><strong>Zelená:</strong> potraviny</li>
          <li><strong>Modrá:</strong> zábava</li>
          <li><strong>Černá:</strong> doprava</li>
          <li><strong>Fialová:</strong> ostatní</li>
        </ul>

        <p>Každý večer si do kalendáře zapíšete barevně všechny výdaje. Na konci týdne vidíte, kde "převládá" která barva.</p>

        <h2>Metoda 6: Aplikace v telefonu (pro pokročilé)</h2>

        <h3>Doporučené české aplikace:</h3>
        <ul>
          <li><strong>Money Manager:</strong> jednoduché, češtině, zdarma</li>
          <li><strong>Spendee:</strong> hezký design, propojení s bankami</li>
          <li><strong>HomeBudget:</strong> pro rodiny</li>
        </ul>

        <h3>Zahraniční aplikace:</h3>
        <ul>
          <li><strong>Mint:</strong> automatické kategorizování</li>
          <li><strong>YNAB:</strong> pro pokročilé budgetování</li>
          <li><strong>PocketGuard:</strong> upozornění na překročení limitu</li>
        </ul>

        <h2>Kombinace metod</h2>

        <div class="bg-accent p-6 rounded-lg my-6">
          <h3 class="text-lg font-semibold mb-3">🎯 Doporučená kombinace pro začátečníky</h3>
          <ul class="space-y-2">
            <li><strong>Týden 1-2:</strong> Pouze fotografování účtenek</li>
            <li><strong>Týden 3-4:</strong> Přidat obálkovou metodu pro 2 kategorie</li>
            <li><strong>Týden 5-8:</strong> Přidat zápisník pro výdaje bez účtenek</li>
            <li><strong>Od 9. týdne:</strong> Týdenní vyhodnocování</li>
          </ul>
        </div>

        <h2>Časté chyby a jak se jim vyhnout</h2>

        <h3>❌ Chyba: Snaha o dokonalost</h3>
        <p>✅ Řešení: Začněte s 80% přesností. Lepší něco než nic.</p>

        <h3>❌ Chyba: Příliš mnoho kategorií</h3>
        <p>✅ Řešení: Začněte s 3-5 kategoriemi, postupně přidávejte.</p>

        <h3>❌ Chyba: Zapomínání na malé výdaje</h3>
        <p>✅ Řešení: I káva za 30 Kč se počítá. Malé částky dělají velké rozdíly.</p>

        <h3>❌ Chyba: Nevyhodnocování</h3>
        <p>✅ Řešení: Jednou týdně si 10 minut sednout a podívat se na čísla.</p>

        <h2>Jak dlouho trvá, než se to stane návykem?</h2>
        <ul>
          <li><strong>1. týden:</strong> Musíte si neustále připomínat</li>
          <li><strong>2-3. týden:</strong> Začíná se to automatizovat</li>
          <li><strong>4-6. týden:</strong> Je to už přirozené</li>
          <li><strong>Po 8. týdnech:</strong> Pevný návyk, těžko se zapomíná</li>
        </ul>

        <p>Pamatujte: cílem není mít dokonalé účetnictví, ale vědět, kam vaše peníze jdou, a mít nad nimi kontrolu. Vyberte si metodu, která vám vyhovuje a kterou budete skutečně používat!</p>
      `
    },
    "denni-navyky-stabilita": {
      title: "Jak ежедневné návyky ovlivňují finanční stabilitu",
      description: "Analýza každodenních rozhodnutí a jejich dlouhodobého dopadu",
      image: dailyStabilityImage,
      date: "28. prosinec 2023",
      readTime: "11 min čtení",
      category: "Stabilita",
      content: `
        <p>Finanční stabilita není výsledkem jednoho velkého rozhodnutí, ale tisíců malých každodenních voleb. Každá káva, každé impulzivní koupě, každá ušetřená koruna - to vše má dlouhodobý vliv na vaši finanční budoucnost.</p>

        <h2>Síla compound efektu v penězích</h2>

        <p>Stejně jako úrok se úročí, i malé každodenní rozhodnutí se "násobí" v čase. Podívejme se na konkrétní příklady:</p>

        <h3>☕ Příklad: Ranní káva</h3>
        <div class="bg-yellow-50 p-4 rounded-lg my-4">
          <p><strong>Scénář A:</strong> Káva doma (10 Kč) vs. <strong>Scénář B:</strong> Káva v kavárně (80 Kč)</p>
          <ul>
            <li><strong>Denní rozdíl:</strong> 70 Kč</li>
            <li><strong>Měsíční rozdíl:</strong> 2100 Kč (70 × 30)</li>
            <li><strong>Roční rozdíl:</strong> 25 200 Kč</li>
            <li><strong>Za 10 let:</strong> 252 000 Kč + úrok z investice</li>
          </ul>
        </div>

        <h3>🚗 Příklad: Doprava do práće</h3>
        <div class="bg-blue-50 p-4 rounded-lg my-4">
          <p><strong>Auto (palivo + parkování):</strong> 150 Kč/den vs. <strong>MHD:</strong> 50 Kč/den</p>
          <ul>
            <li><strong>Roční úspora MHD:</strong> 25 000 Kč</li>
            <li><strong>Plus absence:</strong> pojištění, servis, depreciation auta</li>
            <li><strong>Celková úspora:</strong> až 100 000 Kč ročně</li>
          </ul>
        </div>

        <h2>Psychologie každodenních finančních rozhodnutí</h2>

        <h3>🧠 Mentální účetnictví</h3>
        <p>Lidé mají tendenci rozdělovat peníze do "mentálních kategorií":</p>
        <ul>
          <li><strong>"Peníze na jídlo"</strong> - zde šetří více</li>
          <li><strong>"Peníze na zábavu"</strong> - zde utrácí benevolentně</li>
          <li><strong>"Nalezené peníze"</strong> - bonus, dědictví - utrácí bezstarostně</li>
        </ul>

        <p><strong>Řešení:</strong> Všechny peníze jsou stejné. 100 Kč ušetřených na obědě = 100 Kč navíc na dovolenou.</p>

        <h3>💭 Cognitive biases v nakupování</h3>

        <h4>1. Anchoring bias</h4>
        <p>První cena, kterou uvidíte, ovlivní všechna další rozhodnutí.</p>
        <p><strong>Ochrana:</strong> Před nákupem si nastudujte trvalé ceny, ne jen akční.</p>

        <h4>2. Loss aversion</h4>
        <p>"Ztratit 1000 Kč bolí více než najít 1000 Kč těší"</p>
        <p><strong>Využití:</strong> Představte si ušetřené peníze jako "nalezené".</p>

        <h4>3. Present bias</h4>
        <p>Okamžité uspokojení vítězí nad dlouhodobými cíli.</p>
        <p><strong>Ochrana:</strong> Visualizace budoucích cílů, automatické spoření.</p>

        <h2>Ranní návyky pro finanční stabilitu</h2>

        <h3>⏰ 1. Kontrola účtu (2 minuty)</h3>
        <p>Ještě před kávou:</p>
        <ul>
          <li>Zkontrolujte stav účtu</li>
          <li>Podívejte se na včerejší výdaje</li>
          <li>Stanovte si dnešní limit</li>
        </ul>

        <h3>🎯 2. Denní finanční intencie</h3>
        <p>Řekněte si: "Dnes si dám pozor na..." (impulzivní nákupy, drahé obědy, zbytečné věci)</p>

        <h3>📱 3. Kontrola slev a akcí (3 minuty)</h3>
        <p>Rychle projděte aplikace obchodů, kde dnes nakupujete.</p>

        <h2>Návyky během dne</h2>

        <h3>🍽️ 4. Obědy z domu</h3>
        <div class="bg-green-50 p-4 rounded-lg my-4">
          <p><strong>Domácí oběd:</strong> 40-60 Kč vs. <strong>Restaurace:</strong> 150-250 Kč</p>
          <p><strong>Roční úspora:</strong> 25 000 - 50 000 Kč</p>
          <p><strong>Bonus:</strong> Zdravější strava, kontrola složek</p>
        </div>

        <h3>🛒 5. "Lista pravidlo"</h3>
        <p>Každý nákup pouze podle seznamu. Žádné odchylky.</p>

        <h3>💳 6. "Jeden den, jedna karta"</h3>
        <p>Používejte pouze jednu platební kartu denně. Snáze sledujete výdaje.</p>

        <h3>⏱️ 7. "10 minut pravidlo"</h3>
        <p>Před nákupem nad 1000 Kč si počkejte 10 minut. Často se rozhodnete nekupovat.</p>

        <h2>Večerní návyky</h2>

        <h3>📊 8. Denní účetnictví (5 minut)</h3>
        <p>Před spaním si odpovězte:</p>
        <ul>
          <li>Kolik jsem dnes utratil?</li>
          <li>Za co jsem utratil nejvíc?</li>
          <li>Lituju nějakého výdaje?</li>
          <li>Jak si vedl můj dnešní limit?</li>
        </ul>

        <h3>💰 9. "Kasička rituál"</h3>
        <p>Všechny drobné mince z kapes dejte do kasičky. Za rok se nasbírá 2000-5000 Kč.</p>

        <h3>📝 10. Plánování zítřka</h3>
        <p>Na 2 minuty naplánujte zítřejší výdaje:</p>
        <ul>
          <li>Doprava</li>
          <li>Jídlo</li>
          <li>Plánované nákupy</li>
          <li>Maximální limit</li>
        </ul>

        <h2>Víkendové návyky</h2>

        <h3>📅 11. Nedělní plánování</h3>
        <p>Každou neděli (20 minut):</p>
        <ul>
          <li>Zhodnoťte minulý týden</li>
          <li>Naplánujte menu na příští týden</li>
          <li>Připravte nákupní seznam</li>
          <li>Zkontrolujte účty a rezervy</li>
        </ul>

        <h3>🧹 12. "Finanční úklid"</h3>
        <p>Jednou týdně:</p>
        <ul>
          <li>Projděte všechna předplatná</li>
          <li>Zkontrolujte nevyužité služby</li>
          <li>Uspořádejte si peněženku</li>
          <li>Aktualizujte rozpočet</li>
        </ul>

        <h2>Dlouhodobý dopad návyků</h2>

        <h3>🏦 Automatické spoření</h3>
        <div class="bg-accent p-6 rounded-lg my-6">
          <h4 class="text-lg font-semibold mb-3">Příklad: 500 Kč měsíčně</h4>
          <ul class="space-y-2">
            <li><strong>Po 1 roce:</strong> 6 000 Kč</li>
            <li><strong>Po 5 letech:</strong> 30 000 Kč + úrok</li>
            <li><strong>Po 10 letech:</strong> 60 000 Kč + compound úrok</li>
            <li><strong>Po 20 letech:</strong> 120 000 Kč + významný compound efekt</li>
          </ul>
        </div>

        <h3>📈 Investice do sebe</h3>
        <p>Část ušetřených peněz investujte do:</p>
        <ul>
          <li><strong>Vzdělání:</strong> Kurzy, knihy, certifikace</li>
          <li><strong>Zdraví:</strong> Kvalitní jídlo, sport, prevence</li>
          <li><strong>Dovedností:</strong> Jazyky, počítačové kurzy</li>
          <li><strong>Sítě kontaktů:</strong> Networking akce, konference</li>
        </ul>

        <h2>Měření progress</h2>

        <h3>📊 Týdenní metriky</h3>
        <ul>
          <li><strong>Savings rate:</strong> Kolik % příjmů jste ušetřili</li>
          <li><strong>Impulse purchases:</strong> Počet neplánovaných nákupů</li>
          <li><strong>Budget variance:</strong> O kolik jste překročili/nedosáhli plánu</li>
          <li><strong>Cash vs. card ratio:</strong> Poměr hotovostních vs. kartových plateb</li>
        </ul>

        <h3>📈 Měsíční přehled</h3>
        <ul>
          <li>Kategorie s největším růstem výdajů</li>
          <li>Nejvýhodnější rozhodnutí měsíce</li>
          <li>Nejdražší "minutka slabosti"</li>
          <li>Pokrok směrem k dlouhodobým cílům</li>
        </ul>

        <h2>Když se návyky nedaří</h2>

        <h3>🔄 Start small</h3>
        <p>Místo "budu šetřit 5000 Kč měsíčně" začněte s "ušetřím 50 Kč denně".</p>

        <h3>⚡ Trigger stacking</h3>
        <p>Napojte nový návyk na existující: "Po ranní kávě si zkontroluju účet".</p>

        <h3>🏆 Reward system</h3>
        <p>Za každý týden dodržení návyku si dopřejte malou odměnu (do 100 Kč).</p>

        <h3>👥 Accountability</h3>
        <p>Sdílejte své cíle s rodinou nebo přáteli. Sociální tlak pomáhá.</p>

        <div class="bg-green-50 p-6 rounded-lg my-6">
          <h3 class="text-lg font-semibold mb-3">🎯 Challenge: 7 dní perfektních návyků</h3>
          <p>Příští týden se snažte dodržet každý den všech 12 návyků z tohoto článku. Na konci týdne si spočítejte, kolik jste ušetřili oproti "běžnému" týdnu.</p>
        </div>

        <h2>Závěr</h2>
        <p>Finanční stabilita není o velkých sumách nebo dokonalých plánech. Je o malých, konzistentních rozhodnutích, která děláte každý den. Vaše ranní káva, způsob dopravy do práce, večerní kontrola účtu - to vše formuje vaši finanční budoucnost.</p>

        <p>Začněte s jedním návykem. Když se zabydlí, přidejte další. Za rok budete překvapeni, jak moc se váš finanční život změní.</p>
      `
    }
  };

  const article = articles[id as keyof typeof articles];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Odkaz zkopírován",
        description: "Odkaz na článek byl zkopírován do schránky",
      });
    }
  };

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Článek nenalezen</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Omlouváme se, ale požadovaný článek neexistuje nebo byl přesunut.
          </p>
          <Button asChild>
            <Link to="/clanky">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zpět na články
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" className="mb-6" asChild>
            <Link to="/clanky">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zpět na články
            </Link>
          </Button>

          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              {article.category}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {article.description}
            </p>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Sdílet
              </Button>
            </div>
          </div>
        </div>

        {/* Article Image */}
        <div className="mb-8">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-64 lg:h-96 object-cover rounded-xl shadow-card-custom"
          />
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div 
                className="prose prose-lg max-w-none text-foreground
                  prose-headings:text-foreground prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:mb-4 prose-p:leading-relaxed
                  prose-ul:mb-4 prose-li:mb-1
                  prose-strong:text-foreground prose-strong:font-semibold"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Premium CTA */}
                <Card className="bg-gradient-financial text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Premium obsah
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4 opacity-90">
                      Získejte přístup k exkluzivním šablonám, detailním návodům a osobní podpoře.
                    </p>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      asChild
                    >
                      <Link to="/premium">
                        Vyzkoušet Premium
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Tips */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Rychlé tipy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">Začněte s malými změnami</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">Buďte konzistentní každý den</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">Měřte svůj pokrok</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">Buďte trpěliví s výsledky</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter CTA */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Newsletter</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Každý týden praktické tipy do emailu
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to="/newsletter">
                        Přihlásit se
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles CTA */}
        <section className="mt-16 pt-8 border-t">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Další užitečné články</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Pokračujte ve čtení dalších praktických rad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" asChild>
                <Link to="/clanky">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Všechny články
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/tipy">
                  Praktické tipy
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default Article;