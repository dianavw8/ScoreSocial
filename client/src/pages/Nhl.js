import React, { useState, useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ODDS, GET_SCORES } from "../utils/queries";
import { MyContext, SportContext } from "../components/MyContext";
import { Link } from "react-router-dom";

const Nhl = () => {
  const { gameId, setGameId } = useContext(MyContext);
  console.log(gameId);
  const { sport, setSport } = useContext(SportContext);
  setSport("icehockey_nhl");
  console.log(sport);

  function formatDate(dateStr) {
    const dateObj = new Date(dateStr);
    const formattedDate = dateObj.toLocaleDateString("en-US");
    const formattedTime = dateObj.toLocaleTimeString("en-US");
    return `${formattedDate} ${formattedTime}`;
  }

  const { loading, data } = useQuery(GET_ODDS, {
    // need to set the sport_key: whatever staate variable we createed to hold the sport_key of what sport we are looking for the games for
    variables: { sport },
  });
  if (loading) {
    return <h1>Loading...</h1>;
  }

  const gameOdds = data?.gameOdds;
  console.log(gameOdds);

  return (
    <>
      <div className="centered-text">
        <h1>National Hockey League</h1>
        <div>
          {gameOdds?.map((odds) => (
            <Link key={odds.id} to={`/gamedescription/:${odds.id}`}>
            <button onClick={(e) => setGameId(odds.id)}>
              <ul>
                <li>
                  {odds.home_team} vs. {odds.away_team}
                </li>
                <li>Start Time: {formatDate(odds.commence_time)}</li>
              </ul>
            </button>
          </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nhl;
