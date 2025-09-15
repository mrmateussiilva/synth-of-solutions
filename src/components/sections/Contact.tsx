import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Vamos Criar Juntos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos transformar sua visão em realidade digital
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Entre em Contato
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Estou sempre aberto para discutir novos projetos, ideias criativas 
                ou oportunidades de colaboração. Vamos conversar sobre como posso 
                ajudar a dar vida às suas ideias.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="p-4 border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="flex items-center gap-4 p-0">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">seu.email@exemplo.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-4 border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="flex items-center gap-4 p-0">
                  <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center">
                    <span className="text-xl">💼</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <p className="text-muted-foreground">linkedin.com/in/seuusuario</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-4 border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="flex items-center gap-4 p-0">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-xl">🐙</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">GitHub</h4>
                    <p className="text-muted-foreground">github.com/seuusuario</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Card className="p-8 border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardContent className="space-y-6 p-0">
              <h3 className="text-xl font-semibold text-foreground">
                Envie uma Mensagem
              </h3>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="Seu nome"
                      className="border-primary/30 focus:border-primary bg-background/50"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Seu email"
                      className="border-primary/30 focus:border-primary bg-background/50"
                    />
                  </div>
                </div>
                
                <Input 
                  placeholder="Assunto"
                  className="border-primary/30 focus:border-primary bg-background/50"
                />
                
                <Textarea 
                  placeholder="Conte-me sobre seu projeto..."
                  rows={6}
                  className="border-primary/30 focus:border-primary bg-background/50 resize-none"
                />
                
                <Button 
                  type="submit"
                  className="w-full gradient-primary hover:glow-primary transition-smooth text-lg py-6"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};