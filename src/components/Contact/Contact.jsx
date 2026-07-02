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
          {/* Google Map Embed – Lahore, Pakistan */}
          <div className="h-72 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.123456789!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e493c8d5%3A0x8b4d9e3b6d5f4e7a!2sLahore%2C+Punjab%2C+Pakistan!5e0!3m2!1sen!2s!4v1620000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carlton & District Location"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <div>
              <h3 className="font-heading text-xl font-semibold text-dark">Address</h3>
              <p className="font-body text-dark/70">Snooker Club, Main Boulevard, Lahore, Pakistan</p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-dark">Contact</h3>
              <p className="font-body text-dark/70">Phone: +92 42 1234 5678</p>
              <p className="font-body text-dark/70">Email: info@carltondistrict.pk</p>
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