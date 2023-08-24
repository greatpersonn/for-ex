import Text from '../atoms/Text';
import TextHeader from '../atoms/TextHeader';
import MiniArticle from '../molecules/MiniArticle';

import './About.scss';

const About = () => {
    return (
        <div className="container-about">
            <TextHeader styles={"m medium center font-g white-header"}>Обо мне: цифры и факты</TextHeader>
            <div className="about-content">
                <MiniArticle>
                    <Text styles={"s bold font-g left line-height-125 darkblue_02"}>
                        Мне 55 лет<br></br>
                        Инженер по образованию<br></br>
                        Опыт в торговле — 27 лет<br></br>
                        Средний ежемесячный профит за последний год: 23 400 долларов США<br></br>
                        Моя собственность: автомобили Bentley и Lexus, квартира 167 м2 в центре Москвы, загородный дом<br></br>
                        Общее состояние: более 4,2 млн долларов<br></br>
                        Я осуществил свои мечты. Теперь у меня достаточно свободного времени, чтобы помочь в этом вам<br></br>
                        Всегда ваш, Андрей Мовчан
                    </Text>
                </MiniArticle>
                <div className="content-avatar">

                </div>
            </div>
        </div>
    );
}

export default About;