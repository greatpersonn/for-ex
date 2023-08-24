import TextHeader from '../atoms/TextHeader';
import Text from '../atoms/Text';
import Form from '../organisms/Form';

import './Footer.scss';

const contentLeftPage = [
    "• Все остается по-прежнему",
    "• Денег больше не стало",
    "• Мечты остаются фантазией",
    "• Жизнь скучная, а работа рутинная",
    "• Вы пожалели, что закрыли страницу",
    "• Вернулись, но курс уже недоступен илипродается по реальной цене — 29 тысяч рублей."
]

const contentStayPage = [
    "• Вы изучили курс и узнали, что торговать на бирже реально",
    "• Применили знания и получили ощутимые результаты",
    "• Жизнь круто изменилась, вы можете позволить себе больше",
    "• Покупаете дом, переезжаете в новую квартиру, забираете автомобиль из салона",
    "• Довольны жизнью, имеете все, чего хотели, и ни от кого не зависите."
]

const Footer = () => {
    return (
        <footer>
            <div className="container-footer">
                <TextHeader styles={"l medium font-g center darkblue-header"}>Сомневаетесь?</TextHeader>
                <TextHeader styles={"l medium font-g center darkblue-header"}>Выберите свой вариант развития событий</TextHeader>
                <div className="footer-cards">
                    <div className="card left">
                        <TextHeader styles={"s bold font-g center red-header"}>Вы ушли со страницы</TextHeader>
                        <div className="card-content">
                            {
                                contentLeftPage.map((content, id) => (
                                    <Text styles={"m medium line-height-125 font-g darkblue"} key={id}>{content}</Text>
                                ))
                            }
                        </div>
                        <Text styles={"s bold line-height-125 font-g red"}>Не нравится этот вариант? Вы упустили возможность пройти курс бесплатно, а мечты всё откладываются на неопределенный срок.</Text>
                    </div>

                    <div className="card right">
                        <TextHeader styles={"s bold font-g center green-header"}>Вы получили курс</TextHeader>
                        <div className="card-content">
                            {
                                contentStayPage.map((content, id) => (
                                    <Text styles={"m medium line-height-125 font-g darkblue"}key={id}>{content}</Text>
                                ))
                            }
                        </div>
                        <Text styles={"s bold line-height-125 font-g green"}>Нравится этот вариант?  Вы счастливы и успешны, а все ваши цели и мечты воплотились в жизнь!</Text>
                    </div>
                </div>
                <Form />
            </div>
            <div className="red-spot"></div>
            <div className="green-spot"></div>
        </footer>
    );
}

export default Footer;