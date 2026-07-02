function Stats() {
  const stats = [
    { number: '12', label: 'Tables' },
    { number: '1963', label: 'Established' },
    { number: '400+', label: 'Members' },
    { number: 'EPSB', label: 'Accredited' },
  ]

  return (
    <section className="bg-dark border-t border-b border-primary/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="font-heading text-3xl md:text-4xl font-light text-cream">{stat.number}</div>
              <div className="font-body text-sm text-cream/60 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats