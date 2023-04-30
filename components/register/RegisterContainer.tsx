import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import st from "../../styles/custom.module.css";
import {useState} from "react";
import {registerUser} from "../../integrations/auth";
import {Alert, Card} from "react-bootstrap";
import Link from "next/link";

const RegisterContainer = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [userRegistered, setUserRegistered] = useState(false);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Registrando usuario");
        const responseServer = await registerUser({email, username, password});
        console.log(responseServer);


        if (responseServer.status === 201) {
            setUserRegistered(true);

        } else {
            setMessage(responseServer.error.message);
            setShowAlert(true);
        }
    }

    if (!userRegistered) {
        return (
            <div className={st.container_register + " vh-100 vw-100"}>
                <Alert variant={"danger"} show={showAlert} onClose={() => setShowAlert(false)}
                       dismissible>{message}</Alert>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico *</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu correo"
                                      onChange={handleEmailChange}
                                      required={true}

                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Nombre de usuario *</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tu nombre de usuario"
                                      onChange={handleUsernameChange}/>
                        <Form.Text className="text-muted">
                            Debe tener entre 5 y 20 caracteres, no puede contener espacios
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            Ingresa un correo válido
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña *</Form.Label>
                        <Form.Control type="password" placeholder="Ingresa tu contraseña"
                                      onChange={handlePasswordChange}
                                      required={true}
                        />
                        <Form.Text className="text-muted">
                            Debe tener entre 8 y 20 caracteres, al menos una mayúscula, una minúscula y un número
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Crear mi cuenta
                    </Button>
                </Form>

                <div>
                    <p>¿Ya tienes una cuenta?</p>
                    <Button variant="link" href="/login">Inicia sesión</Button>
                </div>
            </div>
        )
    }

    return (
        <div className={st.container_register + " vh-100 vw-100"}>
            <Card>
                <Card.Header as="h5">¡Bienvenido a Lyrics Learning! 😁</Card.Header>
                <Card.Body>
                    <Card.Title>Tu cuenta ha sido creada</Card.Title>
                    <Card.Text>
                        Ahora ya puedes ampliar tu vocabulario con las canciones que más te gustan 🙌 🎶🎶
                    </Card.Text>
                    <Card.Link href="/login" className={"btn btn-primary"}>Inicia sesión</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )

}

export {RegisterContainer}