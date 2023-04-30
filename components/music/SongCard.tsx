import {SongInterface} from "../../interfaces/song.interface";
import {Badge, Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";


export const getColorBage = (genre: string) => {
    switch (genre) {
        case "rock":
            return "primary";
        case "indie":
            return "secondary";
        case "pop":
            return "success";
        case "kpop":
            return "danger";
        case "rap":
            return "warning";
        case "r&b":
            return "info";
        case "reggaeton":
            return "light";
        case "trap":
            return "dark";
        default:
            return "primary";
    }
}
const SongCard = ({title, artist, genres}: SongInterface) => {

    return (
        <Card className={"mb-3"}>
            <Card.Body className={"d-flex flex-column"}>
                <Card.Title className={"fw-bold"}>{title}</Card.Title>
                <Card.Text>
                    {artist}
                    {" | "}
                    {
                        genres.map((genre, index) => {
                            return <Badge key={index} bg={getColorBage(genre)} className={"mx-1"}>{genre}</Badge>
                        })
                    }
                </Card.Text>

                <Button variant="outline-primary" size={"sm"} className={"align-self-end"}>Seleccionar</Button>
            </Card.Body>

        </Card>
    );
}

export {SongCard};