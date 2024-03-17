import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DARKTHEME, LIGHTTHEME } from "../Redux/actiontypes";

const Theme = () => {
  const dispatch = useDispatch();
  const mode = useSelector((store) => {
    return store.themereducer;
  });
  // console.log(mode)

  function handleLight() {
    dispatch({ type: LIGHTTHEME, payload: "lighttheme" });
  }

  function handleDark() {
    dispatch({ type: DARKTHEME, payload: "darktheme" });
  }

  return (
    <div>
       <pre>{JSON.stringify(mode)}</pre>
      <button onClick={handleLight}>Light Theme</button>
      <button onClick={handleDark}>Dark Theme</button>
    </div>
  );
};

export default Theme;
