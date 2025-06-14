
import { Terminal, Settings, Hash, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Commands = () => {
  const commands = [
    {
      icon: Hash,
      command: "/config canal",
      description: "Configura o canal onde as notícias serão enviadas",
      usage: "Use este comando no canal desejado para defini-lo como canal de notícias"
    },
    {
      icon: Users,
      command: "/config cargo",
      description: "Define qual cargo será mencionado nas notificações",
      usage: "Mencione o cargo que deve ser notificado quando houver novas notícias"
    },
    {
      icon: Settings,
      command: "/config menu",
      description: "Exibe o menu de configurações do bot",
      usage: "Visualize todas as configurações atuais do seu servidor"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gray-800 rounded-lg">
              <Terminal className="w-8 h-8 text-green-400" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comandos Disponíveis
          </h2>
          <p className="text-xl text-gray-600">
            Configure seu bot com apenas 3 comandos simples
          </p>
        </div>
        
        <div className="space-y-6">
          {commands.map((cmd, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <cmd.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <code className="bg-gray-800 text-green-400 px-3 py-1 rounded font-mono text-sm">
                        {cmd.command}
                      </code>
                      <Badge variant="secondary" className="text-xs">
                        Slash Command
                      </Badge>
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 font-medium mb-2">{cmd.description}</p>
                <p className="text-gray-600 text-sm">{cmd.usage}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 rounded-lg mt-1">
              <Terminal className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">💡 Dica</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                Todos os comandos utilizam slash commands (/). Basta digitar <code className="bg-blue-200 px-1 rounded">/config</code> e 
                o Discord mostrará as opções disponíveis automaticamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commands;
