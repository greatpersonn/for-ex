import TextHeader from "../atoms/TextHeader";
import Text from "../atoms/Text";

import AvatarTrader from '../../assets/img/avatar.png';
import FirstClient from '../../assets/img/client_01.png';
import SecondClient from '../../assets/img/client_02.png';
import ThirdClient from '../../assets/img/client_03.png';

import './Feedback.scss';

const contentFeedbacks = [
    { avatar: FirstClient, author_name: "Давид, 31 год.", text: 'Наконец закончил весь цикл уроков и вчера вывел первые деньги. Стратегия «Трииндейца» просто космос! Спасибо, Алексей, за такой подробный материал, а главное —простой.***', author: 'client' },
    { avatar: AvatarTrader, author_name: "Андрей Мовчан.", text: 'Давид, всегда рад помочь! Надеюсь, цифры на вашем счете вас полностью устроили. Эта стратегия была создана группой авторитетных аналитиков, поэтому ее надежность давно доказана. Буду рад вам помочь, если появятся вопросы!', author: 'trader' },
    { avatar: SecondClient, author_name: "Аснат, 27 лет.", text: 'Доброго времени суток! Ваша история успеха меня очень вдохновила. Торгую уже две недели по вашим стратегиям — ни одного ошибочного решения. Зато каждый день наблюдаю, как растут цифры на счете. Спасибо!***', author: 'client' },
    { avatar: AvatarTrader, author_name: "Андрей Мовчан.", text: 'Аснат, и вам хорошего дня! Я специально подбирал стратегии с балансом рисков и выгоды, поэтому они всегда выходят в плюс. Если я вас вдохновил, значит, добился своей главной цели. Идите к мечте прямо, не сворачивая!', author: 'trader' },
    { avatar: ThirdClient, author_name: "Шапиро Эстэр, 29 лет.", text: 'Стратегия «Соковыжималка», наверное, лучшая из ваших! Не думала, что позволю себе уйти с работы, но уже готова к этому. Профита от торговли явно хватит на всю семью, и смогу даже откладывать. Спасибо, Алексей.***', author: 'client' },
    { avatar: AvatarTrader, author_name: "Андрей Мовчан.", text: 'Ирина, приятно слышать такие слова! У каждой из стратегий есть свои ярые поклонники, но «Соковыжималка», по моим наблюдениям, входит в топ-5. А вот копить я бы не рекомендовал — лучше инвестируйте. Обращайтесь, подскажу, как лучше это сделать', author: 'trader' },
]

const FeedbackClient = ({ avatar, author_name, text_feedback }) => {
    return (
        <div className="container-client_feedback">
            <div className="wrapper-avatar" style={{ backgroundImage: `url(${avatar})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
            <div class="wrapper">
                <div className="message">
                    <Text styles={"s medium left line-height-125 font-g white"}>{author_name}</Text>
                    <Text styles={"s medium left line-height-125 font-g white"}>{text_feedback}</Text>
                </div>
            </div>
        </div>
    );
}

const FeedbackAuthor = ({ avatar, author_name, text_feedback }) => {
    return (
        <div className="container-author_feedback">
            <div class="wrapper">
                <div className="message">
                    <Text styles={"s medium left line-height-125 font-g white"}>{author_name}</Text>
                    <Text styles={"s medium left line-height-125 font-g white"}>{text_feedback}</Text>
                </div>
            </div>
            <div className="wrapper-avatar" style={{ backgroundImage: `url(${avatar})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        </div>
    );
}

const Feedback = () => {
    return (
        <div className="container-feedback">
            <TextHeader styles={"m bold center font-g darkblue-header"}>Мнения первых участников о курсе</TextHeader>
            {
                contentFeedbacks.map((feedback, id) => (
                    feedback.author === 'client' ?
                        <FeedbackClient key={id} avatar={feedback.avatar} author_name={feedback.author_name} text_feedback={feedback.text} />
                        :
                        <FeedbackAuthor key={id} avatar={feedback.avatar} author_name={feedback.author_name} text_feedback={feedback.text} />
                ))
            }
            <Text styles={"s regular left line-height-125 font-g grey"}>*** Все результаты индивидуальны и зависят от способностей участника</Text>
        </div>
    );
}

export default Feedback;