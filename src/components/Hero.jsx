import React, { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  const afRef = useRef(null)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX - innerWidth / 2) / innerWidth
      const y = (e.clientY - innerHeight / 2) / innerHeight
      setParallax({ x, y })
    }

    // Only enable on desktop
    const enable = () => window.innerWidth >= 768

    const handler = (e) => enable() && onMove(e)

    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center">
      {/* Gradient dark background */}
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_10%,rgba(56,189,248,0.12),transparent_60%),radial-gradient(800px_500px_at_90%_20%,rgba(59,130,246,0.12),transparent_60%)] from-slate-950 via-slate-900 to-slate-950" />

      {/* Spline cover background */}
      <div className="absolute inset-0 opacity-[0.25]">
        <Spline scene="https://prod.spline.design/rvFZ5oikmZSIbmGQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Parallax AF watermark */}
      <div
        ref={afRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{
          transform: `translate3d(${parallax.x * 20}px, ${parallax.y * 20}px, 0)` ,
          transition: 'transform 200ms ease-out'
        }}
      >
        <div className="select-none font-serif text-[28vw] leading-none tracking-[-0.06em] font-black text-slate-600/10">
          AF
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-6 pt-24 md:pt-36 pb-16 text-center">
        <h1 className="font-serif text-6xl md:text-8xl font-extrabold text-white tracking-tight mb-2">
          AirFounders
        </h1>
        <h2 className="font-serif text-2xl md:text-3xl text-blue-100/90 mb-6">
          Modernizamos tu negocio, digitalizamos tu futuro.
        </h2>
        <p className="text-base md:text-lg text-blue-100/80 max-w-3xl mx-auto mb-6">
          Páginas web profesionales, redes sociales estratégicas y automatización con inteligencia artificial para pequeñas y medianas empresas.
        </p>
        <p className="text-blue-200/90 italic mb-8">
          Tú te ocupas de tu negocio, nosotros de hacerlo crecer.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 text-sm md:text-base font-semibold shadow-lg shadow-sky-500/25 transition-colors"
          >
            Agendar una reunión gratuita
          </a>
        </div>
        <p className="mt-4 text-xs md:text-sm text-blue-200/70">
          Moderniza tu empresa sin complicarte. Nosotros hacemos el trabajo; tú disfrutas del crecimiento.
        </p>
        <div className="mt-10 text-blue-300/60 tracking-widest uppercase text-xs">
          Trust The Process.
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  )
}

export default Hero
