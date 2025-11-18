import React from 'react'

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative py-20 md:py-28">
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_20%_0%,rgba(56,189,248,0.08),transparent_60%),radial-gradient(700px_300px_at_80%_100%,rgba(59,130,246,0.08),transparent_60%)]" />
    <div className="relative max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <h3 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-2">{title}</h3>
        {subtitle && <p className="text-blue-100/80 max-w-3xl mx-auto">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
)

export const Servicios = () => (
  <Section
    id="servicios"
    title="Servicios"
    subtitle="Soluciones integrales para acelerar el crecimiento de tu empresa."
  >
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          t: 'Sitios Web de Alto Rendimiento',
          d: 'Diseño y desarrollo web moderno, optimizado para convertir y posicionar.'
        },
        {
          t: 'Redes Sociales Estratégicas',
          d: 'Contenido y campañas con foco en resultados y crecimiento orgánico.'
        },
        {
          t: 'Automatización con IA',
          d: 'Bots, flujos y asistentes que reducen costos y escalan tu operación.'
        }
      ].map((c) => (
        <div key={c.t} className="rounded-2xl border border-white/5 bg-white/5 hover:bg-white/8 transition-colors p-6 shadow-xl shadow-black/20">
          <h4 className="font-serif text-2xl text-white mb-2">{c.t}</h4>
          <p className="text-blue-100/80 text-sm">{c.d}</p>
        </div>
      ))}
    </div>
  </Section>
)

export const Planes = () => (
  <Section
    id="planes"
    title="Planes"
    subtitle="Elige el plan que mejor se adapte a tu etapa."
  >
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { name: 'Starter', price: 'USD 390', features: ['Landing profesional', 'Integración básica', 'Soporte por email'] },
        { name: 'Growth', price: 'USD 890', features: ['Sitio completo + blog', 'Gestión de redes', 'Automatizaciones clave'] },
        { name: 'Scale', price: 'USD 1.690', features: ['Ecommerce / SaaS', 'Estrategia multicanal', 'Automatización avanzada con IA'] }
      ].map((p) => (
        <div key={p.name} className="rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 shadow-2xl shadow-black/30">
          <div className="flex items-baseline justify-between mb-4">
            <h4 className="font-serif text-2xl text-white">{p.name}</h4>
            <div className="text-sky-300 font-semibold">{p.price}</div>
          </div>
          <ul className="space-y-2 text-blue-100/85 text-sm mb-6">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />{f}</li>
            ))}
          </ul>
          <a href="#contacto" className="inline-flex rounded-full bg-sky-500/90 hover:bg-sky-400 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-sky-500/20 transition-colors">Elegir</a>
        </div>
      ))}
    </div>
  </Section>
)

export const Automatizacion = () => (
  <Section
    id="automatizacion"
    title="Automatización IA"
    subtitle="Implementamos asistentes, flujos y herramientas que escalan tu operación sin fricción."
  >
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
        <h4 className="font-serif text-2xl text-white mb-2">Asistentes y Chatbots</h4>
        <p className="text-blue-100/80">Atiende 24/7 con respuestas consistentes y conexión a tus sistemas.</p>
      </div>
      <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
        <h4 className="font-serif text-2xl text-white mb-2">Flujos Automatizados</h4>
        <p className="text-blue-100/80">Generación de leads, onboarding y seguimiento sin tareas manuales.</p>
      </div>
    </div>
  </Section>
)

export const Testimonios = () => (
  <Section
    id="testimonios"
    title="Testimonios"
    subtitle="Resultados reales con clientes reales."
  >
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { q: 'Duplicamos leads en 60 días.', a: 'Sofía, eCommerce' },
        { q: 'Automatizamos soporte y bajaron tickets 40%.', a: 'Martín, SaaS B2B' },
        { q: 'Mejoramos presencia y aumentaron reservas 35%.', a: 'Lucía, Turismo' }
      ].map((t, i) => (
        <div key={i} className="rounded-2xl border border-white/5 bg-white/5 p-6">
          <p className="text-white mb-3">“{t.q}”</p>
          <div className="text-blue-200/80 text-sm">{t.a}</div>
        </div>
      ))}
    </div>
  </Section>
)

export const Contacto = () => (
  <Section
    id="contacto"
    title="Contacto"
    subtitle="Agendemos una reunión para entender tu proyecto."
  >
    <div className="max-w-2xl mx-auto">
      <form action="#" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input className="col-span-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-sky-500/60" placeholder="Nombre" />
        <input className="col-span-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-sky-500/60" placeholder="Email" />
        <input className="sm:col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-sky-500/60" placeholder="Empresa" />
        <textarea rows="4" className="sm:col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-sky-500/60" placeholder="Cuéntanos sobre tu proyecto" />
        <div className="sm:col-span-2 flex items-center justify-between gap-4">
          <p className="text-blue-200/60 text-xs">Respondemos en 24-48h.</p>
          <button type="submit" className="inline-flex rounded-full bg-sky-500 hover:bg-sky-400 text-white px-5 py-2.5 text-sm font-medium shadow-lg shadow-sky-500/25 transition-colors">Enviar</button>
        </div>
      </form>
    </div>
  </Section>
)

export default function SectionsWrapper() {
  return (
    <div className="relative">
      <Servicios />
      <Planes />
      <Automatizacion />
      <Testimonios />
      <Contacto />
    </div>
  )
}
