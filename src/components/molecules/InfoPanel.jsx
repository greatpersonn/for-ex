import './InfoPanel.scss';

const InfoPanel = ({ children }) => {
    return (
        <div className="container-infopanel">
            {children}
        </div>
    );
}

export default InfoPanel;