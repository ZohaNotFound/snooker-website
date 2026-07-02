import Navbar from './components/Navigation/Navbar'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import About from './components/About/About'
import Tables from './components/Tables/Tables'
import Membership from './components/Membership/Membership'
import Events from './components/Events/Events'
import Coaching from './components/Coaching/Coaching'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="bg-light">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Tables />
      <Membership />
      <Events />
      <Coaching />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App