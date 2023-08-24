import InfoPanel from '../molecules/InfoPanel';
import Text from '../atoms/Text';
import TextHeader from '../atoms/TextHeader';
import Button from '../atoms/Button';

import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="container-header">
                <div className="header-title">
                    <Text styles={"xxxl bold font-f center line-height-125 white"}>Андрей Mовчан</Text>
                    <Text styles={"l regular font-f center line-height-125 white"}>Представляет обучающий курс:</Text>
                </div>
                <div className="header-subtitle">
                    <TextHeader styles={"ss regular font-g italic center white-header"}>АНДРЕЙ МОВЧАН</TextHeader>
                    <div className="subtitle-wrapper">
                        <TextHeader styles={"sss regular font-g italic center white-header"}>ТРЕЙДЕР</TextHeader>
                        <TextHeader styles={"sss regular font-g italic center white-header"}>ЧАСТНЫЙ ИНВЕСТОР</TextHeader>
                        <TextHeader styles={"sss regular font-g italic center white-header"}>ФИНАНСОВЫЙ КОНСУЛЬТАНТ</TextHeader>
                    </div>
                </div>
                <InfoPanel>
                    <div className="wrapper-info">
                        <TextHeader styles={"l bold font-f center white-header"}>Торговля на бирже:</TextHeader>
                        <Text styles={"xl medium font-f center line-height-125 white"}>от первых результатов к большому капиталу</Text>
                    </div>
                    <Button size={"medium"} name={"Получить курс"} />
                </InfoPanel>
                <div className="trader-profile"></div>
            </div>
        </header>
    );
}

export default Header;