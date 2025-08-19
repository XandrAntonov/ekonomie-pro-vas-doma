import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Clock, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Zde by byla logika pro odeslání formuláře
    toast({
      title: "Zpráva odeslána",
      description: "Děkujeme za vaši zprávu. Odpovíme vám do 24 hodin.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Adresa",
      details: ["Jungmannova 26/15", "110 00 Praha 1", "Česká republika"]
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: ["info@ekonomieprovas.net"]
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telefon",
      details: ["+420 222 210 111"]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Otevírací doba",
      details: ["Pondělí - Pátek: 9:00 - 17:00", "Víkend: zavřeno"]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Kontaktujte nás</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Máte otázku nebo potřebujete pomoc? Rádi vám odpovíme a poradíme 
            s finančním plánováním.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kontaktní formulář */}
          <div>
            <Card className="shadow-card-custom">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Napište nám
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Jméno a příjmení *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Vaše jméno"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="vas@email.cz"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Předmět</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="O čem chcete mluvit?"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Zpráva *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Napište nám váš dotaz nebo komentář..."
                      rows={6}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-financial hover:bg-gradient-trust">
                    <Send className="mr-2 h-4 w-4" />
                    Odeslat zprávu
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Kontaktní informace */}
          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Kde nás najdete</h2>
              <p className="text-muted-foreground">
                Jsme tu pro vás každý pracovní den. Neváhejte nás kontaktovat 
                s jakýmkoli dotazem ohledně finančního plánování nebo našich služeb.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-card-custom">
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full bg-accent">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Rychlé odkazy */}
            <Card className="bg-gradient-subtle border-none">
              <CardHeader>
                <CardTitle>Často kladené otázky</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground mb-4">
                  Možná najdete odpověď na vaši otázku v našich nejčastějších dotazech:
                </p>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Q:</strong> Kolik stojí Premium členství?</p>
                  <p className="text-sm text-muted-foreground mb-3"><strong>A:</strong> Premium členství stojí 299 Kč měsíčně nebo 2999 Kč ročně.</p>
                  
                  <p className="text-sm"><strong>Q:</strong> Mohu zrušit Premium kdykoli?</p>
                  <p className="text-sm text-muted-foreground mb-3"><strong>A:</strong> Ano, členství můžete zrušit kdykoli bez udání důvodu.</p>
                  
                  <p className="text-sm"><strong>Q:</strong> Poskytujete investiční poradenství?</p>
                  <p className="text-sm text-muted-foreground"><strong>A:</strong> Ne, zaměřujeme se pouze na praktické finanční návyky a plánování rozpočtu.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;