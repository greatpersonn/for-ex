import './MiniArticle.scss';

const MiniArticle = ({ children }) => {
    return (
        <div className="container-miniarticle">
            {children}
        </div>
    );
}

export default MiniArticle;