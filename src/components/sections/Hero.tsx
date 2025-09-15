import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-primary rounded-full animate-float opacity-70" />
      <div className="absolute top-40 right-20 w-4 h-4 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }} />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
              Artista de Código
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              O Da Vinci da Programação
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Transformo problemas complexos em soluções elegantes através da arte da programação. 
            Cada linha de código é uma pincelada na tela digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-primary hover:glow-primary transition-smooth text-lg px-8 py-4 rounded-full"
            >
              Ver Meus Projetos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth text-lg px-8 py-4 rounded-full"
            >
              Fale Comigo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};