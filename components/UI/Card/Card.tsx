import Image from "next/image";
import { FC } from "react";
import s from "./Card.module.scss";

type CardType = {
    img: string;
    title: string;
    num: number;
};

const Card: FC<CardType> = ({ img, num, title }) => {
    return (
        <li className={s.wrapper}>
            <Image width={200} height={200} src={img} />
            <h2>{title}</h2>
            <b>{num}</b>
        </li>
    );
};

export default Card;
