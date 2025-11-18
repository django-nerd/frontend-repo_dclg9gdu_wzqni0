import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="text-white font-semibold tracking-wide text-lg">
            AirFounders
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#inicio" className="text-blue-100/90 hover:text-white transition-colors">Inicio</a>
            <a href="#servicios" className="text-blue-100/90 hover:text-white transition-colors">Servicios</a>
            <a href="#planes" className="text-blue-100/90 hover:text-white transition-colors">Planes</a>
            <a href="#automatizacion" className="text-blue-100/90 hover:text-white transition-colors">Automatización IA</a>
            <a href="#testimonios" className="text-blue-100/90 hover:text-white transition-colors">Testimonios</a>
            <a href="#contacto" className="text-blue-100/90 hover:text-white transition-colors">Contacto</a>
          </nav>

          {/* CTA */}
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-sky-500/90 hover:bg-sky-400 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-sky-500/20 transition-colors"
          >
            Agendar Reunión
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
