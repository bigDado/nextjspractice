interface FlatButtonProps {
    text: string
    onClick?: () => any
}

function FlatButton ({
    text,
    onClick
}: FlatButtonProps) {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default FlatButton