import Text from '../atoms/Text';
import './Stepper.scss';

import { ReactComponent as Arrow } from '../../assets/img/arrow.svg';

const Stepper = ({ content }) => {
    return (
        <div className="container-stepper">
            {
                content.map((step, id) => (
                    <div className="wrapper-step" key={id}>
                        <div className='wrapper-ui_step'>
                            <div className="stepper-dotted_wrapper">
                                <div className={`stepper_content ${step.state}`}>
                                    <Text styles={step.state == "active" ? "s semibold font-g center white" : "s semibold font-g center darkblue"}>{step.header}</Text>
                                </div>
                            </div>
                            {
                                1 != content.length - id &&
                                <Arrow />
                            }
                        </div>
                        <div className={`wrapper-title_step ${"title-text_" + id}`} key={id}>
                            <Text styles={"s regular font-g center white"}>{step.text}</Text>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Stepper;