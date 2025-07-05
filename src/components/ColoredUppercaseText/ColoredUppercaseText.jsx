import './ColoredUppercaseText.css'

const ColoredUppercaseText = ({description, color = 'blue'}) => {
    return (
        <p style={{ color }}>{description.toUpperCase()}</p>
    )
}

export default ColoredUppercaseText