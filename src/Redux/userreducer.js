import { produce } from "immer";
import { ERROR, LOADING, SUCCESS } from "./actiontypes";

const initialSta = {
    loading: false,
    data: [],
    error: false
}

export const userreducer = (state = initialSta, { type, payload }) => {

    switch (type) {

        case LOADING: {
            return produce(state, (original) => {
                original.loading = true;
            })
        }
        case SUCCESS: {
            return produce(state, (original) => {
                original.loading = false;
                original.data = payload;
                original.error = false;
            })
        }
        case ERROR: {
            return produce(state, (original) => {
                original.loading = false;
                original.error = true
                original.data = []
            })
        }
        default: {
            return state;
        }
    }

}