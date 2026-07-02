import { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import HeroScene from './HeroScene'

function Hero() {
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef(null)

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

  return (
    <section ref={sectionRef} className="relative w-full h-screen-100 bg-dark overflow-hidden">
      <Canvas shadows>
        <HeroScene isVisible={isVisible} />
      </Canvas>

      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="max-w-3xl ml-8 md:ml-16 lg:ml-24 pointer-events-auto">
          <span className="font-body text-accent text-sm md:text-base tracking-widest uppercase">
            Est.1963 · Carlton, Yorkshire
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-tight mt-2">
            Where the <br /><span className="font-semibold">Break Begins.</span>
          </h1>
          <p className="font-body text-cream/70 text-lg md:text-xl max-w-xl mt-4">
            A private snooker club for serious players and social members alike.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#membership" className="px-8 py-3 bg-primary text-cream font-body font-medium rounded-sm hover:bg-primary/80 transition-colors">
              Become a Member
            </a>
            <a href="#contact" className="px-8 py-3 border border-cream/30 text-cream font-body font-medium rounded-sm hover:bg-cream/10 transition-colors">
              Book a Table
            </a>
          </div>
        </div>
      </div>

      <button id="rerack-btn" className="absolute bottom-8 right-8 px-4 py-2 bg-dark/50 border border-cream/20 text-cream/60 text-sm font-body rounded hover:bg-dark/70 transition-colors pointer-events-auto">
        ↻ Re-rack
      </button>
    </section>
  )
}

export default Hero