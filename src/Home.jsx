import Button from './components/Button.jsx'
import './Home.css'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import instagram from './assets/instagram.svg'
import email from './assets/email.svg'

function Home(){
    return(
        <div className="text-center">
            <h1 className='mt-25 text-center text-[#a58f64] text-6xl font-bold'>JOHN DYMIER BORGONIA</h1>
            <h3 className='text-xl mt-15 font-poppins font-regular text-center text-white'>
                Hello and welcome!<br/>
                I build mobile applications and fun desktop games.
            </h3>
            <Button/>
            <Accounts/>
        </div>
    )
}

function Accounts(){
    return(
        <div className="flex justify-center items-center space-x-6 py-15">
            <a className="account-link" href="https://github.com/DymNomZ">
                <img className="w-13 h-13" src={github} alt="github"/>
            </a>
            <a className="account-link-square" href="https://www.linkedin.com/in/dymierborgonia/">
                <img className="w-13 h-13" src={linkedin} alt="linkedin"/>
            </a>
            <a className="account-link-square" href="https://www.instagram.com/dymnomz/">
                <img className="w-13 h-13" src={instagram} alt="instagram"/>
            </a>
            <a className="account-link" href="mailto:dymierborgonia@gmail.com">
                <img className="w-13 h-13" src={email} alt="email"/>
            </a>
        </div>
    )
}

export default Home