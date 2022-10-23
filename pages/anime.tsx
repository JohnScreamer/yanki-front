import Link from "next/link";
import { FC } from "react";

type animeType = {};

const anime: FC<animeType> = () => {
    return (
        <div>
            <span>annime</span>
            <Link href="/">main</Link>
        </div>
    );
};

export default anime;
