import React from "react"
// import { Link } from 'react-router-dom';
import style from "./style.module.scss"
import wing from "../../img/wing.png"
import prognostication from '../../img/Прогностика.png'
import natalChart from '../../img/Натальная карта.png'
import tarot from "../../img/Таро.png"

export default function Home() {
    return (
        <section className={style.container}>

            <div className={style.content}>
                <div>
                    <h1 className={style.content__header}>О бренде</h1>
                    <p className={style.content__text}>Привет! Я Ensia, и я профессиональный астролог. Я пришла к астрологии 3 года назад, пытаясь понять себя и найти направление куда мне двигаться. Эта наука безумно затянула меня, и я начала самостоятельно изучать её, делать небольшие разборы для себя и своих близких. Но год назад я поняла, что хочу помогать большому числу людей искать ответы на свои вопросы и стала квалифицированным астрологом. Сейчас Ensia это бренд, который может помочь раскрыть тебя, указать на твои сильные и слабые стороны, понять, где себя реализовывать и развивать. В дополнение показать твои прогнозы на определенный срок - я могу выявить разные события года: благополучные дни для покупок, травмоопасные дни, также дни финансовых вложений и сдачей экзаменов, когда планировать важные события года, а в какие даты лучше отказаться от глобальных планов. Согласись, знать заранее где жизнь может подставить подножку и быть готовым к этому, звучит намного привлекательнее, ведь порой всё выходит из под контроля, когда так хочется держать жизнь в своих руках.</p>

                </div>
                <div>
                    <h2 className={style.content__header}>Как Ensia может раскрыть тебя?</h2>
                    <div className={style.content__columnText}>
                        <p className={style.content__text}><img className={style.content__text_wing} src={wing} alt="звезда" />Благодаря Ensia, ты сможешь полностью познать себя с разных сторон - это поможет добиться высокой самореализации и стремительно идти по карьерной лестнице. </p>
                        <p className={style.content__text}><img className={style.content__text_wing} src={wing} alt="звезда" />Сможешь понять восприятие тебя окружением и как именно произвести первое хорошее впечатление на людей. Это будет бонусом к построению отношений с мужчиной твоей мечты.</p>
                        <p className={style.content__text}><img className={style.content__text_wing} src={wing} alt="звезда" />И наконец, ты сможешь ответить на главный вопрос: «что мне делать дальше?»</p>
                    </div>
                </div>
            </div>

            <div className={style.container__cards}>
                <img className={style.container__cards_item} src={prognostication} alt="Раздел прогностика" />
                <img className={style.container__cards_item} src={natalChart} alt="Раздел прогностика" />
                <img className={style.container__cards_item} src={tarot} alt="Раздел прогностика" />
            </div>

        </section>
    )
}