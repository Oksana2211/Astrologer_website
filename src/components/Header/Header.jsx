import React from "react"
import Menu from "../Menu/Menu"
import style from "./style.module.scss"




export default function Header() {
    return (
        <header className={style.block}>
            <Menu></Menu>
        </header>
    )
} 