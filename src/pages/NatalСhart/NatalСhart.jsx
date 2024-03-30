import React from 'react';
import style from './style.module.scss'
import card1 from "../../img/Card1.png";
import card2 from "../../img/Card2.png";
import card3 from "../../img/Card3.png";
import card4 from "../../img/Card4.png";
import card5 from "../../img/Card5.png";
import horoscope from "../../img/horoscope.png"



export default function NatalChart() {
    return (
        <section className={style.conteuner}>
            <div className={style.conteuner__text}>
                <img className={style.conteuner__icon} src={horoscope} alt='Иконка гороскоп'></img>
                <h1 className={style.conteuner__text_header}>Разбор Натальной карты</h1>
                <p className={style.conteuner__text_content}>Натальная карта (НК) – это снимок неба на момент нашего рождения, то есть, где располагались планеты и как взаимодействовали меж дусобой.</p>
            </div>
            <div>
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={card1} className={style.conteuner__card} alt="Полный разбор личности"></img>
                        </div>
                        <div class="carousel-item">
                            <img src={card2} className={style.conteuner__card} alt="Финансовый код"></img>
                        </div>
                        <div class="carousel-item">
                            <img src={card3} className={style.conteuner__card} alt="Любовный гороскоп"></img>
                        </div>
                        <div class="carousel-item">
                            <img src={card4} className={style.conteuner__card} alt="Синастрия"></img>
                        </div>
                        <div class="carousel-item">
                            <img src={card5} className={style.conteuner__card} alt="Кармическая задача"></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
