import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/UI/Card/Card";
import GoodRussians from "../components/UI/GoodRussians/GoodRussians";
import NavBar from "../components/UI/NavBar/NavBar";
import { ILatestResponse, SVGResponse } from "../Types/apiResponse";

export const getStaticProps = async () => {
    const responseStats = await fetch(
        "https://russianwarship.rip/api/v1/statistics/latest"
    );
    const dataStats = await responseStats.json();
    const responseSVGTitle = await fetch(
        "https://russianwarship.rip/api/v1/terms/ua"
    );
    const dataSVGTitle = await responseSVGTitle.json();

    if (!dataStats) {
        return {
            notFound: true,
        };
    }

    return {
        props: { dataStats, dataSVGTitle },
    };
};

type HomeType = {
    dataStats: ILatestResponse;
    dataSVGTitle: SVGResponse;
};
const Home: FC<HomeType> = ({ dataStats, dataSVGTitle }) => {
    const [isTodayStats, setTodayStat] = useState(false);
    const list = (
        Object.keys(dataStats.data.stats) as Array<
            keyof typeof dataStats.data.stats
        >
    ).map((el) => (
        <Card
            img={dataSVGTitle.data[el].icon as string}
            num={
                isTodayStats
                    ? dataStats.data.increase[el]
                    : dataStats.data.stats[el]
            }
            title={dataSVGTitle.data[el].title as string}
        />
    ));

    return (
        <>
            <Layout name="MobikDataBase">
                <GoodRussians
                    todayNum={dataStats.data.increase.personnel_units}
                    totalNum={dataStats.data.stats.personnel_units}
                    warDay={dataStats.data.day}
                />
                <NavBar setStatus={setTodayStat} currentStatus={isTodayStats} />
                <ul>{list}</ul>
            </Layout>
        </>
    );
};

export default Home;
