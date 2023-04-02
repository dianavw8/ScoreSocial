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
  console.log(gameOdds);
  
  if(gameOdds === []) {
    return (
        <>
        <h1>There are no upcoming games.</h1>
        </>
    )
   }

  function formatDate(dateStr) {
    const dateObj = new Date(dateStr);
    const formattedDate = dateObj.toLocaleDateString("en-US");
    const formattedTime = dateObj.toLocaleTimeString("en-US");
    return `${formattedDate} ${formattedTime}`;
  }

  return (
    <>
      <div className="centered-text">
        <h1>Major League Baseball</h1>
        <div>
          {gameOdds?.map((odds) => (
            <button>
              <ul key={odds.id}>
                <li>{odds.home_team} vs. {odds.away_team}</li>
                <li>Start Time: {formatDate(odds.commence_time)}</li>
              </ul>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mlb;
