import TextHeader from "../atoms/TextHeader";
import MiniArticle from "../molecules/MiniArticle";
import Avatar from "../atoms/Avatar";
import Text from "../atoms/Text";

import './About.scss';

const About = () => {
    return (
        <div className="container-about">
            <TextHeader styles={"m bold center font-g white-header"}>Обо мне: цифры и факты</TextHeader>
            <div className="about-container_content">
                <MiniArticle>
                    <Text styles={"s bold font-g left darkblue"}>
                        Мне 55 лет<br></br>
                        Инженер по образованию<br></br>
                        Опыт в торговле — 27 лет<br></br>
                        Средний ежемесячный профит за последний год: 23 400 долларов США<br></br>
                        Моя собственность: автомобили Bentley и Lexus, квартира 167 м2 в центре Москвы, загородный дом<br></br>
                        Общее состояние: более 4,2 млн долларов<br></br>
                        Я осуществил свои мечты. Теперь у меня достаточно свободного времени, чтобы помочь в этом вам<br></br>
                        Всегда ваш, Андрей Мовчан<br></br>
                    </Text>
                </MiniArticle>
                <div className="content-avatar">
                    <Avatar styles={"trader m"} />
                </div>
            </div>
        </div>
    );
}

export default About;