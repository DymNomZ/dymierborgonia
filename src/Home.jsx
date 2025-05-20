import Button from './components/Button.jsx'
import './Home.css'

function Home(){
    return(
        <div className="home">
            <h1>JOHN DYMIER BORGONIA</h1>
            <h3>
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
        <div className="accounts">
            <a href="https://github.com/DymNomZ">
                <img alt="github"/>
            </a>
            <a href="https://www.linkedin.com/in/dymierborgonia/">
                <img alt="linkedin"/>
            </a>
            <a href="https://www.instagram.com/dymnomz/">
                <img alt="instagram"/>
            </a>
            <a href="mailto:dymierborgonia@gmail.com">
                <img alt="mail"/>
            </a>
        </div>
    )
}

export default Home