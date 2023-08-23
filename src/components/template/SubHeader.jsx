import { ReactSVG } from "react-svg";

import Article from '../organisms/Article';
import Stepper from '../molecules/Stepper';
import MiniCard from "../molecules/MiniCard";
import Text from "../atoms/Text";

import Wallet from '../../assets/img/icon_profit.svg';
import Car from '../../assets/img/icon_car.svg';
import House from '../../assets/img/icon_flat.svg';
import Plane from '../../assets/img/icon_travelling.svg';
import ArrowBottom from '../../assets/img/arrow_to_bottom.svg';

import './SubHeader.scss';

const contentStepper = [
    { header: "Сегодня", state: "active", text: "Получите бесплатно консультацию менеджера" },
    { header: "Завтра", state: "default", text: "Ознакомьтесь с программой курса" },
    { header: "После завтра", state: "default", text: "Примените свои знания при нашем сопровождении" },
    { header: "Навсегда", state: "default", text: "Получите то, о чем мечтали" },
]

const SubHeader = () => {
    return (
        <div className="container-subheader">
            <div className="subheader-wrapper">
                <Article isDotted={true} headerStyles={"m bold center font-g darkblue-header"} headerText={"У вас есть мечта?"}>
                    <MiniCard size={"large"}>
                        <ReactSVG src={Wallet} />
                        <Text styles={"l bold font-g left darkblue"}>Сбережения растут без вашего участия</Text>
                    </MiniCard>

                    <MiniCard size={"large"}>
                        <ReactSVG src={House} />
                        <Text styles={"l bold font-g left darkblue"}>Собственная квартира без ипотеки</Text>

                    </MiniCard>

                    <MiniCard size={"large"}>
                        <ReactSVG src={Car} />
                        <Text styles={"l bold font-g left darkblue"}>Новый автомобиль</Text>

                    </MiniCard>

                    <MiniCard size={"large"}>
                        <ReactSVG src={Plane} />
                        <Text styles={"l bold font-g left darkblue"}>Путешествия несколько раз в год</Text>

                    </MiniCard>
                </Article>

                <ReactSVG src={ArrowBottom} />

                <Article isDotted={false} headerStyles={"m medium center font-g white-header"} headerText={"Сделайте ваши мечты реальностью прямо сейчас!"}>
                    <Text styles={"m bold font-g center white"}>Путь к их осуществлению состоит всего из четырех шагов:</Text>
                    <Stepper content={contentStepper} />
                </Article>
            </div>
        </div>
    );
}

export default SubHeader;