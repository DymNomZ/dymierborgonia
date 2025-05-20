import './Projects.css'
import Card from './components/Card'
import { card_image_names, card_titles, card_descriptions } from './variables'
import CardGrid from './components/CardGrid'

function Projects(){

    const cardItems = card_titles.map((title, index) => (
        <Card
            key={card_titles[index] + index}
            image_source=""
            image_name={card_image_names[index]}
            title={card_titles[index]}
            description={card_descriptions[index]}
        />
    ));

    return(
        <div className="projects">
            <h3>View Full Project Archive -{'>'}</h3>
            <CardGrid items={cardItems}/>
            <p>
                Designed in Canva and coded in Visual Studio Code.<br/>
                Built using React and Tailwind CSS. Poppins typeface for all text.<br/>
                Made by yours truly.
            </p>
        </div>
    )
}

export default Projects