import { configureStore } from "@reduxjs/toolkit";
import Main from "./Slice/Main";

export const store = configureStore({
    reducer: {
        option: Main,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
