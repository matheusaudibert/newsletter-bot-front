export default function Card1() {
  return (
    <section className="py-16">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="mb-10">
          <h2
            className="text-3xl lg:text-4xl font-extrabold text-white mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            De onde vêm as notícias?
          </h2>
          <p className="text-lg font-medium leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            As notícias são curadas a partir do{' '}
            <strong className="text-white font-bold">TabNews</strong>
            , uma plataforma criada pelo{' '}
            <a
              href="https://filipedeschamps.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all duration-150"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              Filipe Deschamps
            </a>
            {' '}onde a comunidade compartilha e discute conteúdos sobre tecnologia, programação e o mundo dev.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — image */}
          <a
            href="https://www.tabnews.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', transition: 'transform 0.3s ease', transform: 'scale(1)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.99)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
          >
            <img
              src="https://www.tabnews.com.br/default-image-share.png"
              alt="TabNews"
              className="w-full rounded-xl object-cover"
            />
          </a>

          {/* Right — description */}
          <div>
            <p className="text-lg font-medium leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              O TabNews é uma plataforma de compartilhamento e curadoria de conteúdo sobre tecnologia e programação, criada pelo Filipe Deschamps. Funciona como um agregador social onde usuários publicam conteúdos que são organizados por votos e engajamento da comunidade.
            </p>
            <p className="text-lg font-medium leading-relaxed mt-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
              A newsletter é um canal dentro do próprio TabNews focado na publicação de notícias de tecnologia, reunindo atualizações relevantes do ecossistema dev de forma direta e organizada.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
