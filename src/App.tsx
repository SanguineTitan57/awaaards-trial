import Hero from "./components.tsx/hero"
import About from "./components.tsx/about"
import Navbar from "./components.tsx/Navbar"
import Features from "./components.tsx/Features"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  )
}

export default App