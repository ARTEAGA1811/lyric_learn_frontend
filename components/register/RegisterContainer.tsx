import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import st from "../../styles/custom.module.css";
const RegisterContainer = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registrando usuario");
        //Redireccionar a la página de login
        window.location.href = "/login";
    }
    return (
        <div className={st.container_register + " vh-100 vw-100"}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu correo" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Nombre de usuario</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tu nombre de usuario" />
                        <Form.Text className="text-muted">
                            Debe tener entre 5 y 20 caracteres, no puede contener espacios
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                        <Form.Text className="text-muted">
                            Debe tener entre 8 y 20 caracteres, al menos una mayúscula, una minúscula y un número
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Crear mi cuenta
                    </Button>
                </Form>
        </div>
    )
}

export {RegisterContainer}