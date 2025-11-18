import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]')
    const onClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      const target = href && document.querySelector(href)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    links.forEach((l) => l.addEventListener('click', onClick))
    return () => links.forEach((l) => l.removeEventListener('click', onClick))
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-sky-500/30 selection:text-white">
      {/* Global background gradient */}
      <div className="fixed inset-0 -z-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Sections />
      </main>

      <footer className="relative border-t border-white/5 py-10 text-center text-blue-200/70">
        © {new Date().getFullYear()} AirFounders • flames.blue
      </footer>
    </div>
  )
}

export default App
