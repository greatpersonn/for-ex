import Text from "../atoms/Text";

import './List.scss';

const List = ({ content }) => {
    return (
        <div className="container-list">
            {
                content.map((item, id) => (
                    <div className="wrapper-list_item" key={id}>
                        <div className="item-num">
                            <Text styles={"xxl font-t left white"}>{item.num}</Text>
                        </div>
                        <Text styles={"m medium font-g left list-color"}>{item.text}</Text>
                    </div>
                ))
            }
        </div>
    );
}

export default List;