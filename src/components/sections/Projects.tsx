import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Sistema de Gestão Inteligente",
    description: "Uma obra-prima de arquitetura de software que transforma dados complexos em insights visuais elegantes.",
    tech: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    category: "Web Application",
    status: "Finalizado"
  },
  {
    title: "API Artística",
    description: "Uma API RESTful poeticamente estruturada que serve dados com a precisão de uma sinfonia.",
    tech: ["Python", "FastAPI", "MongoDB", "Docker"],
    category: "Backend",
    status: "Em desenvolvimento"
  },
  {
    title: "Dashboard Criativo",
    description: "Interface minimalista que conta histórias através de visualizações de dados interativas.",
    tech: ["Vue.js", "D3.js", "Tailwind", "Firebase"],
    category: "Frontend",
    status: "Finalizado"
  },
  {
    title: "Solução Mobile Inovadora",
    description: "App mobile que resolve problemas do dia a dia com uma experiência de usuário excepcional.",
    tech: ["React Native", "Expo", "Supabase", "TypeScript"],
    category: "Mobile",
    status: "Planejamento"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Obras de Arte Digital
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada projeto é uma expressão única de criatividade e técnica
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl hover:glow-primary transition-smooth border-primary/20 bg-card/80 backdrop-blur-sm overflow-hidden"
            >
              <CardHeader className="space-y-4">
                <div className="flex justify-between items-start">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <Badge 
                    variant={project.status === "Finalizado" ? "default" : project.status === "Em desenvolvimento" ? "secondary" : "outline"}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 gradient-primary hover:glow-primary transition-smooth"
                  >
                    Ver Projeto
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
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
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8"
          >
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};