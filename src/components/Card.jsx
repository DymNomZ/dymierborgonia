import './Card.css'

function Card(props){
    return(
        <div className="card bg-linear-180 from-[#142017] to-[#0d0d0b]">
            <img src={props.image_source} alt={props.image_name} className="card-image"/>
            <div className="card-content">
                <h3 className='text-left text-white text-lg pb-4'>
                    {props.title}
                </h3>
                <p className='text-justify text-sm'>
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Card