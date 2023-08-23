import './TextHeader.scss';

const TextHeader = ({ styles, children }) => {
    return (
        <div className="container-text_header">
            <span className={styles}>{children}</span>
        </div>
    )
}

export default TextHeader;