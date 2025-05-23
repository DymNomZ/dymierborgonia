import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Projects from './Projects'

function App() {
  return (
    <div className='bg-linear-180 from-[#185133] to-[#0d0d0b]'>
      <Navbar />
      <main>
        <section id="home" className="min-h-screen pt-20"> {/* pt-20 to offset fixed navbar height */}
          <Home />
        </section>
        <section id="about" className="min-h-screen pt-20">
          <About />
        </section>
        <section id="projects" className="min-h-screen pt-20"> {/* Changed id to 'projects' */}
          <Projects />
        </section>
      </main>
    </div>
  );
}


export default App
