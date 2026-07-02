function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-body text-accent text-sm tracking-widest uppercase">Heritage</span>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-dark mt-2">
              Craft · Community · <br /><span className="font-semibold">Competition</span>
            </h2>
            <div className="font-body text-dark/70 space-y-4 mt-6">
              <p>
                Founded in 1963, Carlton & District has been the home of snooker in Yorkshire for over six decades.
                What began as a small gathering of enthusiasts has grown into one of the region's most respected
                private clubs, known for its immaculate tables and warm, welcoming atmosphere.
              </p>
              <p>
                We believe in the craft of the game, the strength of community, and the thrill of competition.
                Whether you're a seasoned player or picking up a cue for the first time, you'll find a home here.
              </p>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <img
              src="/images/club-exterior.jpg"
              alt="Carlton & District Club"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-dark/5">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 overflow-hidden">
              <img 
                src="/images/craft.jpg" 
                alt="Craft" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-heading text-xl font-semibold text-dark">Craft</h3>
            <p className="font-body text-dark/60 text-sm mt-2">Immaculately maintained tables, precision equipment, and a respect for the game's traditions.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-dark/5">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 overflow-hidden">
              <img 
                src="/images/community.jpg" 
                alt="Community" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-heading text-xl font-semibold text-dark">Community</h3>
            <p className="font-body text-dark/60 text-sm mt-2">A diverse membership from all walks of life, brought together by a shared love of the game.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-dark/5">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 overflow-hidden">
              <img 
                src="/images/competition.jpg" 
                alt="Competition" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-heading text-xl font-semibold text-dark">Competition</h3>
            <p className="font-body text-dark/60 text-sm mt-2">Leagues, tournaments, and friendly rivalries – there's always a match to be played.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About