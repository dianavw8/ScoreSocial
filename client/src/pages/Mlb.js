import React from "react";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import API from "../utils/API";
import { GET_ODDS, GET_SCORES } from "../utils/queries";

const Mlb = () => {
  const [sport, setSport] = useState("");

  console.log(sport);
  useEffect(() => {
    setSport("baseball_mlb");
  });

  //   function setSportQuery(sport) {
  //     setSport(sport);
  //   }

  const { loading, data } = useQuery(GET_ODDS, {
    // need to set the sport_key: whatever staate variable we createed to hold the sport_key of what sport we are looking for the games for
    variables: { sport_key: sport },
  });
  console.log(data);


    return (
        <>
        <div className="centered-text">
            <h1>Major League Baseball</h1>
        </div>
      </>
    )
}

export default Mlb;
