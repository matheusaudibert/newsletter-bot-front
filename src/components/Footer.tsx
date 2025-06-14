
import { Bot, Github, ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const inviteLink = "https://discord.com/oauth2/authorize?client_id=1383234818388791296&permissions=8&integration_type=0&scope=bot";
  
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600 rounded-full">
              <Bot className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para começar?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Adicione o bot ao seu servidor Discord e mantenha sua comunidade sempre informada 
            com as melhores notícias de tecnologia.
          </p>
          
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg font-semibold mb-8"
            onClick={() => window.open(inviteLink, '_blank')}
          >
            <Bot className="w-5 h-5 mr-2" />
            Adicionar ao Discord
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>para a comunidade de tecnologia</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-gray-400 hover:text-white"
                onClick={() => window.open('https://filipedeschamps.com.br/newsletter', '_blank')}
              >
                Newsletter Filipe Deschamps
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                className="text-gray-400 hover:text-white"
                onClick={() => window.open('https://github.com/matheusaudibert/newsletter-api', '_blank')}
              >
                <Github className="w-4 h-4 mr-1" />
                API Source
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
