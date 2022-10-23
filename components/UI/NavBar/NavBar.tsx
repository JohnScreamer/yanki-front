import { FC } from "react";
import s from "./NavBar.module.scss";

type NavBarType = {
    setStatus: (status: boolean) => void;
    currentStatus: boolean;
};

const NavBar: FC<NavBarType> = ({ setStatus, currentStatus }) => {
    return (
        <nav className={s.wrapper}>
            <button
                onClick={() => setStatus(true)}
                className={currentStatus ? s.active : ""}
            >
                За сьогодні
            </button>
            <div className={s.decor}></div>
            <button
                onClick={() => setStatus(false)}
                className={!currentStatus ? s.active : ""}
            >
                За весь час
            </button>
        </nav>
    );
};

export default NavBar;
