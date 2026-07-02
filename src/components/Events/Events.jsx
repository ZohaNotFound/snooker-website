const events = [
  { date: '15 Jul', name: 'Summer League Finals', type: 'Tournament' },
  { date: '22 Jul', name: 'Junior Coaching Clinic', type: 'Coaching' },
  { date: '5 Aug', name: 'Club Championship Qualifiers', type: 'Competition' },
  { date: '19 Aug', name: 'Members Social Evening', type: 'Social' },
]

function Events() {
  return (
    <section id="events" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <span className="font-body text-accent text-sm tracking-widest uppercase">Upcoming</span>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-dark mt-2">
              Events & <span className="font-semibold">Leagues</span>
            </h2>
          </div>
          <a href="#" className="font-body text-primary hover:underline mt-4 md:mt-0">View full calendar →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((ev, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-light rounded-lg border border-dark/5">
              <div className="w-16 text-center bg-primary/10 rounded-lg py-2">
                <div className="font-heading text-xl font-bold text-primary">{ev.date.split(' ')[0]}</div>
                <div className="font-body text-xs text-dark/50">{ev.date.split(' ')[1]}</div>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-dark">{ev.name}</h3>
                <span className="font-body text-sm text-dark/50">{ev.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events