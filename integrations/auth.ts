import axios, {AxiosError} from 'axios';

const URL_BASE = 'http://localhost:3002/auth';

const loginUser = async (email: string, password: string) => {
    try {
        const path = `/login`;
        const URL = `${URL_BASE}${path}`;
        const responseToken = await axios.post(URL, {email, password});
        return <string>responseToken.data;
    } catch (e) {
        console.log(e);

        if (!e.response) {
            console.log("Error conexión con el servidor");
            return null;
        }

        if (e.response.status === 403) {
            console.log("Credenciales incorrectas")
            return null;
        }
        console.log("Error al iniciar sesión")
        return null;

    }


    // if (responseToken.status !== 202) {
    //     console.log("Error al iniciar sesión")
    //     return null;
    // }


}

export {loginUser}