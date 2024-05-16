import React from 'react';
import style from './style.module.scss'
import horoscope from "../../img/horoscope.png"
import card1 from "../../img/Prognostics1.jpg";
import card2 from "../../img/Prognostics2.jpg";
import card3 from "../../img/Prognostics3.jpg";
import card4 from "../../img/Prognostics4.jpg";
import card5 from "../../img/Prognostics5.jpg";
import card6 from "../../img/Prognostics6.jpg";
import card7 from "../../img/Prognostics7.jpg";
import card8 from "../../img/Prognostics8.jpg";
import card9 from "../../img/Prognostics9.jpg";
import card10 from "../../img/Prognostics10.jpg";



export default function Prognostics() {
    return (
        <section className={style.conteuner}>
            <div className={style.conteuner__text}>
                <img className={style.conteuner__icon} src={horoscope} alt='Иконка гороскоп'></img>
                <h1 className={style.conteuner__text_header}>Прогностика</h1>
                <p className={style.conteuner__text_content}>Это прогноз основных тенденций года, начиная с вашего дня рождения.<br></br>Вы получите понимание о том, как пройдет год. </p>
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
                        <div class="carousel-item">
                            <img src={card6} className={style.conteuner__card} alt="Кармическая задача"></img>
                        </div>
                        <div class="carousel-item">
                            <img src={card7} className={style.conteuner__card} alt="Кармическая задача"></img>
                        </div>
                        <div class="carousel-item">
                            <img src={card8} className={style.conteuner__card} alt="Кармическая задача"></img>
                        </div>
                        <div class="carousel-item">
                            <img src={card9} className={style.conteuner__card} alt="Кармическая задача"></img>
                        </div>
                        <div class="carousel-item">
                            <img src={card10} className={style.conteuner__card} alt="Кармическая задача"></img>
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
