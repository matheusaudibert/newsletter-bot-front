const DiscordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 127.14 96.36"
    className="w-5 h-5 fill-white shrink-0"
  >
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
  </svg>
)

export default function Hero() {
  return (
    <section className="relative flex items-start overflow-hidden py-16">

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-12 lg:gap-12 items-start">
        {/* Left — text */}
        <div>
          <h1
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-3"
            style={{ letterSpacing: '-0.02em' }}
          >
            <span style={{ color: '#5865F2' }}>Notícias</span>
            {' '}para o seu servidor
          </h1>

          <p className="text-lg leading-relaxed mb-5 font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>
            A Newsletter mantém sua comunidade sempre atualizada, enviando automaticamente
            <br />
            as principais notícias de tecnologia direto no Discord.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://discord.com/oauth2/authorize?client_id=1383234818388791296"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-sm text-white"
              style={{ backgroundColor: '#5865F2', border: '1px solid rgba(148,161,255,0.5)', transition: 'background-color 0.3s ease, transform 0.3s ease', transform: 'scale(1)' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#4955d6'; e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#5865F2'; e.currentTarget.style.transform = 'scale(1)' }}
            >
              <DiscordIcon />
              Adicionar ao Discord
            </a>
            <a
              href="https://discord.gg/programador"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-sm text-white"
              style={{ backgroundColor: '#23252B', border: '1px solid rgba(255,255,255,0.08)', transition: 'background-color 0.15s ease, transform 0.15s ease', transform: 'scale(1)' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1a1b20'; e.currentTarget.style.transform = 'scale(0.96)' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#23252B'; e.currentTarget.style.transform = 'scale(1)' }}
            >
              <img src="https://cdn3.emoji.gg/emojis/5922-verified-icon.png" className="w-5 h-5 object-contain shrink-0" />
              Entrar no servidor
            </a>
          </div>
        </div>

        {/* Right — image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://filipedeschamps.com.br/avatar-big.png"
            alt="Filipe Deschamps"
            className="w-64 h-64 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
