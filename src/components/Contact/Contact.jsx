function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-body text-accent text-sm tracking-widest uppercase">Get in Touch</span>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-dark mt-2">
            Contact & <span className="font-semibold">Find Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-72 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.382487733007!2d-1.5476847!3d53.7939994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795a8d2d28a4b1%3A0x6f5b3b3b3b3b3b3b!2sLeeds!5e0!3m2!1sen!2suk!4v1620000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carlton & District Location"
            ></iframe>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-heading text-xl font-semibold text-dark">Address</h3>
              <p className="font-body text-dark/70">12 Victoria Street, Leeds, LS1 6AA</p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-dark">Contact</h3>
              <p className="font-body text-dark/70">Phone: 0113 245 6789</p>
              <p className="font-body text-dark/70">Email: info@carltondistrict.co.uk</p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-dark">Opening Hours</h3>
              <table className="font-body text-sm text-dark/70 mt-2">
                <tbody>
                  <tr><td>Mon–Fri</td><td className="pl-8">10:00 – 22:00</td></tr>
                  <tr><td>Sat</td><td className="pl-8">09:00 – 22:00</td></tr>
                  <tr><td>Sun</td><td className="pl-8">10:00 – 18:00</td></tr>
                </tbody>
              </table>
            </div>
            <p className="font-body text-xs text-dark/50 mt-4">Free parking on-site · Disabled access available</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact