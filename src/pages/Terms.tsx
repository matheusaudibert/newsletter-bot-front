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

export default function Terms() {
  return (
    <div style={{ backgroundColor: '#1C1D23', minHeight: '100vh' }}>
      <Nav />

      <main className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16">
        <div className="max-w-3xl">
          <h1
            className="text-4xl lg:text-5xl font-extrabold text-white mb-3"
            style={{ letterSpacing: '-0.02em' }}
          >
            Termos de Serviço
          </h1>
          <p className="text-base font-medium mb-12" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Última atualização: 1 de maio de 2025
          </p>

          <Section title="1. Aceitação dos Termos">
            <p>
              Ao adicionar a Newsletter ao seu servidor do Discord, você concorda com estes Termos de Serviço.
              Se você não concordar com qualquer parte destes termos, não deverá utilizar o bot.
            </p>
          </Section>

          <Section title="2. Descrição do Serviço">
            <p>
              A Newsletter é um bot para Discord que coleta e distribui automaticamente notícias de tecnologia
              provenientes do TabNews para canais configurados em servidores do Discord.
            </p>
            <p>
              O serviço é oferecido gratuitamente e pode ser modificado, suspenso ou encerrado a qualquer momento
              sem aviso prévio.
            </p>
          </Section>

          <Section title="3. Uso Aceitável">
            <p>Ao utilizar a Newsletter, você concorda em não:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Usar o bot para fins ilegais ou não autorizados</li>
              <li>Tentar interferir no funcionamento do bot ou dos servidores</li>
              <li>Tentar realizar engenharia reversa ou modificar o bot</li>
              <li>Usar o bot para enviar spam ou conteúdo malicioso</li>
            </ul>
          </Section>

          <Section title="4. Conteúdo de Terceiros">
            <p>
              As notícias distribuídas pela Newsletter são provenientes do TabNews e de outras fontes externas.
              Não nos responsabilizamos pela precisão, completude ou adequação do conteúdo publicado por terceiros.
            </p>
          </Section>

          <Section title="5. Limitação de Responsabilidade">
            <p>
              A Newsletter é fornecida "como está", sem garantias de qualquer tipo. Não nos responsabilizamos
              por quaisquer danos diretos, indiretos, incidentais ou consequentes decorrentes do uso ou
              impossibilidade de uso do serviço.
            </p>
          </Section>

          <Section title="6. Modificações dos Termos">
            <p>
              Reservamos o direito de modificar estes termos a qualquer momento. O uso continuado do bot após
              alterações nos termos constitui aceitação dos novos termos.
            </p>
          </Section>

          <Section title="7. Contato">
            <p>
              Para dúvidas sobre estes Termos de Serviço, entre em contato através do servidor oficial do Discord.
            </p>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
