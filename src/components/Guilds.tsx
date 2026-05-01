import { useEffect, useState } from 'react'

interface Guild {
  id: string
  name: string
  memberCount: number
  iconUrl: string | null
  inviteUrl: string | null
}


function GuildCard({ guild }: { guild: Guild }) {
  return (
    <a
      href={guild.inviteUrl ?? '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-3xl p-5 shrink-0"
      style={{
        width: '300px',
        backgroundColor: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.06)',
        transition: 'transform 0.3s ease',
        transform: 'scale(1)',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.98)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
    >
      <img
        src={guild.iconUrl ?? `https://placehold.co/48x48/23252B/5865F2?text=${guild.name.charAt(0)}`}
        alt={guild.name}
        className="w-16 h-16 rounded-2xl object-cover shrink-0"
        onError={e => {
          e.currentTarget.src = `https://placehold.co/48x48/23252B/5865F2?text=${guild.name.charAt(0)}`
        }}
      />
      <div className="overflow-hidden">
        <p className="text-xl font-bold text-white truncate leading-tight">
          {guild.name}
        </p>
        <p className="flex items-center gap-1.5 text-base mt-1 font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>
          <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.55)' }} />
          {guild.memberCount.toLocaleString('pt-BR')} membros
        </p>
      </div>
    </a>
  )
}

export default function Guilds() {
  const [guilds, setGuilds] = useState<Guild[]>([])
  const [total, setTotal] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/guilds')
      .then(r => r.json())
      .then(data => {
        const list: Guild[] = Array.isArray(data) ? data : (data.guilds ?? data)
        setTotal(data.totalGuilds ?? list.length)
        setGuilds(list.filter((g: Guild) => g.id).slice(0, 20))
      })
      .catch(() => { })
  }, [])

  const row1 = guilds.slice(0, 10)
  const row2 = guilds.slice(10, 20)

  if (guilds.length === 0) return null

  const maskStyle = {
    maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
  }

  return (
    <section className="py-16">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="mb-10">
          <h2
            className="text-3xl lg:text-4xl font-extrabold text-white mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Comunidades que utilizam a Newsletter
          </h2>
          <p className="text-lg font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Atualmente o bot está presente em <strong className="text-white font-bold">{total ?? '...'} servidores</strong>, e estes são os maiores.
          </p>
        </div>
        <div className="overflow-hidden" style={maskStyle}>
          {/* Row 1 — left to right */}
          <div
            className="flex mb-2"
            style={{ gap: '8px', animation: 'scroll-right 75s linear infinite', width: 'max-content' }}
          >
            {[...row1, ...row1].map((guild, i) => (
              <GuildCard key={`r1-${guild.id}-${i}`} guild={guild} />
            ))}
          </div>

          {/* Row 2 — right to left */}
          <div
            className="flex"
            style={{ gap: '8px', animation: 'scroll-left 75s linear infinite', width: 'max-content' }}
          >
            {[...row2, ...row2].map((guild, i) => (
              <GuildCard key={`r2-${guild.id}-${i}`} guild={guild} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
