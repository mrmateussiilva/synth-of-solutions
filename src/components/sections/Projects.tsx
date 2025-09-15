import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Macchina Algoritmica",
    description: "Come le macchine volanti di Leonardo, questa solução transcende o ordinário. Um sistema que transforma dados em insights com a precisão de um estudo anatômico.",
    tech: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    category: "Ingegneria Web",
    status: "Perfezionato",
    sketch: "Una rappresentazione geometrica di dati in movimento perpetuo"
  },
  {
    title: "L'API Universale",
    description: "Inspirada nos códices de Leonardo, uma arquitetura RESTful que conecta sistemas com a harmonia das proporções áureas.",
    tech: ["Python", "FastAPI", "MongoDB", "Docker"],
    category: "Architettura Backend",
    status: "In Sviluppo",
    sketch: "Schemi di connessioni tra mondi digitali"
  },
  {
    title: "Visione Interattiva",
    description: "Dashboard che narra storie através de visualizações, como os estudos de movimento transformados em arte digital.",
    tech: ["Vue.js", "D3.js", "Tailwind", "Firebase"],
    category: "Arte Digitale",
    status: "Perfezionato",
    sketch: "Geometrie di informazioni che danzano sullo schermo"
  },
  {
    title: "Invenzione Mobile",
    description: "Aplicativo mobile che risolve problemi quotidiani con l'ingegno renascentista applicato alla tecnologia moderna.",
    tech: ["React Native", "Expo", "Supabase", "TypeScript"],
    category: "Ingegneria Mobile",
    status: "Concezione",
    sketch: "Sketches di interfacce che si adattano alla mano umana"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/20 texture-paper">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
            <span className="text-accent text-3xl font-decorative">⚙️</span>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-renaissance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Le Invenzioni Digitali
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-manuscript italic">
            "I miei progetti sono come le macchine di Leonardo - nati dalla curiosità e perfezionati dall'arte"
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl hover:glow-gold transition-renaissance border-primary/20 bg-card/90 backdrop-blur-sm overflow-hidden relative"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16">
                <div className="absolute top-2 right-2 text-accent/20 text-xs font-decorative animate-sketch">
                  ❦
                </div>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-1 gradient-gold opacity-50" />
              
              <CardHeader className="space-y-4">
                <div className="flex justify-between items-start">
                  <Badge variant="secondary" className="text-xs font-manuscript bg-secondary/50">
                    {project.category}
                  </Badge>
                  <Badge 
                    variant={project.status === "Perfezionato" ? "default" : project.status === "In Sviluppo" ? "secondary" : "outline"}
                    className="text-xs font-manuscript"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-renaissance font-renaissance">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed font-manuscript">
                  {project.description}
                </CardDescription>
                <p className="text-xs text-accent/70 italic font-manuscript border-l-2 border-accent/30 pl-3">
                  {project.sketch}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-renaissance font-manuscript"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 gradient-gold hover:glow-gold transition-renaissance font-renaissance"
                  >
                    Studia l'Opera
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-renaissance font-renaissance"
                  >
                    Codici
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
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-renaissance px-8 font-renaissance"
          >
            Tutte le Invenzioni
          </Button>
        </div>
      </div>
    </section>
  );
};