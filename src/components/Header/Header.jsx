import React from "react"
import Menu from "../Menu/Menu"
import style from "./style.module.scss"
import photo from '../../img/photo.jpg'




export default function Header() {
    return (
        <header className={style.block}>
            <Menu></Menu>
            <img className={style.block__photo} src={photo} alt="Основное фото" />
        </header>
    )
} 