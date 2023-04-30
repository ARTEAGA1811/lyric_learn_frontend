import React, {ReactNode} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from "react-bootstrap/Nav";
import {NavBarContainer} from "./navbar/NavBarContainer";
import st from "../styles/custom.module.css";

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({children, title = 'This is the default title'}: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <header className={st.stickyTop}>
            <NavBarContainer/>
        </header>
        {children}
    </div>
)

export default Layout
