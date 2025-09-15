import { Button } from "@/components/ui/button";
import geniusLineage from "@/assets/genius-lineage.jpg";
import { Zap, Apple, Palette, Cpu, Terminal } from "lucide-react";

export const Hero = () => {
  const geniuses = [
    { icon: Palette, name: "Leonardo", color: "text-orange-400", delay: "0s" },
    { icon: Apple, name: "Newton", color: "text-yellow-400", delay: "1s" },
    { icon: Zap, name: "Tesla", color: "text-blue-400", delay: "2s" },
    { icon: Cpu, name: "Turing", color: "text-green-400", delay: "3s" },
    { icon: Terminal, name: "Linus", color: "text-cyan-400", delay: "4s" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-cosmos">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${geniusLineage})` }}
      />
      <div className="absolute inset-0 gradient-cosmos opacity-90" />
      <div className="absolute inset-0 texture-universal opacity-20" />
      
      {/* Floating genius symbols */}
      <div className="absolute top-20 left-10 animate-physics opacity-60" style={{ animationDelay: '0s' }}>
        <Palette className="w-6 h-6 text-orange-400" />
      </div>
      <div className="absolute top-40 right-20 animate-float opacity-50" style={{ animationDelay: '1s' }}>
        <Apple className="w-5 h-5 text-yellow-400" />
      </div>
      <div className="absolute bottom-32 left-1/4 animate-physics opacity-40" style={{ animationDelay: '2s' }}>
        <Zap className="w-7 h-7 text-blue-400" />
      </div>
      <div className="absolute top-60 right-1/4 animate-float opacity-30" style={{ animationDelay: '3s' }}>
        <Cpu className="w-6 h-6 text-green-400" />
      </div>
      <div className="absolute bottom-20 right-10 animate-physics opacity-50" style={{ animationDelay: '4s' }}>
        <Terminal className="w-5 h-5 text-cyan-400" />
      </div>
      
      {/* Ornamental elements */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-primary opacity-20 text-6xl font-decorative animate-physics">
        ∞
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="space-y-12">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-7xl font-decorative bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              Herdeiro dos Gênios
            </h1>
            
            {/* Genius lineage icons */}
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {geniuses.map((genius, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center gap-2 animate-physics"
                  style={{ animationDelay: genius.delay }}
                >
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center backdrop-blur-sm bg-card/20">
                    <genius.icon className={`w-6 h-6 ${genius.color}`} />
                  </div>
                  <span className="text-xs font-manuscript text-muted-foreground">{genius.name}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center gap-4 opacity-60">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
              <span className="text-accent text-2xl">⚡</span>
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
            </div>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground font-manuscript italic max-w-3xl mx-auto">
              "Carrego a herança de cinco séculos de gênios - a arte de Leonardo, 
              as leis de Newton, a eletricidade de Tesla, a lógica de Turing, 
              e a colaboração de Linus."
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-manuscript">
              Como eles revolucionaram seus tempos através da união entre <em>arte</em>, <em>ciência</em> e <em>técnica</em>, 
              eu transformo problemas complexos em código elegante. Cada algoritmo é uma lei física, 
              cada interface uma obra de arte, cada sistema uma invenção que conecta mundos.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-tesla hover:glow-electric transition-genius text-lg px-10 py-4 font-renaissance tracking-wide"
            >
              <Zap className="w-5 h-5 mr-2" />
              Minhas Invenções
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-genius text-lg px-10 py-4 font-renaissance tracking-wide"
            >
              <Terminal className="w-5 h-5 mr-2" />
              Colaborar
            </Button>
          </div>
          
          {/* Quotes from the geniuses */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <blockquote className="font-manuscript italic text-muted-foreground text-center p-4 border border-primary/20 rounded-lg bg-card/20 backdrop-blur-sm">
              "Saper vedere"
              <footer className="text-xs mt-2 text-orange-400">— Leonardo</footer>
            </blockquote>
            <blockquote className="font-manuscript italic text-muted-foreground text-center p-4 border border-primary/20 rounded-lg bg-card/20 backdrop-blur-sm">
              "If I have seen further..."
              <footer className="text-xs mt-2 text-yellow-400">— Newton</footer>
            </blockquote>
            <blockquote className="font-manuscript italic text-muted-foreground text-center p-4 border border-primary/20 rounded-lg bg-card/20 backdrop-blur-sm">
              "The present is theirs, the future is mine"
              <footer className="text-xs mt-2 text-blue-400">— Tesla</footer>
            </blockquote>
            <blockquote className="font-manuscript italic text-muted-foreground text-center p-4 border border-primary/20 rounded-lg bg-card/20 backdrop-blur-sm">
              "We can only see a short distance ahead"
              <footer className="text-xs mt-2 text-green-400">— Turing</footer>
            </blockquote>
            <blockquote className="font-manuscript italic text-muted-foreground text-center p-4 border border-primary/20 rounded-lg bg-card/20 backdrop-blur-sm md:col-span-2 lg:col-span-1">
              "Talk is cheap. Show me the code."
              <footer className="text-xs mt-2 text-cyan-400">— Linus</footer>
            </blockquote>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border border-primary rounded-full flex justify-center opacity-70">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
          <span className="text-xs text-muted-foreground font-manuscript">Explore</span>
        </div>
      </div>
    </section>
  );
};