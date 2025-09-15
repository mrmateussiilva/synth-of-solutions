import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Sistema Newtoniano",
    description: "Como Newton descobriu leis que governam planetas, criei um sistema que governa dados com precisão matemática absoluta. Cada função obedece princípios universais de elegância.",
    tech: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    category: "Arquitetura Universal",
    status: "Perfeito",
    genius: "Newton",
    geniusColor: "text-yellow-400",
    gradient: "gradient-newton",
    principle: "Leis universais aplicadas ao código"
  },
  {
    title: "Máquina de Tesla",
    description: "Inspirado nas bobinas de Tesla, uma API que conduz energia entre sistemas com a mesma genialidade que ele canalizou eletricidade pelo ar.",
    tech: ["Python", "FastAPI", "MongoDB", "Docker"],
    category: "Energia Digital",
    status: "Energizado",
    genius: "Tesla",
    geniusColor: "text-blue-400",
    gradient: "gradient-tesla",
    principle: "Transmissão sem fio de dados"
  },
  {
    title: "Canvas Leonardesco",
    description: "Dashboard que narra histórias visuais como Leonardo pintava luz e sombra. Cada pixel posicionado com a precisão anatômica do mestre.",
    tech: ["Vue.js", "D3.js", "Canvas API", "WebGL"],
    category: "Arte Digital",
    status: "Obra-Prima",
    genius: "Leonardo",
    geniusColor: "text-orange-400",
    gradient: "gradient-leonardo",
    principle: "Beleza funcional e proporção áurea"
  },
  {
    title: "Máquina de Turing Mobile",
    description: "App mobile que processa inputs como a máquina conceitual de Turing, resolvendo qualquer problema computável com elegância algorítmica.",
    tech: ["React Native", "Expo", "Supabase", "TypeScript"],
    category: "Computação Universal",
    status: "Computando",
    genius: "Turing",
    geniusColor: "text-green-400",
    gradient: "gradient-turing",
    principle: "Lógica computacional aplicada"
  },
  {
    title: "Kernel Colaborativo",
    description: "Sistema open-source construído com o espírito de Linus - onde cada contribuição fortalece o todo. Colaboração como força motriz da inovação.",
    tech: ["Linux", "C++", "Git", "Docker"],
    category: "Sistema Aberto",
    status: "Evoluindo",
    genius: "Linus",
    geniusColor: "text-cyan-400",
    gradient: "gradient-linus",
    principle: "Inteligência coletiva em código"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/20 texture-universal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
            <span className="text-accent text-3xl font-decorative">⚙️</span>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
          </div>
          <h2 className="text-title font-elegant text-genius mb-6">
            As Invenções dos Gênios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-manuscript italic">
            "Cada projeto carrega a essência de um gênio da história - combinados numa síntese única de arte, ciência e técnica"
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl hover:glow-electric transition-genius border-primary/20 bg-card/90 backdrop-blur-sm overflow-hidden relative"
            >
              {/* Genius indicator */}
              <div className="absolute top-0 left-0 w-full h-1 opacity-70" style={{
                background: `linear-gradient(90deg, var(--gradient-${project.genius.toLowerCase()}), transparent)`
              }} />
              
              {/* Decorative corner with genius symbol */}
              <div className="absolute top-3 right-3 flex items-center gap-2">
                <span className={`text-xs font-manuscript ${project.geniusColor}`}>
                  {project.genius}
                </span>
                <div className={`w-6 h-6 ${project.gradient} rounded-full animate-physics opacity-70`} />
              </div>
              
              <CardHeader className="space-y-4 pt-8">
                <div className="flex justify-between items-start">
                  <Badge variant="secondary" className="text-xs font-manuscript bg-secondary/50">
                    {project.category}
                  </Badge>
                  <Badge 
                    variant={project.status === "Perfeito" || project.status === "Obra-Prima" ? "default" : 
                            project.status === "Energizado" || project.status === "Computando" ? "secondary" : "outline"}
                    className="text-xs font-manuscript"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-genius font-renaissance">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed font-manuscript">
                  {project.description}
                </CardDescription>
                <p className="text-xs text-accent/70 italic font-manuscript border-l-2 border-accent/30 pl-3">
                  {project.principle}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-genius font-manuscript"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className={`flex-1 ${project.gradient} hover:glow-electric transition-genius font-renaissance`}
                  >
                    Explorar Invenção
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-genius font-renaissance"
                  >
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-genius px-8 font-renaissance"
          >
            Todas as Invenções dos Gênios
          </Button>
        </div>

        {/* Philosophy footer */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-6 border-primary/20 bg-card/30 backdrop-blur-sm">
            <blockquote className="font-manuscript italic text-muted-foreground text-lg">
              "Genius is one percent inspiration and ninety-nine percent perspiration"
            </blockquote>
            <footer className="text-sm mt-2 text-accent font-renaissance">
              — Edison (e a essência de todos os gênios)
            </footer>
          </Card>
        </div>
      </div>
    </section>
  );
};