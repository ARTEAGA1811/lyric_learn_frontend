import {useState} from "react";
import Button from "react-bootstrap/Button";
import {SongInterface} from "../../interfaces/song.interface";
import {SongCard} from "./SongCard";
import {FooterM} from "../FooterM";

const MusicListContainer = () => {
    const [thereIsMusicList, setThereIsMusicList] = useState(true);


    const fakeSong: SongInterface = {
        title: "I was just a kid",
        artist: "Nothing but thieves",
        genres: ["rock", "indie"],
    }
    const fakeSong2: SongInterface = {
        title: "Set me free",
        artist: "Twice",
        genres: ["kpop", "pop"],
    }

    const listFakeSongs: SongInterface[] = [];
    listFakeSongs.push(fakeSong);
    listFakeSongs.push(fakeSong2);

    listFakeSongs.push(fakeSong);
    listFakeSongs.push(fakeSong2);

    listFakeSongs.push(fakeSong);
    listFakeSongs.push(fakeSong2);
    listFakeSongs.push(fakeSong);
    listFakeSongs.push(fakeSong2);



    if (thereIsMusicList) {
        return (
            <div className={"overflow-auto justify-content-start" }>
                <h2 className={"text-center mb-4"}>Mi lista</h2>
                {
                    listFakeSongs.map((song, index) => {
                        return <SongCard key={index} {...song}/>
                    })
                }
                <FooterM/>
            </div>
        )
    }


    // En caso que no haya configurado una lista de spotify.
    return (
        <div className={"h-100 container-fluid align-items-center text-center"}>
            <div className={"row align-items-center h-100"}>
                <div className={"col"}>
                    <h5 className={"mb-5 text-secondary"}>Agrega una playlist de spotify que tenga las canciones que
                        quieres usar para empezar a practicar.</h5>
                    <Button variant={"outline-primary"}>Agregar playlist</Button>
                </div>
            </div>


        </div>
    )
}

export {MusicListContainer};