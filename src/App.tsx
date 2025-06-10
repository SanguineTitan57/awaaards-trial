import Hero from "./components.tsx/hero"
import About from "./components.tsx/about"
import Navbar from "./components.tsx/Navbar"
import Features from "./components.tsx/Features"
import Story from "./components.tsx/Story";
import Contact from "./components.tsx/Contact";
import Footer from "./components.tsx/Footer";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App