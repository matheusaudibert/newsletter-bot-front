
import { Bell, Shield, Zap, Users, Globe, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Bell,
      title: "Notificações Automáticas",
      description: "Receba as últimas notícias de tecnologia automaticamente no seu servidor Discord."
    },
    {
      icon: Users,
      title: "Menções Personalizadas",
      description: "Configure qual cargo será mencionado quando uma nova notícia for publicada."
    },
    {
      icon: Shield,
      title: "Configuração Simples",
      description: "Configure facilmente o canal e as preferências do seu servidor com comandos intuitivos."
    },
    {
      icon: Globe,
      title: "API Pública",
      description: "Utiliza a API pública da newsletter do Filipe Deschamps para garantir conteúdo de qualidade."
    },
    {
      icon: Zap,
      title: "Rápido e Confiável",
      description: "Bot otimizado para performance, garantindo entregas rápidas e estáveis."
    },
    {
      icon: Clock,
      title: "Sempre Atualizado",
      description: "Mantenha-se informado com as notícias mais recentes do mundo da tecnologia."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher nosso bot?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Uma solução completa para manter sua comunidade Discord sempre informada sobre tecnologia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
