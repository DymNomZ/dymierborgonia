import './Navbar.css'
import shamrock from './assets/shamrock.svg'

function Navbar(){
    console.log('Shamrock import:', shamrock);
    return(
        <div className="navbar">
            <img className="w-13 h-13 ml-5 mr-5 mt-5" alt="shamrock" src={shamrock}></img>
            <a href="#home" className="font-poppins font-regular text-xl text-white">Home</a>
            <a href="#about" className="font-poppins font-regular text-xl text-white">About</a>
            <a href="#projects" className="font-poppins font-regular text-xl text-white">Projects</a>
        </div>
    )
}

export default Navbar