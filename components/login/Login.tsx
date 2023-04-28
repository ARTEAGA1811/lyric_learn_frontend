import Head from "next/head";
import st from "../../styles/custom.module.css";
import {Dispatch, SetStateAction} from "react";
import {LoginForm} from "./LoginForm";

export default function Login(props: { setEstaLogeado: Dispatch<SetStateAction<boolean>> }) {
    return (
        <div>
            <Head>
                <title>{"Login"}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>

            <div className={st.contenedor}>
                <div className={st.parte_izq + " p-3"}>
                    <h1 className={"text-primary fs-1 fw-bolder"}>Lyrics Learning</h1>
                    <p className={"fs-4 text-dark text-center"}>Aprende inglés con tus canciones favoritas</p>
                </div>
                <div className={" mx-5 px-5"}>
                    <LoginForm/>
                </div>
            </div>
        </div>

    );
}