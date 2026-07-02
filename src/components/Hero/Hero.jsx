import { useState, useEffect, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import HeroScene from './HeroScene'
import FilmGrain from './FilmGrain'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

export default function Hero() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)
  const [sceneKey, setSceneKey] = useState(0)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.unobserve(el)
  }, [])

  const handleRerack = () => setSceneKey((k) => k + 1)

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px', background: '#0B0907' }}
      aria-label="Hero — where the break begins"
    >
      {reducedMotion ? (
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 55%, #1B5C3C 0%, #0d3320 40%, #0B0907 100%)',
          }}
          aria-hidden="true"
        />
      ) : (
        <div className="absolute inset-0" aria-hidden="true">
          <Canvas
            key={sceneKey}
            shadows
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: false }}
            style={{ background: '#0B0907' }}
          >
            <Suspense fallback={null}>
              <HeroScene isVisible={isVisible} />
            </Suspense>
          </Canvas>
        </div>
      )}

      {!reducedMotion && <FilmGrain />}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(11,9,7,0.55) 70%, rgba(11,9,7,0.92) 100%)',
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-y-0 left-0 w-3/4 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(11,9,7,0.75) 0%, rgba(11,9,7,0.4) 50%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex items-center">
        <div
          className="ml-8 md:ml-16 lg:ml-24 max-w-xl"
          style={{ paddingTop: '4rem' }}
        >
          <p
            className="font-body text-xs md:text-sm tracking-[0.25em] uppercase mb-3"
            style={{ color: '#B8932E' }}
          >
            Est.&thinsp;1963 &middot; Carlton, Yorkshire
          </p>

          <h1
            className="font-heading font-light leading-none"
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              color: '#EAE4D9',
              letterSpacing: '-0.01em',
            }}
          >
            Where the<br />
            <span className="font-semibold">Break Begins.</span>
          </h1>

          <p
            className="font-body mt-5 text-base md:text-lg leading-relaxed"
            style={{
              color: 'rgba(234,228,217,0.68)',
              maxWidth: '38ch',
            }}
          >
            A private snooker club for serious players<br className="hidden sm:inline" />
            and social members alike.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#membership"
              id="hero-cta-member"
              className="font-body font-medium text-sm tracking-wide transition-all duration-200"
              style={{
                padding: '0.75rem 2rem',
                background: '#1B5C3C',
                color: '#EAE4D9',
                border: '1px solid #1B5C3C',
                letterSpacing: '0.04em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#155231'
                e.currentTarget.style.borderColor = '#155231'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#1B5C3C'
                e.currentTarget.style.borderColor = '#1B5C3C'
              }}
            >
              Become a Member
            </a>
            <a
              href="#contact"
              id="hero-cta-book"
              className="font-body font-medium text-sm tracking-wide transition-all duration-200"
              style={{
                padding: '0.75rem 2rem',
                background: 'transparent',
                color: '#EAE4D9',
                border: '1px solid rgba(234,228,217,0.35)',
                letterSpacing: '0.04em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(234,228,217,0.08)'
                e.currentTarget.style.borderColor = 'rgba(234,228,217,0.6)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(234,228,217,0.35)'
              }}
            >
              Book a Table
            </a>
          </div>
        </div>
      </div>

      {!reducedMotion && (
        <button
          id="rerack-btn"
          onClick={handleRerack}
          className="absolute bottom-6 right-6 md:bottom-8 md:right-8 font-body text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer"
          style={{
            padding: '0.5rem 1.25rem',
            background: 'rgba(11,9,7,0.6)',
            border: '1px solid rgba(234,228,217,0.2)',
            color: 'rgba(234,228,217,0.55)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(27,92,60,0.4)'
            e.currentTarget.style.borderColor = 'rgba(184,147,46,0.5)'
            e.currentTarget.style.color = '#B8932E'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(11,9,7,0.6)'
            e.currentTarget.style.borderColor = 'rgba(234,228,217,0.2)'
            e.currentTarget.style.color = 'rgba(234,228,217,0.55)'
          }}
          aria-label="Re-rack balls and replay break animation"
        >
          ↻ Re-rack
        </button>
      )}
    </section>
  )
}