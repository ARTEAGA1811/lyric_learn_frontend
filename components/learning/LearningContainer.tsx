import {MusicListContainer} from "../music/MusicListContainer";

const LearningContainer = () => {
    const getTooManyParragraphs = () => {
        let parragraphs = "bla blab lab  ";
        for (let i = 0; i < 9; i++) {
            parragraphs += parragraphs;
        }
        return parragraphs;
    }

    return (
        <div className={""} >
            <main className={"container"} style={{position: "relative"}}>
                <div className={"row justify-content-end"}  >
                    <div className={"col-4 h-100  border-end position-fixed start-0 top-0 align-items-center inde"}>
                        <MusicListContainer/>
                    </div>
                    <div className={"col-8"}>
                        <h1>Letras</h1>
                        <p>
                            {getTooManyParragraphs()}
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}
export {LearningContainer};