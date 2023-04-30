import {Badge, Card} from "react-bootstrap";
import {SongInterface} from "../../interfaces/song.interface";
import {info} from "next/dist/build/output/log";
import {getColorBage} from "./SongCard";

const InfoLyricsCard = (infoSong: SongInterface) => {
    return (
        <Card className={"bg-light"}>
            {/*<Card.Header as={"h5"}>{infoSong.title}</Card.Header>*/}
            <Card.Body className={"d-flex gap-5 "}>
                <Card.Img variant="bottom" src="https://i.scdn.co/image/ab6761610000e5eb8944c8aec8db82f35980b191"
                          alt={"img artist"} style={{width: '8rem'}}/>
                <div className={"d-flex flex-column justify-content-start"}>
                    <Card.Title as={"h3"} className={"text-primary"}>
                        {infoSong.title}
                    </Card.Title>
                    <Card.Text as={"h5"}>
                        {infoSong.artist}
                        {" | "}
                        {
                            infoSong.genres.map((genre, index) => {
                                return <Badge key={index} bg={getColorBage(genre)} className={"mx-1"}>{genre}</Badge>
                            })
                        }
                    </Card.Text>
                    <Card.Text>

                    </Card.Text>
                </div>

            </Card.Body>
        </Card>
    )
}

export {InfoLyricsCard};