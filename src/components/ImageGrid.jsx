import './ImageGrid.css'

function ImageGrid(props){
    return(
        <div class="image_grid">
            {props.items.map((item) => (
                <img src="" alt={item}/>
            ))}
        </div>
    )
}

export default ImageGrid