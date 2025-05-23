import './Button.css'

function Button(){
    return(
        <a
        href="/Borgonia-John-Dymier-Resume.pdf"
        download="Borgonia-John-Dymier-Resume.pdf">
            <button className='pl-20 pr-20 pt-4 pb-4 mt-15 text-2xl'>
                Download CV
            </button>
        </a>   
    )
}

export default Button