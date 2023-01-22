import { RootState } from "../../Redux/store";

export const getBurgerStatus = (state: RootState) =>
    state.common.isBurgerActive;
