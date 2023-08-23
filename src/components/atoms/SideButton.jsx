import Text from './Text';

import './SideButton.scss';

const SideButton = ({ size, action, name }) => {
    return (
        <div className={`container-sidebutton + ${size}`}>
            <button onClick={action}>
                <Text styles={"xl semibold font-g center white"}>{name}</Text>    
            </button>
        </div>
    );
}

export default SideButton;