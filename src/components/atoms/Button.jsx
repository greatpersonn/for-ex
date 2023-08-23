import './Button.scss';

const Button = ({ size, name, action }) => {
    return (
        <div className="container-button">
            <button className={size} onClick={action}>{name}</button>
        </div>
    )
}

export default Button;