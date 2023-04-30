import {Sidebar} from "./Sidebar";
import st from "../../styles/custom.module.css";
import {Lyrics} from "./Lyrics";

const LearningContainer = () => {


    return (
        <main className={""}>
            <div className={st.home_sidebar}>
                <Sidebar/>
            </div>
            <div className={"px-3 " + st.home_lyrics}>
                <Lyrics/>
            </div>

        </main>
    )
}
export {LearningContainer};