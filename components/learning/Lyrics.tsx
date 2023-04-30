import {fakeLyrics, fakeSong2} from "../../utils/sample-song";
import {InfoLyricsCard} from "../music/InfoLyricsCard";
import Button from "react-bootstrap/Button";

const Lyrics = () => {
    const getTooManyParragraphs = () => {
        let parragraphs = "bla blab lab  ";
        for (let i = 0; i < 9; i++) {
            parragraphs += parragraphs;
        }
        return parragraphs;
    }
    return (
        <div className={"text-center mt-3"}>
            <InfoLyricsCard {...fakeSong2}/>
            <div className={"d-flex justify-content-start gap-3"}>
                <Button variant={"primary"} className={"mt-3"}>Agregar vocabulario</Button>
                <Button variant={"info"} className={"mt-3"}>Mostrar traducciones</Button>

            </div>
            <div className={"mt-3 fs-4"}>

                {
                    fakeLyrics.map((parragraph, index) => {
                        return (
                            <p key={index}>{parragraph}</p>
                        )
                    })
                }
            </div>
        </div>

    )
        ;
}

export {Lyrics}