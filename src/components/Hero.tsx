
import { Bot, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const inviteLink = "https://discord.com/oauth2/authorize?client_id=1383234818388791296&permissions=8&integration_type=0&scope=bot";
  
  return (
    <section className="relative py-20 px-4 text-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
            <Bot className="w-16 h-16 text-white" />
          </div>
        </div>
        
        <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
          Bot para Discord
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Notícias de Tecnologia para quem
          <span className="block text-yellow-300">não tem tempo de ler notícias.</span>
        </h1>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Receba as melhores notícias de tecnologia diretamente no seu servidor do Discord, 
          baseadas na newsletter do <strong>Filipe Deschamps</strong>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold"
            onClick={() => window.open(inviteLink, '_blank')}
          >
            <Bot className="w-5 h-5 mr-2" />
            Adicionar ao Discord
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-3"
            onClick={() => window.open('https://github.com/matheusaudibert/newsletter-api', '_blank')}
          >
            Ver API no GitHub
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-blue-100 text-sm">
            Baseado na newsletter de <strong>105.111 leitores ativos</strong> do Filipe Deschamps
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
