const facilities = [
  {
    title: '12 Championship Tables',
    desc: 'Full-size snooker tables with heated slate, precision cushions, and tournament-grade baize.',
    img: '/images/table-1.jpg',
  },
  {
    title: 'Bar & Lounge',
    desc: 'Relaxed seating area with a wide selection of drinks, perfect for post-match unwinding.',
    img: '/images/bar-lounge.jpg',
  },
  {
    title: 'Match Night Action',
    desc: 'Experience the thrill of competitive play under our warm tungsten lights.',
    img: '/images/match-night.jpg',
  },
  {
    title: 'Modern Amenities',
    desc: 'Free Wi-Fi, HD screens for live sports, disabled access, and ample parking.',
    img: '/images/facility-4.jpg',
  },
]

function Tables() {
  return (
    <section id="tables" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-body text-accent text-sm tracking-widest uppercase">Our Facilities</span>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-dark mt-2">
            Snooker Tables & <span className="font-semibold">Amenities</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((item, i) => (
            <div key={i} className="group overflow-hidden rounded-lg shadow-lg bg-light">
              <div className="h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-dark">{item.title}</h3>
                <p className="font-body text-dark/60 text-sm mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tables