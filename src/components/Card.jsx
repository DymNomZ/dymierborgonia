import './Card.css'

function Card(props){
    return(
        <div className="card">
            <img src={props.image_source} alt={props.image_name} className="card-image"/>
            <div className="card-content">
                <h3>
                    {props.title}
                </h3>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Card