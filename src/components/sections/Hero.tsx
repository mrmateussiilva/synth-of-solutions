import { Button } from "@/components/ui/button";
import vitruvianCode from "@/assets/vitruvian-code.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-parchment">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${vitruvianCode})` }}
      />
      <div className="absolute inset-0 gradient-manuscript opacity-80" />
      <div className="absolute inset-0 texture-paper opacity-30" />
      
      {/* Floating Renaissance elements */}
      <div className="absolute top-20 left-10 w-3 h-3 border border-primary rounded-full animate-sketch opacity-60">
        <div className="w-1 h-1 bg-primary rounded-full m-auto mt-0.5" />
      </div>
      <div className="absolute top-40 right-20 text-primary opacity-50 animate-float text-2xl" style={{ animationDelay: '2s' }}>
        ∞
      </div>
      <div className="absolute bottom-32 left-1/4 text-accent opacity-40 animate-sketch text-lg" style={{ animationDelay: '4s' }}>
        φ
      </div>
      <div className="absolute top-60 right-1/4 text-primary opacity-30 animate-float text-xl" style={{ animationDelay: '6s' }}>
        √
      </div>
      
      {/* Renaissance ornamental elements */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-accent opacity-20 text-6xl font-decorative animate-sketch">
        ❦
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-decorative bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              Artista de Código
            </h1>
            <div className="flex items-center justify-center gap-4 opacity-60">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-24"></div>
              <span className="text-accent text-2xl">❦</span>
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-24"></div>
            </div>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-manuscript italic">
              "Il Da Vinci della Programmazione"
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-manuscript">
              Como Leonardo combinou arte e ciência, eu uno <em>bellezza</em> e lógica. 
              Cada algoritmo é uma obra-prima, cada função uma invenção renascentista.
            </p>
            <p className="text-lg text-muted-foreground mt-4 font-manuscript italic">
              "Saper vedere" - Saber ver além do código, encontrar a arte na programação.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-gold hover:glow-gold transition-renaissance text-lg px-10 py-4 font-renaissance tracking-wide"
            >
              Le Opere Digitali
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-renaissance text-lg px-10 py-4 font-renaissance tracking-wide"
            >
              Epistola Mihi
            </Button>
          </div>
          
          {/* Renaissance quote */}
          <div className="mt-16">
            <blockquote className="font-manuscript italic text-lg text-muted-foreground max-w-2xl mx-auto">
              "Obstacles cannot crush me; every obstacle yields to stern resolve. 
              He who is fixed to a star does not change his mind."
              <footer className="text-sm mt-2 text-accent">— Leonardo da Vinci</footer>
            </blockquote>
          </div>
        </div>
      </div>
      
      {/* Renaissance scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border border-primary rounded-full flex justify-center opacity-70">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
          <span className="text-xs text-muted-foreground font-manuscript">Scorri</span>
        </div>
      </div>
    </section>
  );
};