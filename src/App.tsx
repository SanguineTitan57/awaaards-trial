import Hero from "./components.tsx/hero"
import About from "./components.tsx/about"
import Navbar from "./components.tsx/Navbar"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App