import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/20 texture-paper">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
            <span className="text-accent text-3xl font-decorative">✉️</span>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-renaissance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Collaborazione Artistica
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-manuscript italic">
            "Come nelle botteghe rinascimentali, ogni grande opera nasce dalla collaborazione"
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-renaissance mb-6 text-foreground">
                Epistola ad Artificem
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed font-manuscript mb-8">
                Hai un'idea che necessita dell'ingegno di un artista-ingegnere? 
                Scrivetemi come Leonardo corrispondeva con i suoi mecenati - 
                ogni progetto è un'opportunità per creare qualcosa di straordinario.
              </p>
              <blockquote className="text-accent font-manuscript italic text-sm border-l-2 border-accent/30 pl-4">
                "La passione dell'ingegno" - quando arte e tecnica si uniscono, nascono le vere innovazioni
              </blockquote>
            </div>
            
            <div className="space-y-6">
              <Card className="p-4 border-primary/20 bg-card/80 backdrop-blur-sm">
                <CardContent className="flex items-center gap-4 p-0">
                  <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center">
                    <span className="text-xl">📜</span>
                  </div>
                  <div>
                    <h4 className="font-renaissance text-foreground">Messaggio Direttо</h4>
                    <p className="text-muted-foreground font-manuscript text-sm">seu.email@esempio.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-4 border-primary/20 bg-card/80 backdrop-blur-sm">
                <CardContent className="flex items-center gap-4 p-0">
                  <div className="w-12 h-12 gradient-parchment rounded-full flex items-center justify-center border border-accent/30">
                    <span className="text-xl">🔗</span>
                  </div>
                  <div>
                    <h4 className="font-renaissance text-foreground">Rete Professionale</h4>
                    <p className="text-muted-foreground font-manuscript text-sm">linkedin.com/in/artista-codice</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-4 border-primary/20 bg-card/80 backdrop-blur-sm">
                <CardContent className="flex items-center gap-4 p-0">
                  <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center">
                    <span className="text-xl">📚</span>
                  </div>
                  <div>
                    <h4 className="font-renaissance text-foreground">Codici e Invenzioni</h4>
                    <p className="text-muted-foreground font-manuscript text-sm">github.com/artista-codice</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Card className="p-8 border-primary/20 bg-card/90 backdrop-blur-sm texture-paper relative overflow-hidden">
            {/* Decorative manuscript corner */}
            <div className="absolute top-4 right-4 text-accent/20 text-2xl font-decorative animate-sketch">
              ❦
            </div>
            
            <CardContent className="space-y-6 p-0">
              <h3 className="text-xl font-renaissance text-foreground">
                Invia la Tua Proposta
              </h3>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="Il tuo nome"
                      className="border-primary/30 focus:border-primary bg-background/70 font-manuscript"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="La tua email"
                      className="border-primary/30 focus:border-primary bg-background/70 font-manuscript"
                    />
                  </div>
                </div>
                
                <Input 
                  placeholder="Oggetto della collaborazione"
                  className="border-primary/30 focus:border-primary bg-background/70 font-manuscript"
                />
                
                <Textarea 
                  placeholder="Descrivi la tua visione come Leonardo descriveva le sue invenzioni..."
                  rows={6}
                  className="border-primary/30 focus:border-primary bg-background/70 resize-none font-manuscript"
                />
                
                <Button 
                  type="submit"
                  className="w-full gradient-gold hover:glow-gold transition-renaissance text-lg py-6 font-renaissance"
                >
                  Invia la Proposta
                </Button>
              </form>
              
              <div className="text-center pt-4 border-t border-primary/20">
                <p className="text-xs text-muted-foreground font-manuscript italic">
                  "Dimanda consiglio a chi ben si corregge" - Leonardo da Vinci
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Footer with Renaissance quote */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <blockquote className="text-lg font-manuscript italic text-muted-foreground leading-relaxed">
              "Il pittore che ritrae per pratica e giudizio d'occhio senza ragione è come lo specchio che imita tutte le cose a sé opposte senza cognizione di esse."
            </blockquote>
            <footer className="text-sm mt-4 text-accent font-renaissance">
              — Leonardo da Vinci, Trattato della Pittura
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};