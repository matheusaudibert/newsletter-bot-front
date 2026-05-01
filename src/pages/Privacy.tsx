import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-white mb-3" style={{ letterSpacing: '-0.01em' }}>
      {title}
    </h2>
    <div className="space-y-3 text-base font-medium leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
      {children}
    </div>
  </div>
)

export default function Privacy() {
  return (
    <div style={{ backgroundColor: '#1C1D23', minHeight: '100vh' }}>
      <Nav />

      <main className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16">
        <div className="max-w-3xl">
          <h1
            className="text-4xl lg:text-5xl font-extrabold text-white mb-3"
            style={{ letterSpacing: '-0.02em' }}
          >
            Política de Privacidade
          </h1>
          <p className="text-base font-medium mb-12" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Última atualização: 1 de maio de 2025
          </p>

          <Section title="1. Informações que Coletamos">
            <p>
              A Newsletter coleta apenas as informações estritamente necessárias para seu funcionamento:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>ID do servidor (guild ID) onde o bot está instalado</li>
              <li>ID do canal configurado para receber notícias</li>
              <li>ID do cargo configurado para ser mencionado (se aplicável)</li>
            </ul>
            <p>
              Não coletamos mensagens, dados pessoais de usuários, listas de membros ou qualquer outra
              informação além do necessário para o funcionamento do serviço.
            </p>
          </Section>

          <Section title="2. Como Usamos as Informações">
            <p>As informações coletadas são usadas exclusivamente para:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Enviar notícias ao canal correto do servidor configurado</li>
              <li>Mencionar o cargo configurado junto às notícias</li>
              <li>Manter o funcionamento adequado do bot</li>
            </ul>
          </Section>

          <Section title="3. Compartilhamento de Dados">
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações com terceiros. Os dados coletados
              são usados apenas internamente para a operação da Newsletter.
            </p>
          </Section>

          <Section title="4. Retenção de Dados">
            <p>
              Os dados de configuração do servidor são mantidos enquanto o bot estiver ativo no servidor.
              Ao remover o bot do servidor, os dados associados são excluídos automaticamente.
            </p>
          </Section>

          <Section title="5. Segurança">
            <p>
              Adotamos medidas razoáveis para proteger as informações coletadas contra acesso não autorizado,
              alteração, divulgação ou destruição. No entanto, nenhum sistema é 100% seguro.
            </p>
          </Section>

          <Section title="6. Discord">
            <p>
              A Newsletter opera dentro da plataforma Discord e está sujeito à{' '}
              <a
                href="https://discord.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
                style={{ color: '#5865F2' }}
              >
                Política de Privacidade do Discord
              </a>
              . Não somos afiliados ao Discord Inc.
            </p>
          </Section>

          <Section title="7. Alterações nesta Política">
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você a revise
              regularmente. O uso continuado do bot após alterações constitui aceitação da política atualizada.
            </p>
          </Section>

          <Section title="8. Contato">
            <p>
              Para dúvidas sobre esta Política de Privacidade, entre em contato através do servidor oficial
              do Discord.
            </p>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
