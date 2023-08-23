import Course from "../template/Course";
import SubHeader from "../template/SubHeader";

const Main = () => {
    return (
        <main>
            <div className="container-main">
                <SubHeader />
                <Course />
            </div>
        </main>
    );
}

export default Main;