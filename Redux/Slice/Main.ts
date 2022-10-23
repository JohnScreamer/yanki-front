import {
    DataSVG,
    ILatestResponse,
    statisticsType,
} from "./../../Types/apiResponse";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dataType {
    value: number;
    svg: string;
    name: string;
    tittle: string;
}

interface IInitialState {
    totalStat: statisticsType | null;
    todayStat: statisticsType | null;
    daysFromStart: number | null;
    SVGTitleList: DataSVG | null;
    data: any;
    arr: Array<dataType>;
}
const initialState: IInitialState = {
    daysFromStart: null,
    todayStat: null,
    totalStat: null,
    SVGTitleList: null,
    data: {},
    arr: [],
};

const Main = createSlice({
    initialState,
    name: "main",
    reducers: {
        setStatsData: (state, action: PayloadAction<ILatestResponse>) => {
            state.todayStat = action.payload.data.increase;
            state.totalStat = action.payload.data.stats;
            state.daysFromStart = action.payload.data.day;
        },
        setSVGData: (state, action: PayloadAction<DataSVG>) => {
            state.SVGTitleList = action.payload;
        },
    },
});

export default Main.reducer;
export const { setSVGData, setStatsData } = Main.actions;
