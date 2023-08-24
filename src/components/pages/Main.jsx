import About from "../template/About";
import Course from "../template/Course";
import Feedback from "../template/Feedback";
import SubHeader from "../template/SubHeader";

const Main = () => {
    return (
        <main>
            <div className="container-main">
                <SubHeader />
                <Course />
                <About />
                <Feedback />
            </div>
        </main>
    );
}

export default Main;