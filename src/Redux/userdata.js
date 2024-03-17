import axios from "axios";
import { ERROR, LOADING, SUCCESS } from "./actiontypes";

export const userdata = async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.get(`https://jsonplaceholder.typicode.com/users`);

      dispatch({ type: SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: ERROR });
    }
  };