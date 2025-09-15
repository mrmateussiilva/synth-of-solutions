import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Sobre o Artista
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Apaixonado por resolver problemas através da programação criativa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                A Paixão pela Resolução de Problemas
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Para mim, programar não é apenas escrever código - é uma forma de arte. 
                Cada desafio é uma tela em branco esperando para ser transformada em algo extraordinário.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Acredito que a verdadeira magia da programação está na capacidade de 
                transformar ideias complexas em soluções elegantes e intuitivas.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-accent">Minha Filosofia</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Código limpo é código que conta uma história
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Cada problema tem uma solução elegante esperando
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  A criatividade é o combustível da inovação
                </li>
              </ul>
            </div>
          </div>
          
          <Card className="p-8 border-primary/20 bg-card/50 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">🎨</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Artista de Código</h4>
                <p className="text-muted-foreground">
                  Transformando lógica em arte digital
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Criatividade</span>
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-full h-full gradient-primary animate-pulse" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Resolução de Problemas</span>
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-full h-full gradient-accent" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Paixão pelo Código</span>
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-full h-full gradient-primary animate-glow" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};