import Button from '../atoms/Button';
import TextHeader from '../atoms/TextHeader';
import Text from '../atoms/Text';
import Input from '../atoms/Input';

import useInput from "../../hooks/useInput";

import './Form.scss';

const Form = () => {
    const _userName = useInput('', true);
    const _userLastname = useInput('', true);
    const _userPhone = useInput('', true);
    const _userEmail = useInput('', true);

    return (
        <div className="container-form">
            <div className="form-wrapper">
                <div className="form-avatar"></div>
                <div className="form-content">
                    <div className="content-wrapper">
                        <div className="content-title">
                            <TextHeader styles={"l regular font-g italic left white-header"}>Успейте получить курс прямо сейчас бесплатно!</TextHeader>
                        </div>
                        <div className="content-field">
                            <Input name={'name'} type={"text"} inputId={"name-input"} holderTitle={"Имя"} symLength={128} inputObject={_userName} />
                            <Input name={'name'} type={"text"} inputId={"lastname-input"} holderTitle={"Фамилия"} symLength={128} inputObject={_userLastname} />
                            <Input name={'name'} type={"text"} inputId={"email-input"} holderTitle={"Email"} symLength={128} inputObject={_userEmail} />
                            <div className="field-number">
                                <input type="text" id='phone-input' className='phone-input' placeholder='50 753 26 25' {..._userPhone}/>
                                <label htmlFor="phone-input">
                                    <img src={require('../../assets/img/Flags.png')} alt="flagNum" />
                                    <Text styles={"s bold font-t left white"}>+380</Text>
                                </label>
                            </div>
                        </div>
                    </div>
                    <Button size={"large"} name={"Получить курс"} />
                </div>
            </div>
        </div>
    )
}

export default Form;