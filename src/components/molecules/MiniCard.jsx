import './MiniCard.scss';

const MiniCard = ({ size, children }) => {
    return (
        <div className="container-gradient">
            <div className={`container-minicard ${size}`}>
                {children}
            </div>
        </div>
    )
}

export default MiniCard;