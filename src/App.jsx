import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Projects from './Projects'

function App() {
  return(
    <div className='bg-linear-180 from-[#185133] to-[#0d0d0b]'>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App
