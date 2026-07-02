import { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import HeroScene from './HeroScene'

function Hero() {
  const [isVisible, setIsVisible] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const sectionRef = useRef(null)

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Intersection observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Handle re-rack button click
  useEffect(() => {
    const btn = document.getElementById('rerack-btn')
    const handleClick = () => {
      window.handleRerack?.()
    }
    
    if (btn) {
      btn.addEventListener('click', handleClick)
      return () => btn.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen bg-dark overflow-hidden"
    >
      {/* 3D Canvas */}
      {!prefersReducedMotion && (
        <Canvas 
          shadows 
          gl={{ antialias: true, alpha: false }}
          style={{ width: '100%', height: '100%' }}
        >
          <HeroScene isVisible={isVisible} />
        </Canvas>
      )}

      {/* Prefers-reduced-motion fallback */}
      {prefersReducedMotion && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-950">
          <div className="text-center">
            <div className="text-6xl font-light text-cream mb-4 opacity-50">🎱</div>
            <p className="text-cream/60">Carlton & District Snooker Club</p>
          </div>
        </div>
      )}

      {/* Text Overlay - Left-aligned editorial style */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="max-w-3xl ml-8 md:ml-16 lg:ml-24 pointer-events-auto">
          <span className="font-body text-amber-500 text-xs md:text-sm tracking-widest uppercase opacity-80">
            Est. 1963 · Carlton, Yorkshire
          </span>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mt-4 text-pretty">
            Where the <br /><span className="font-semibold">Break</span> Begins.
          </h1>
          
          <p className="font-body text-gray-300 text-lg md:text-xl max-w-xl mt-6 leading-relaxed">
            A private snooker club for serious players and social members alike.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a 
              href="#membership" 
              className="px-8 py-3 bg-amber-600 text-white font-body font-medium hover:bg-amber-700 transition-colors duration-300 active:scale-95"
            >
              Become a Member
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-white/40 text-white font-body font-medium hover:border-white hover:bg-white/5 transition-colors duration-300 active:scale-95"
            >
              Book a Table
            </a>
          </div>
        </div>
      </div>

      {/* Re-rack Button - Bottom Right */}
      {!prefersReducedMotion && (
        <button 
          id="rerack-btn" 
          className="absolute bottom-8 right-8 px-6 py-2 bg-black/40 border border-white/20 text-white/70 text-sm font-body rounded hover:bg-black/60 hover:text-white/90 transition-all duration-300 pointer-events-auto backdrop-blur-sm"
          title="Reset and replay the break animation"
        >
          ↻ Re-rack
        </button>
      )}
    </section>
  )
}

export default Hero
