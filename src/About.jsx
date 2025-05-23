import './About.css'
import ImageGrid from './components/ImageGrid'
import {svgs} from './variables'

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
            <h1 className='text-[#a58f64] text-5xl text-center font-bold'>Technologies</h1>
            <div className="flex justify-center items-center space-x-35 mt-10">
                <h3 className='text-xl mt-5 font-poppins font-regular text-center text-white'>Mobile</h3>
                <h3 className='text-xl mt-5 font-poppins font-regular text-center text-white'>Desktop</h3>
                <h3 className='text-xl mt-5 font-poppins font-regular text-center text-white'>Web</h3>
            </div>
            <ImageGrid items={svgs}/>
        </div>
    )
}

function Description(){
    return(
        <div className="description">
            <p className='mb-8 text-justify font-poppins text-lg text-[#a58f64]'>
                I am a third-year <span className='mb-8 text-justify font-poppins text-lg text-white'>
                    Computer Science</span> student at <span className='mb-8 text-justify font-poppins text-lg text-white'>
                    Cebu Institute of Technology - University</span>. 
                The idea that a computer is composed of bits that can be manipulated gave me a sense of 
                freedom, which inspired me to pursue my degree and build simple yet practical applications.
            </p>
            <p className='mb-8 text-justify font-poppins text-lg text-[#a58f64]'>
                In the past, I had the opportunity to work with <a className='mb-8 text-justify 
                font-poppins text-lg text-white hover:text-[#ecd0a0] transition-colors 
                duration-200 ease-in-out' href='https://www.cenixys.com/'>CeniXys</a> and 
                gained experience building mobile applications for individuals and small businesses, 
                generally for the Android platform. I also contributed to developing 2D video games 
                written in Java as capstone projects.
            </p>
            <p className='mb-8 text-justify font-poppins text-lg text-[#a58f64]'>
                I am currently honing my skillset in web development, specifically with industry-preferred 
                technologies like React and Tailwind CSS, to become well-versed in the field. 
                In my spare time, I build fun programs like Discord bots and binge-watch <span 
                className='mb-8 text-justify font-poppins text-lg text-white'>Black Mirror</span> with 
                my girlfriend.
            </p>
            <p className='mb-8 text-justify font-poppins text-lg text-[#a58f64]'>
                I look forward to building software that makes a difference, and I am eager to expand 
                my network, seek new opportunities, and further develop my skills. 
            </p>
        </div>
    )
}

export default About