import React, { useState, useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ODDS, GET_SCORES } from "../utils/queries";
import { MyContext, SportContext } from "../components/MyContext";
import { Link } from "react-router-dom";

const Mlb = ({ onSetActiveItem }) => {
  const { gameId, setGameId } = useContext(MyContext);
  console.log(gameId);
  const { sport, setSport } = useContext(SportContext);
  setSport("baseball_mlb");
  console.log(sport);

  const { loading, data } = useQuery(GET_ODDS, {
    variables: { sport },
  });
  if (loading) {
    return <h1>Loading...</h1>;
  }

  const gameOdds = data?.gameOdds;

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
        <h1 className="teal-text">Major League Baseball</h1>
        {gameOdds?.length > 0 ? (
          <div className="button-wrapper">
            {gameOdds.map((odds) => (
              <button
                className="game-button"
                onClick={(e) => {
                  console.log("this is the odds id", odds.id);
                  handleClick(odds.id);
                }}
                key={odds.id}
              >
                <ul>
                  <li>
                    {odds.home_team} vs. {odds.away_team}
                  </li>
                  <li>Start Time: {formatDate(odds.commence_time)}</li>
                </ul>
              </button>
            ))}
          </div>
        ) : (
          <p>There are no games available right now. Please check back later.</p>
        )}
      </div>
    </>
  );
};

export default Mlb;
