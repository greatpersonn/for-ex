import './Text.scss';

const Text = ({ styles, children }) => {
    return (
        <div className="container-text">
            <span className={styles}>{children}</span>
        </div>
    )
}

export default Text;