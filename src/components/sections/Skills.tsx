import { Card, CardContent } from "@/components/ui/card";
import { Palette, Apple, Zap, Cpu, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Arte de Leonardo",
    icon: Palette,
    subtitle: "Frontend Mastery",
    color: "text-orange-400",
    gradient: "gradient-leonardo",
    skills: [
      { name: "React", level: 95, description: "Como pennelli per tele digitali" },
      { name: "TypeScript", level: 90, description: "Precisione geometrica nel codice" },
      { name: "Vue.js", level: 85, description: "Armonia nelle interfacce" },
      { name: "CSS/Tailwind", level: 90, description: "Stili come proporzioni auree" }
    ]
  },
  {
    title: "Leis de Newton",
    icon: Apple,
    subtitle: "Mathematical Precision",
    color: "text-yellow-400",
    gradient: "gradient-newton",
    skills: [
      { name: "Algorithms", level: 90, description: "Leis universais em código" },
      { name: "Data Structures", level: 85, description: "Organização perfeita" },
      { name: "Mathematics", level: 80, description: "Base de toda computação" },
      { name: "Problem Solving", level: 95, description: "Método científico aplicado" }
    ]
  },
  {
    title: "Energia de Tesla",
    icon: Zap,
    subtitle: "System Architecture",
    color: "text-blue-400",
    gradient: "gradient-tesla",
    skills: [
      { name: "Node.js", level: 90, description: "Condutores de energia digital" },
      { name: "Python", level: 85, description: "Força pura da computação" },
      { name: "Cloud Computing", level: 80, description: "Eletricidade distribuída" },
      { name: "Microservices", level: 85, description: "Circuitos especializados" }
    ]
  },
  {
    title: "Lógica de Turing",
    icon: Cpu,
    subtitle: "Computational Thinking",
    color: "text-green-400",
    gradient: "gradient-turing",
    skills: [
      { name: "Machine Learning", level: 75, description: "Máquinas que aprendem" },
      { name: "Algorithms", level: 90, description: "Lógica computacional pura" },
      { name: "Database Design", level: 80, description: "Estruturas de memória" },
      { name: "API Design", level: 85, description: "Interfaces universais" }
    ]
  },
  {
    title: "Espírito de Linus",
    icon: Terminal,
    subtitle: "Open Collaboration",
    color: "text-cyan-400",
    gradient: "gradient-linus",
    skills: [
      { name: "Git/Version Control", level: 95, description: "História colaborativa" },
      { name: "Linux/DevOps", level: 80, description: "Sistemas abertos" },
      { name: "Open Source", level: 90, description: "Conhecimento compartilhado" },
      { name: "Code Review", level: 85, description: "Melhoria coletiva" }
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 gradient-cosmos">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
            <span className="text-accent text-3xl font-decorative">🧠</span>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
          </div>
          <h2 className="text-title font-elegant text-genius mb-6">
            Arsenal dos Gênios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-manuscript italic">
            "Como cada mestre dominava as ferramentas de sua época, eu domino as tecnologias que moldam o futuro"
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 border-primary/20 bg-card/90 backdrop-blur-sm hover:shadow-xl hover:glow-electric transition-genius texture-universal relative overflow-hidden"
            >
              {/* Decorative genius indicator */}
              <div className={`absolute top-0 left-0 w-full h-1 ${category.gradient} opacity-70`} />
              
              <CardContent className="space-y-6 p-0 relative">
                <div className="text-center">
                  <div className={`w-16 h-16 ${category.gradient} rounded-full mx-auto mb-4 flex items-center justify-center animate-physics`}>
                    <category.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-lg font-renaissance text-foreground mb-1">
                    {category.title}
                  </h3>
                  <p className={`text-sm ${category.color} font-manuscript italic`}>
                    {category.subtitle}
                  </p>
                </div>
                
                <div className="space-y-4">
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
                          className={`h-full ${category.gradient} transition-all duration-1000 ease-out rounded-full`}
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
          <Card className="inline-block p-8 border-accent/30 bg-card/60 backdrop-blur-sm texture-universal">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                <Palette className="w-6 h-6 text-orange-400" />
                <Apple className="w-6 h-6 text-yellow-400" />
                <Zap className="w-6 h-6 text-blue-400" />
                <Cpu className="w-6 h-6 text-green-400" />
                <Terminal className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-renaissance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Evolução Perpétua
              </h3>
              <p className="text-muted-foreground max-w-md font-manuscript leading-relaxed">
                Como os grandes mestres nunca cessaram de aprender, eu continuously exploro 
                novas tecnologias e técnicas, sempre expandindo meu arsenal de genialidade.
              </p>
              <div className="text-xs text-accent font-manuscript italic">
                "I have not failed. I've just found 10,000 ways that won't work." — Edison
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};