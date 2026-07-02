function Footer() {
  return (
    <footer className="bg-dark text-cream/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-heading text-2xl text-cream">Carlton & District</h2>
            <p className="font-body text-sm text-cream/50 mt-2">Since 1963</p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="font-body text-sm hover:text-cream transition-colors">About</a></li>
              <li><a href="#membership" className="font-body text-sm hover:text-cream transition-colors">Membership</a></li>
              <li><a href="#events" className="font-body text-sm hover:text-cream transition-colors">Events</a></li>
              <li><a href="#gallery" className="font-body text-sm hover:text-cream transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-cream mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-cream/50 hover:text-cream transition-colors">FB</a>
              <a href="#" className="text-cream/50 hover:text-cream transition-colors">IG</a>
              <a href="#" className="text-cream/50 hover:text-cream transition-colors">X</a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-cream mb-4">Affiliations</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cream/10 text-cream/70 font-body text-xs rounded-full">EPSB</span>
              <span className="px-3 py-1 bg-cream/10 text-cream/70 font-body text-xs rounded-full">WPBSA</span>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-cream/40">
          <p>© 2026 Carlton & District Liberal Club. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer