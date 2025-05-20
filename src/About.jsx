import './About.css'
import ImageGrid from './components/ImageGrid'
import {image_names} from './variables'

function About(){
    return(
        <div className="about">
            <Technologies/>
            <Description/>
        </div>
    )
}

function Technologies(){

    return(
        <div className="technologies">
            <h1>Technologies</h1>
            <div className="platforms">
                <h3>Mobile</h3>
                <h3>Desktop</h3>
                <h3>Web</h3>
            </div>
            <ImageGrid items={image_names}/>
        </div>
    )
}

function Description(){
    return(
        <div className="description">
            <p>
                I am a third-year Computer Science student at Cebu Institute of Technology - University. 
                The idea that a computer is composed of bits that can be manipulated gave me a sense of 
                freedom, which inspired me to pursue my degree and build simple yet practical applications.
            </p>
            <p>
                In the past, I had the opportunity to work with CeniXys and gained experience building 
                mobile applications for individuals and small businesses, generally for the Android 
                platform. I also contributed to developing 2D video games written in Java as capstone 
                projects.
            </p>
            <p>
                I am currently honing my skillset in web development, specifically with industry-preferred 
                technologies like React and Tailwind CSS, to become well-versed in the field. 
                In my spare time, I build fun programs like Discord bots and binge-watch Black Mirror 
                with my girlfriend.
            </p>
            <p>
                I look forward to building software that makes a difference, and I am eager to expand 
                my network, seek new opportunities, and further develop my skills. 
            </p>
        </div>
    )
}

export default About