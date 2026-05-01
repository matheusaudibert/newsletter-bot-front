import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Wave background */}
      <img
        src="/blue_waves_background.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 py-20 flex flex-col items-center justify-center gap-4">
        <span className="text-white font-extrabold text-3xl tracking-tight" style={{ letterSpacing: '-0.02em' }}>
          Newsletter
        </span>

        <div className="flex items-center gap-6">
          <Link
            to="/terms"
            className="text-lg font-semibold text-white transition-opacity hover:opacity-70"
          >
            Termos de Serviço
          </Link>
          <Link
            to="/privacy"
            className="text-lg font-semibold text-white transition-opacity hover:opacity-70"
          >
            Política de Privacidade
          </Link>
        </div>

        <p className="text-base font-medium mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
          © Newsletter. Todos os direitos reservados. Não afiliado ao Discord Inc.
        </p>
      </div>
    </footer>
  )
}
