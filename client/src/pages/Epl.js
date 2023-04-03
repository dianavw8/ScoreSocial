import React, { useState, useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ODDS, GET_SCORES } from "../utils/queries";
import { MyContext, SportContext } from "../components/MyContext";
import { Link } from "react-router-dom";

const Epl = ({ onSetActiveItem }) => {
  const { gameId, setGameId } = useContext(MyContext);
  console.log(gameId);
  const { sport, setSport } = useContext(SportContext);
  setSport("soccer_usa_mls");
  console.log(sport);

  const { loading, data } = useQuery(GET_ODDS, {
    // need to set the sport_key: whatever staate variable we createed to hold the sport_key of what sport we are looking for the games for
    variables: { sport },
  });
  if (loading) {
    return <h1>Loading...</h1>;
  }

  const gameOdds = data?.gameOdds;
  
  if (gameOdds === []) {
    return (
      <>
        <h1>There are no upcoming games.</h1>
      </>
    );
  }
  console.log(gameOdds);

  function formatDate(dateStr) {
    const dateObj = new Date(dateStr);
    const formattedDate = dateObj.toLocaleDateString("en-US");
    const formattedTime = dateObj.toLocaleTimeString("en-US");
    return `${formattedDate} ${formattedTime}`;
  }
  
  const handleClick = (oddsId) => {
    setGameId(oddsId);
    onSetActiveItem("PlaceBet");
  };

  return (
    <>
      <div className="content-wrapper">
        <h1 className="teal-text">English Premier League</h1>
        <div className="button-wrapper">
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

export default Epl;

