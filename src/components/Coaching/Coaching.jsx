function Coaching() {
  return (
    <section id="coaching" className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-body text-accent text-sm tracking-widest uppercase">Improve Your Game</span>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-dark mt-2">
            Professional <span className="font-semibold">Coaching</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/coach-portrait.jpg"
              alt="Head Coach"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-heading text-2xl font-semibold text-dark">David Thompson</h3>
            <p className="font-body text-sm text-accent">EPSB Level 3 Coach · 20+ years experience</p>
            <p className="font-body text-dark/70 mt-4">
              David has coached players from beginners to national competitors. Specialising in technique,
              match strategy, and mental focus. Available for 1-to-1, group, and junior sessions.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="px-3 py-1 bg-primary/10 text-primary font-body text-xs rounded-full">1-to-1</span>
              <span className="px-3 py-1 bg-primary/10 text-primary font-body text-xs rounded-full">Group</span>
              <span className="px-3 py-1 bg-primary/10 text-primary font-body text-xs rounded-full">Juniors</span>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-block px-6 py-2 bg-primary text-cream font-body text-sm font-medium rounded-sm hover:bg-primary/80 transition-colors"
            >
              Book a Session
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coaching