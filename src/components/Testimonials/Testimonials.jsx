const testimonials = [
  {
    name: 'James Harrison',
    tier: 'Standard Member',
    quote: 'The best club I’ve played at in the North. The tables are immaculate and the atmosphere is always welcoming.',
    stars: 5,
  },
  {
    name: 'Sarah Mitchell',
    tier: 'Full Member',
    quote: 'I joined for the competition and stayed for the community. The coaching has transformed my game.',
    stars: 5,
  },
  {
    name: 'Robert Chen',
    tier: 'Junior Member',
    quote: 'The junior program is fantastic – I’ve made great friends and improved so much in just one season.',
    stars: 4,
  },
]

function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-accent text-accent text-sm tracking-widest uppercase">Member Voices</span>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-dark mt-2">
            What Our Members <span className="font-semibold">Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-dark/5">
              <div className="flex text-accent mb-2">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s}>★</span>
                ))}
              </div>
              <p className="font-body text-dark/70 italic text-sm">"{t.quote}"</p>
              <div className="mt-4">
                <p className="font-heading font-semibold text-dark">{t.name}</p>
                <p className="font-body text-xs text-dark/50">{t.tier}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials