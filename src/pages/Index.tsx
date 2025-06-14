
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
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* Seção Principal */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gray-100 rounded-full">
              <Bot className="w-8 h-8 text-gray-700" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Newsletter Bot</h1>
              <p className="text-gray-600">Notícias de tecnologia no Discord</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Receba as melhores notícias de tecnologia diretamente no seu servidor Discord, 
            baseadas na newsletter do <strong>Filipe Deschamps</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
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
          
          <div className="text-sm text-gray-500">
            Baseado na newsletter de <strong>105.111 leitores</strong> do Filipe Deschamps
          </div>
        </div>
        
        {/* Seção de Comandos */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Comandos</h2>
          
          {commands.map((cmd, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <cmd.icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded text-gray-800">
                      {cmd.command}
                    </code>
                    <p className="text-xs text-gray-600 mt-1">{cmd.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <div className="text-xs text-gray-500 mt-4">
            💡 Use slash commands (/) no Discord
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Index;
