import './CardGrid.css'

function CardGrid(props){
    return(
        <div class="card_grid">
            {props.items.map((item) => (
                item
            ))}
        </div>
    )
}

export default CardGrid