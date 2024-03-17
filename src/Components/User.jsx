import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userdata } from "../Redux/userdata";

const User = () => {
  const dispatch = useDispatch();
  const {loading,error,data} = useSelector((store) => {
    return store.userreducer;
  });

  useEffect(() => {
    dispatch(userdata)
  }, []);

  return (
    <div>
      {loading && <h1>...loading</h1>}
      {error && <h1>...error</h1>}

      {data && data.map((ele,index)=>{
        return <h1 key={index}>{ele.name}</h1>
      })}
    </div>
  );
};

export default User;
