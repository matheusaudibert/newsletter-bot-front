import { Link } from 'react-router-dom'

const DiscordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 127.14 96.36"
    className="w-4 h-4 fill-white shrink-0"
  >
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
  </svg>
)

export default function Nav() {
  return (
    <nav className="w-full z-50">
      <div className="max-w-[1400px] mx-auto w-full px-8 lg:px-16 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-white font-bold text-2xl tracking-tight">
            Newsletter
          </span>
          <img
            src="https://i.postimg.cc/C5tp5gws/app-verified.png"
            alt="Newsletter"
            className="w-16 h-16 object-contain"
          />
        </Link>

        {/* Entrar no servidor */}
        <a
          href="https://discord.gg/programador"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-bold text-white"
          style={{ backgroundColor: '#23252B', border: '1px solid rgba(255,255,255,0.08)', transition: 'background-color 0.2s ease, transform 0.3s ease', transform: 'scale(1)' }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#23252B'; e.currentTarget.style.transform = 'scale(0.97)' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#23252B'; e.currentTarget.style.transform = 'scale(1)' }}
        >
          <img src="https://cdn3.emoji.gg/emojis/5922-verified-icon.png" className="w-5 h-5 object-contain shrink-0" />
          Entrar no servidor
        </a>
      </div>
    </nav>
  )
}
