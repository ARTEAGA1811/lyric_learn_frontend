import {useState} from "react";
import Button from "react-bootstrap/Button";
import {SongInterface} from "../../interfaces/song.interface";
import {SongCard} from "../music/SongCard";
import {FooterM} from "../FooterM";
import {fakeSong, fakeSong2} from "../../utils/sample-song";

const Sidebar = () => {
    const [thereIsMusicList, setThereIsMusicList] = useState(true);




    const listFakeSongs: SongInterface[] = [];
    listFakeSongs.push(fakeSong);
    listFakeSongs.push(fakeSong2);
    listFakeSongs.push(fakeSong);
    listFakeSongs.push(fakeSong2);
    listFakeSongs.push(fakeSong);
    listFakeSongs.push(fakeSong2);





    if (thereIsMusicList) {
        return (
            <div className={"" }>
                <h2 className={"text-center mb-4"}>Mi lista</h2>
                {
                    listFakeSongs.map((song, index) => {
                        return <SongCard key={index} {...song}/>
                    })
                }
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

export {Sidebar};