
const Button = ({color, text, onClick}) => {
    return (
        <div>
            <button onClick = {onClick}
            style = {{color}}
            className = "btn"
            >
            {text}
            </button>
        </div>
    )
} 

export default Button
