import { DARKTHEME, LIGHTTHEME } from "./actiontypes";

export const themereducer = (state = {}, { type, payload }) => {

    switch (type) {
        case DARKTHEME: {
            return { ...state, theme: payload };
        }

        case LIGHTTHEME: {
            return { ...state, theme: payload };
        }
        default: {
            return state;
        }
    }
}