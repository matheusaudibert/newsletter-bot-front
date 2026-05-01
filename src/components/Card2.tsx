const steps = [
  {
    number: '01',
    command: '/canal',
    description: 'Escolha um canal onde as notícias serão enviadas',
  },
  {
    number: '02',
    command: '/cargo',
    description: 'Escolha um cargo a ser mencionado junto às notícias (opcional)',
  },
  {
    number: '03',
    command: 'Pronto!',
    description: 'Seu bot já estará configurado e enviando notícias automaticamente',
  },
]

export default function Card2() {
  return (
    <section className="py-16">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="mb-10">
          <h2
            className="text-3xl lg:text-4xl font-extrabold text-white mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Como configurar o bot?
          </h2>
          <p className="text-lg font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Um guia rápido para configurar o bot no seu servidor
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-center gap-6 rounded-2xl px-6 py-5 overflow-hidden"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span
                className="text-2xl font-extrabold shrink-0"
                style={{ color: 'rgba(88,101,242,0.5)', letterSpacing: '-0.02em', minWidth: '2.5rem' }}
              >
                {step.number}
              </span>
              <span
                className="font-bold text-base shrink-0 px-3 py-1 rounded-lg"
                style={{ backgroundColor: 'rgba(88,101,242,0.15)', color: '#5865F2', border: '1px solid rgba(88,101,242,0.25)' }}
              >
                {step.command}
              </span>
              <p className="font-medium text-base min-w-0 flex-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
