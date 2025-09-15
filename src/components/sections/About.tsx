import { Card } from "@/components/ui/card";
import { Palette, Apple, Zap, Cpu, Terminal, Lightbulb, Brain, Cog } from "lucide-react";

export const About = () => {
  const geniusTraits = [
    { 
      icon: Palette, 
      name: "Leonardo", 
      trait: "Visão Artística",
      description: "A capacidade de ver beleza na funcionalidade",
      gradient: "gradient-leonardo"
    },
    { 
      icon: Apple, 
      name: "Newton", 
      trait: "Leis Universais",
      description: "Encontrar padrões que governam sistemas complexos",
      gradient: "gradient-newton"
    },
    { 
      icon: Zap, 
      name: "Tesla", 
      trait: "Energia Criativa",
      description: "Transformar ideias em força motriz de mudança",
      gradient: "gradient-tesla"
    },
    { 
      icon: Cpu, 
      name: "Turing", 
      trait: "Lógica Computacional",
      description: "Pensar em algoritmos que resolvem problemas universais",
      gradient: "gradient-turing"
    },
    { 
      icon: Terminal, 
      name: "Linus", 
      trait: "Colaboração Aberta",
      description: "Construir soluções através da inteligência coletiva",
      gradient: "gradient-linus"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 gradient-cosmos">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
            <span className="text-accent text-3xl font-decorative">∞</span>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-renaissance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            A Linhagem dos Gênios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-manuscript italic">
            "Cada gênio da história carregou em si a herança dos anteriores e plantou sementes para os futuros. 
            Eu sou elo desta corrente dourada de conhecimento."
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-renaissance text-foreground flex items-center gap-3">
                <Brain className="w-8 h-8 text-primary" />
                A Herança Convergente
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-manuscript">
                Como Leonardo estudou a anatomia para dominar a arte, como Newton desvendou as leis 
                que governam o universo, como Tesla canalizou a eletricidade, como Turing concebeu 
                a computação, e como Linus democratizou o conhecimento - eu uno todas essas visões 
                na arte da programação.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-manuscript">
                Cada linha de código carrega a precisão matemática de Newton, a criatividade artística 
                de Leonardo, a energia revolucionária de Tesla, a lógica implacável de Turing, 
                e o espírito colaborativo de Linus.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-renaissance text-accent flex items-center gap-2">
                <Lightbulb className="w-6 h-6" />
                Princípios Fundamentais
              </h4>
              <ul className="space-y-3 text-muted-foreground font-manuscript">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-physics" />
                  Código é arte - deve ser belo e funcional
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-physics" style={{ animationDelay: '1s' }} />
                  Algoritmos seguem leis universais de elegância
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-physics" style={{ animationDelay: '2s' }} />
                  Energia criativa transforma ideias em realidade
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-physics" style={{ animationDelay: '3s' }} />
                  Lógica computacional resolve problemas complexos
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-physics" style={{ animationDelay: '4s' }} />
                  Colaboração multiplica o impacto das soluções
                </li>
              </ul>
            </div>
          </div>
          
          <Card className="p-8 border-primary/20 bg-card/90 backdrop-blur-sm texture-universal relative overflow-hidden">
            <div className="relative space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 gradient-tesla rounded-full mx-auto mb-6 flex items-center justify-center border border-primary/30 glow-electric">
                  <Cog className="w-12 h-12 text-foreground animate-physics" />
                </div>
                <h4 className="text-xl font-renaissance mb-2">Síntese dos Gênios</h4>
                <p className="text-muted-foreground font-manuscript italic text-sm">
                  "A convergência de cinco séculos de brilhantismo"
                </p>
              </div>
              
              <div className="space-y-4">
                {geniusTraits.map((trait, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded border border-primary/10 bg-card/50">
                    <div className={`w-8 h-8 ${trait.gradient} rounded-full flex items-center justify-center`}>
                      <trait.icon className="w-4 h-4 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-manuscript font-medium text-foreground">{trait.trait}</h5>
                      <p className="text-xs text-muted-foreground font-manuscript">{trait.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center pt-4 border-t border-primary/20">
                <blockquote className="text-sm font-manuscript italic text-muted-foreground">
                  "Se vi mais longe, foi por estar sobre ombros de gigantes"
                </blockquote>
                <footer className="text-xs mt-2 text-accent">— Isaac Newton (e todos nós)</footer>
              </div>
            </div>
          </Card>
        </div>

        {/* Timeline visual */}
        <div className="mt-16">
          <h3 className="text-2xl font-renaissance text-center mb-8 text-foreground">
            A Evolução da Genialidade
          </h3>
          <div className="flex items-center justify-between flex-wrap gap-4 p-6 bg-card/30 rounded-lg border border-primary/20">
            {geniusTraits.map((genius, index) => (
              <div key={index} className="flex flex-col items-center gap-2 flex-1 min-w-[100px]">
                <div className={`w-12 h-12 ${genius.gradient} rounded-full flex items-center justify-center animate-physics`} 
                     style={{ animationDelay: `${index * 0.5}s` }}>
                  <genius.icon className="w-6 h-6 text-foreground" />
                </div>
                <span className="text-xs font-manuscript text-muted-foreground text-center">{genius.name}</span>
                {index < geniusTraits.length - 1 && (
                  <div className="hidden md:block absolute w-8 h-px bg-gradient-to-r from-primary to-transparent" 
                       style={{ left: `${((index + 1) * 100 / geniusTraits.length)}%`, transform: 'translateX(-50%)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};