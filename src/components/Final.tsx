const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const DiscordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" className="w-4 h-4 fill-white shrink-0">
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
  </svg>
)

export default function Final() {
  return (
    <section className="pt-16 pb-40">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="max-w-6xl flex items-start gap-3">
          {/* Avatar */}
          <img
            src="https://avatars.githubusercontent.com/u/85813476?v=4"
            alt="audibert"
            className="w-16 h-16 rounded-full object-cover shrink-0 mt-0.5"
          />

          {/* Content — vertically aligned with name */}
          <div className="flex-1 min-w-0">
            {/* Name + badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white font-bold text-xl">audibert</span>
              <span
                className="font-bold px-1.5 py-0 rounded-md text-white"
                style={{ backgroundColor: '#5865F2', fontSize: '14px' }}
              >
                CRIADOR
              </span>
            </div>

            {/* Message card */}
            <div
              className="rounded-2xl p-5 mb-5"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="font-bold text-white text-xl mb-3">
                Obrigado por usar a Newsletter!
              </p>
              <p className="font-medium text-lg leading-relaxed text-white">
                Meu objetivo é tornar seu servidor mais ativo e informado, trazendo notícias relevantes de forma automática e organizada. Seguimos evoluindo com base no feedback da comunidade para deixar tudo cada vez mais simples e útil para você. <i>Se encontrar algum bug ou tiver sugestões de melhoria, abra uma issue no repositório do projeto.</i>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://discord.com/oauth2/authorize?client_id=1383234818388791296"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-sm text-white"
                style={{ backgroundColor: '#5865F2', border: '1px solid rgba(148,161,255,0.5)', transition: 'background-color 0.3s ease, transform 0.3s ease', transform: 'scale(1)' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#4955d6'; e.currentTarget.style.transform = 'scale(0.96)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#5865F2'; e.currentTarget.style.transform = 'scale(1)' }}
              >
                <DiscordIcon />
                Adicionar ao Discord
              </a>
              <a
                href="https://github.com/matheusaudibert/newsletter-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-sm text-white"
                style={{ backgroundColor: '#208449', border: '1px solid rgba(50,180,100,0.35)', transition: 'background-color 0.3s ease, transform 0.3s ease', transform: 'scale(1)' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#186b3a'; e.currentTarget.style.transform = 'scale(0.96)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#208449'; e.currentTarget.style.transform = 'scale(1)' }}
              >
                <GitHubIcon />
                Repositório
              </a>
              <a
                href="https://discord.gg/programador"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-sm text-white"
                style={{ backgroundColor: '#23252B', border: '1px solid rgba(255,255,255,0.08)', transition: 'background-color 0.3s ease, transform 0.3s ease', transform: 'scale(1)' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1a1b20'; e.currentTarget.style.transform = 'scale(0.96)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#23252B'; e.currentTarget.style.transform = 'scale(1)' }}
              >
                <img src="https://cdn3.emoji.gg/emojis/5922-verified-icon.png" className="w-5 h-5 object-contain shrink-0" style={{ minWidth: '20px' }} />
                Entrar no servidor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
