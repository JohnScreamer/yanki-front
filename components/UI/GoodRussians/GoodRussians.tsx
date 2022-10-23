import Image from "next/image";
import { FC } from "react";
import s from "./GoodRussians.module.scss";
import shit from "./../../../public/img/rus.jpg";
type GoodRussiansType = {
    totalNum: number;
    todayNum: number;
    warDay: number;
};

const GoodRussians: FC<GoodRussiansType> = ({ todayNum, totalNum, warDay }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.gradient}>
                <h1>
                    Сьогодні <b>{todayNum} </b> окупантів стали "хорошими
                    росіянами".
                </h1>
                <h3>
                    Загальна кількість <b>{totalNum}</b>.
                </h3>
                <h4>
                    Сьогодні <b>{warDay}</b> день від початку війни.
                </h4>
            </div>
        </div>
    );
};

export default GoodRussians;
