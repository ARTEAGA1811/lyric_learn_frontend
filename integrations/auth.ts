import axios, {AxiosError} from 'axios';
import {RegisterInterface} from "../interfaces/user.interface";
import {ErrorResponse} from "../interfaces/error.interface";

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


const registerUser = async (user: RegisterInterface) => {
    try {
        const path = `/register`;
        const URL = `${URL_BASE}${path}`;
        const response = await axios.post(URL, user);
        return response.data;
    } catch (e) {
        console.log(e);

        if (e.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            return e.response.data as ErrorResponse;
        }


        const errorResponse: ErrorResponse = {
            status: 500,
            message: "Ha ocurrido un error inesperado"
        }
        return errorResponse;

    }
}

export {loginUser, registerUser}