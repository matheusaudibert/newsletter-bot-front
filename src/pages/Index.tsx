
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
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Newsletter Bot</h1>
            <p className="text-xl text-gray-600">Notícias de tecnologia no Discord</p>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Receba as melhores notícias de tecnologia diretamente no seu servidor Discord, 
            baseadas na newsletter do <strong>Filipe Deschamps</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gray-900 text-white hover:bg-gray-800"
              onClick={() => window.open(inviteLink, '_blank')}
            >
              <Bot className="w-5 h-5 mr-2" />
              Adicionar ao Discord
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
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
          <h2 className="text-2xl font-semibold text-gray-900 text-center">Comandos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commands.map((cmd, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm text-center">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <cmd.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <code className="text-sm font-mono bg-gray-100 px-3 py-2 rounded text-gray-800 block mb-2">
                        {cmd.command}
                      </code>
                      <p className="text-sm text-gray-600">{cmd.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center text-sm text-gray-500">
            💡 Use slash commands (/) no Discord
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Index;
