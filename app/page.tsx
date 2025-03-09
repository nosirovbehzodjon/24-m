import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Teachers from "@/components/teachers"
import Alumni from "@/components/alumni"
import Faq from "@/components/faq"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Teachers />
        <Alumni />
        <Faq />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

