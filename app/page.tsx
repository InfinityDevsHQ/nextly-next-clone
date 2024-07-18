import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Trusted from "./components/Trusted"
import Benefits from "./components/Benefits"
import Highlight1 from "./components/Highlight"
import Highlight2 from "./components/Highlight2"
import Testimonials from "./components/Testimonials"
import Faq from "./components/Faq"
import Cta from "./components/cta"
import WatchVideo from "./components/WatchVideo"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <Trusted />
      <Benefits />
      <Highlight1 />
      <Highlight2 />
      <WatchVideo />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </div>
  )
}
