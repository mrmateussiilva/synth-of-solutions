import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend Artistry",
    icon: "🎨",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Tailwind CSS", level: 90 }
    ]
  },
  {
    title: "Backend Mastery",
    icon: "⚡",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 }
    ]
  },
  {
    title: "Creative Tools",
    icon: "🛠️",
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Git", level: 95 },
      { name: "Figma", level: 70 }
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Ferramentas do Artista
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada tecnologia é um pincel diferente na minha paleta criativa
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:glow-primary transition-smooth"
            >
              <CardContent className="space-y-6 p-0">
                <div className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full gradient-primary transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 0.2}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="inline-block p-8 border-accent/30 bg-card/30 backdrop-blur-sm">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sempre Aprendendo
              </h3>
              <p className="text-muted-foreground max-w-md">
                Um verdadeiro artista nunca para de evoluir. Constantemente explorando 
                novas tecnologias e técnicas para criar soluções ainda mais elegantes.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};