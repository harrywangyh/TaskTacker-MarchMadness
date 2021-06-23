import Button from "./Button.js";
const Header = (props) => {
    return (
        <header className = "header">
            <h1>{props.title}</h1>
            {props.show ?
            <Button color ='red' text = 'Close' onClick = {props.onToggle}/>
            : 
            <Button color ='green' text = 'Add' onClick = {props.onToggle}/>
            }   
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker - Tournament eddition'
}
export default Header
