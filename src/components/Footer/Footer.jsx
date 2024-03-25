import React from "react"
import style from "./style.module.scss"
import vector from "../../img/Vector.png"

export default function Footer() {
    return (
        <footer id="contacts" className={style.footer}>
            <img className={style.footer__vector} src={vector} alt="вектор" />
            <p className={style.footer__contacts}>Контактная информация</p>
        </footer>
    )
}