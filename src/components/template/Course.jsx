import SideButton from '../atoms/SideButton';
import TextHeader from '../atoms/TextHeader';
import List from '../molecules/List';

import './Course.scss';

const contentList = [
    { num: 1, text: "Вы хотите вкладывать свои средства с умом" },
    { num: 2, text: "Вы устали жить лишь на одну зарплату" },
    { num: 3, text: "Хотите независимости и свободы" },
    { num: 4, text: "Устали терять деньги с мошенниками" },
    { num: 5, text: "Хотите воплощения в жизнь своих желаний" },
]

const Course = () => {
    return (
        <div className="container-course">
            <TextHeader styles={"m bold center font-g blue-header"}>Этот курс подойдет вам, если:</TextHeader>
            <div className="container-content">
                <img src={require('../../assets/img/trader.png')} alt="" />
                <List content={contentList} />
                <SideButton name={"Подать заявку"} />                
            </div>
            <div className="course-spot_blue"></div>
            <div className="course-spot_green"></div>
        </div>
    );
}

export default Course;