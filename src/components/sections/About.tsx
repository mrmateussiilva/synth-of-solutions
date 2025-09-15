import { Card } from "@/components/ui/card";
import renaissanceSketches from "@/assets/renaissance-code-sketches.jpg";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 gradient-manuscript">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
            <span className="text-accent text-3xl font-decorative">❦</span>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-renaissance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Del Artista
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-manuscript italic">
            "Così come ogni regno diviso in se stesso è distrutto, così ogni ingegno diviso in diversi studi si confonde e indebolisce."
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-renaissance text-foreground">
                L'Arte della Risoluzione
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-manuscript">
                Come Leonardo studiò l'anatomia per perfezionare l'arte, io diseco algoritmi 
                per comprendere l'essenza della programmazione. Ogni problema è un corpo da studiare, 
                ogni solução una descoberta anatômica.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-manuscript">
                "L'ostinato rigore" - A persistência meticulosa que transforma código complexo 
                em soluções elegantes, como o mestre transformava estudos em obras-primas.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-renaissance text-accent">Principi Fondamentali</h4>
              <ul className="space-y-3 text-muted-foreground font-manuscript">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-sketch" />
                  Codice pulito è geometria perfetta
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-sketch" style={{ animationDelay: '1s' }} />
                  Ogni problema nasconde la sua soluzione aurea
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-sketch" style={{ animationDelay: '2s' }} />
                  "Saper vedere" - A arte de observar além do óbvio
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-sketch" style={{ animationDelay: '3s' }} />
                  L'ingegno nasce dall'unione di arte e scienza
                </li>
              </ul>
            </div>
          </div>
          
          <Card className="p-8 border-primary/20 bg-card/80 backdrop-blur-sm texture-paper relative overflow-hidden">
            {/* Background sketch */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: `url(${renaissanceSketches})` }}
            />
            
            <div className="relative space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 gradient-gold rounded-full mx-auto mb-6 flex items-center justify-center border border-primary/30">
                  <span className="text-3xl">🎨⚙️</span>
                </div>
                <h4 className="text-xl font-renaissance mb-2">Homo Universalis</h4>
                <p className="text-muted-foreground font-manuscript italic text-sm">
                  "Chi non può quel che vuol, quel che può voglia"
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-manuscript">Creatività</span>
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-full h-full gradient-gold animate-pulse" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-manuscript">Ingegno Tecnico</span>
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-full h-full gradient-parchment border border-accent/50" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-manuscript">Ostinato Rigore</span>
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-full h-full gradient-gold animate-sketch" />
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-4 border-t border-primary/20">
                <blockquote className="text-sm font-manuscript italic text-muted-foreground">
                  "Dove lo spirito non opera con la mano, 
                  non v'è arte."
                </blockquote>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};