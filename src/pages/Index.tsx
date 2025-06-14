
import { Bot, ExternalLink, Github, Hash, Users, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const inviteLink = "https://discord.com/oauth2/authorize?client_id=1383234818388791296&permissions=8&integration_type=0&scope=bot";
  
  const commands = [
    {
      icon: Hash,
      command: "/config canal",
      description: "Configura o canal para notícias"
    },
    {
      icon: Users,
      command: "/config cargo",
      description: "Define o cargo a ser mencionado"
    },
    {
      icon: Settings,
      command: "/config menu",
      description: "Exibe configurações do bot"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-12">
        
        {/* Seção Principal */}
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/96ad1187-af3f-4ac9-88d2-aed308d0ddc3.png" 
              alt="Newsletter Bot" 
              className="w-32 h-32 rounded-full"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: '#333333' }}>Newsletter Bot</h1>
            <p className="text-xl" style={{ color: '#333333' }}>Notícias de tecnologia no Discord</p>
          </div>
          
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#333333' }}>
            Receba as melhores notícias de tecnologia diretamente no seu servidor Discord, 
            baseadas na newsletter do <strong>Filipe Deschamps</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#0070F3' }}
              onClick={() => window.open(inviteLink, '_blank')}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 2.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-2.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Adicionar ao Discord
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-gray-50 transition-colors"
              style={{ borderColor: '#333333', color: '#333333' }}
              onClick={() => window.open('https://github.com/matheusaudibert/newsletter-api', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              Ver API
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        
        {/* Seção de Comandos */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center" style={{ color: '#333333' }}>Comandos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commands.map((cmd, index) => (
              <Card 
                key={index} 
                className="border border-gray-200 shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-3 bg-gray-50 rounded-lg transition-colors duration-200 group-hover:bg-gray-100">
                      <cmd.icon className="w-6 h-6" style={{ color: '#333333' }} />
                    </div>
                    <div>
                      <code className="text-sm font-mono bg-gray-100 px-3 py-2 rounded block mb-2" style={{ color: '#333333' }}>
                        {cmd.command}
                      </code>
                      <p className="text-sm" style={{ color: '#333333' }}>{cmd.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center text-sm" style={{ color: '#333333' }}>
            💡 Use slash commands (/) no Discord
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Index;
