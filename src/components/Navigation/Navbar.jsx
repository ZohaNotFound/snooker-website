import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-primary shadow-lg backdrop-blur-sm'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="/" className="font-heading text-2xl text-cream tracking-wider">
          Carlton <span className="text-accent">&</span> District
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="font-body text-cream/80 hover:text-cream transition-colors text-sm">About</a>
          <a href="#tables" className="font-body text-cream/80 hover:text-cream transition-colors text-sm">Tables</a>
          <a href="#membership" className="font-body text-cream/80 hover:text-cream transition-colors text-sm">Membership</a>
          <a href="#events" className="font-body text-cream/80 hover:text-cream transition-colors text-sm">Events</a>
          <a href="#gallery" className="font-body text-cream/80 hover:text-cream transition-colors text-sm">Gallery</a>
          <a href="#contact" className="font-body text-cream/80 hover:text-cream transition-colors text-sm">Contact</a>
        </nav>
        <a href="#contact" className="px-5 py-2 bg-primary text-cream font-body text-sm font-medium rounded-sm hover:bg-primary/80 transition-colors">
          Book a Table
        </a>
      </div>
    </header>
  )
}

export default Navbar