const plans = [
  {
    tier: 'Junior',
    price: '£120',
    period: '/ year',
    features: ['Ages 12–18', 'Access to tables (off-peak)', 'Junior coaching sessions', 'Entry to junior tournaments'],
    highlighted: false,
  },
  {
    tier: 'Standard',
    price: '£280',
    period: '/ year',
    features: ['Full access 7 days', 'All tables & facilities', 'Free entry to club leagues', 'Discounts on coaching', 'Member events & socials'],
    highlighted: true,
  },
  {
    tier: 'Full',
    price: '£450',
    period: '/ year',
    features: ['All Standard benefits', 'Priority table booking', 'Guest passes (4 per year)', 'Voting rights at AGM', 'Exclusive full-member events'],
    highlighted: false,
  },
]

function Membership() {
  return (
    <section id="membership" className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-body text-accent text-sm tracking-widest uppercase">Join the Club</span>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-dark mt-2">
            Membership <span className="font-semibold">Tiers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`bg-white rounded-lg shadow-lg overflow-hidden border ${
                plan.highlighted ? 'border-accent shadow-xl scale-105' : 'border-dark/10'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-accent text-dark text-center font-body text-xs font-semibold uppercase tracking-wider py-1">
                  Most Popular
                </div>
              )}
              <div className="p-6 text-center">
                <h3 className="font-heading text-2xl font-semibold text-dark">{plan.tier}</h3>
                <div className="mt-4">
                  <span className="font-heading text-4xl font-light text-primary">{plan.price}</span>
                  <span className="font-body text-dark/50 text-sm">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-2 text-left">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="font-body text-sm text-dark/70 flex items-start">
                      <span className="text-primary mr-2">✓</span> {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 inline-block px-8 py-3 font-body font-medium rounded-sm transition-colors ${
                    plan.highlighted
                      ? 'bg-primary text-cream hover:bg-primary/80'
                      : 'bg-dark/10 text-dark hover:bg-dark/20'
                  }`}
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Membership