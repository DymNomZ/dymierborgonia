import './Projects.css'
import Card from './components/Card'
import { svgs, card_image_names, card_titles, card_descriptions } from './variables'
import CardGrid from './components/CardGrid'

function Projects(){

    const cardItems = card_titles.map((title, index) => (
        <Card
            key={card_titles[index] + index}
            image_source={svgs[index]}
            image_name={card_image_names[index]}
            title={card_titles[index]}
            description={card_descriptions[index]}
        />
    ));

    return(
        <div className="projects">
            <h3 className='text-xl mt-5 font-poppins font-regular text-center text-white'>
                View Full Project Archive -{'>'}</h3>
            <CardGrid items={cardItems}/>
            <p className='text-[#737373] pb-13 font-poppins font-regular'>
                Designed in <span className='text-[#a6a6a6]'>Canva</span> and coded in 
                Designed in <span className='text-[#a6a6a6]'>Visual Studio Code</span>.<br/>
                Built using <span className='text-[#a6a6a6]'>React</span> and <span 
                className='text-[#a6a6a6]'>Tailwind CSS</span>. Used the <span 
                className='text-[#a6a6a6]'>Poppins</span> typeface for all text.<br/>
                Made by yours truly.
            </p>
        </div>
    )
}

export default Projects