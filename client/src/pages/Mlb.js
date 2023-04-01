import React from "react";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import API from "../utils/API";
import { GET_ODDS, GET_SCORES } from "../utils/queries";

const Mlb = () => {
  const [sport, setSport] = useState("baseball_mlb");
  console.log(sport);

  const { loading, data } = useQuery(GET_ODDS, {
    // need to set the sport_key: whatever staate variable we createed to hold the sport_key of what sport we are looking for the games for
    variables: { sport },
  });
  if (loading) {
    return <h1>Loading...</h1>;
  }
  
  const gameOdds = data?.gameOdds;
  console.log(gameOdds) 

  function formatDate(dateStr) {
    const dateObj = new Date(dateStr);
    const formattedDate = dateObj.toLocaleDateString('en-US');
    const formattedTime = dateObj.toLocaleTimeString('en-US');
    return `${formattedDate} ${formattedTime}`;
  }

  return (
    <>
      <div className="centered-text">
        <h1>Major League Baseball</h1>
        {gameOdds.map((odds) => (
          
          <ul>
            <title>{odds.sport_title}</title>
            <p>{odds.commence_time}</p>
            <p>{odds.home_team}</p>
            <p>{odds.away_team}</p>
          </ul>
          
        ))}
      </div>
    </>
  );
};

export default Mlb;
