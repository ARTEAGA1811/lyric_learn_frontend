import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import {loginUser} from "../../integrations/auth";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPass(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, pass);

        // const token = await loginUser(email, pass);
        // if(token){
        //     alert("Bienvenido")
        // } else {
        //     alert("Datos incorrectos")
        // }

        //Redireccionar a la página de home
        window.location.href = "/";
    }


    const handleRegister = () => {
        window.location.href = "/register";
    }
    return (
        <div>


            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu correo electrónico"
                                  onChange={handleEmail}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingresa tu contraseña"
                                  onChange={handlePass}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordarme"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ingresar
                </Button>
            </Form>
            <Button variant="success mt-3" type="button" onClick={handleRegister}>Crear una cuenta</Button>
        </div>
    )
}

export {LoginForm}