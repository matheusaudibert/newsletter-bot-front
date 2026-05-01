import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="w-full z-50">
      <div className="max-w-[1400px] mx-auto w-full px-8 lg:px-16 py-5 flex items-center">
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
      </div>
    </nav>
  )
}
