import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Arti Visuali",
    icon: "🎨",
    subtitle: "Frontend Mastery",
    skills: [
      { name: "React", level: 95, description: "Come pennelli per tele digitali" },
      { name: "TypeScript", level: 90, description: "Precisione geometrica nel codice" },
      { name: "Vue.js", level: 85, description: "Armonia nelle interfacce" },
      { name: "Tailwind CSS", level: 90, description: "Stili come proporzioni auree" }
    ]
  },
  {
    title: "Meccanica Digitale",
    icon: "⚙️",
    subtitle: "Backend Architecture",
    skills: [
      { name: "Node.js", level: 90, description: "Ingranaggi server invisibili" },
      { name: "Python", level: 85, description: "Logica pura come matematica" },
      { name: "PostgreSQL", level: 80, description: "Archivi organizzati con metodo" },
      { name: "MongoDB", level: 75, description: "Dati fluidi come disegni" }
    ]
  },
  {
    title: "Strumenti dell'Ingegno",
    icon: "🔧",
    subtitle: "Creative Tools",
    skills: [
      { name: "Docker", level: 85, description: "Macchine perfette e riproducibili" },
      { name: "AWS", level: 80, description: "Nuvole digitali senza confini" },
      { name: "Git", level: 95, description: "Storia di ogni cambiamento" },
      { name: "Figma", level: 70, description: "Sketches che prendono vita" }
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 gradient-manuscript">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
            <span className="text-accent text-3xl font-decorative">🛠️</span>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-renaissance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Gli Strumenti del Maestro
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-manuscript italic">
            "Come Leonardo padroneggiava ogni strumento, io conosco ogni tecnologia che serve l'arte"
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 border-primary/20 bg-card/80 backdrop-blur-sm hover:shadow-xl hover:glow-gold transition-renaissance texture-paper relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                <div className="text-6xl font-decorative text-accent animate-sketch">
                  ❦
                </div>
              </div>
              
              <CardContent className="space-y-6 p-0 relative">
                <div className="text-center">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="text-xl font-renaissance text-foreground mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-accent font-manuscript italic">
                    {category.subtitle}
                  </p>
                </div>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-manuscript font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground font-manuscript">
                          {skill.level}%
                        </span>
                      </div>
                      <p className="text-xs text-accent/70 italic font-manuscript mb-1">
                        {skill.description}
                      </p>
                      <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full gradient-gold transition-all duration-1000 ease-out rounded-full"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 4 + skillIndex) * 0.2}s`
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
          <Card className="inline-block p-8 border-accent/30 bg-card/50 backdrop-blur-sm texture-paper">
            <div className="space-y-4">
              <div className="text-4xl font-decorative text-accent">∞</div>
              <h3 className="text-2xl font-renaissance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Apprendimento Perpetuo
              </h3>
              <p className="text-muted-foreground max-w-md font-manuscript leading-relaxed">
                Come il maestro Leonardo non smise mai di imparare, io continuo a scoprire 
                nuove tecnologie e tecniche per creare soluzioni sempre più raffinate.
              </p>
              <div className="text-xs text-accent font-manuscript italic">
                "Chi non aumenta la sua scienza, la diminuisce"
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};