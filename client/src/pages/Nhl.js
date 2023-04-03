import React from "react";
import dropdown from "react-dropdown";
import { useState, useEffect, useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ODDS, GET_SCORES } from "../utils/queries";
import MyContext from '../components/MyContext';

const Nhl = ({ onSetActiveItem }) => {
  const [sport, setSport] = useState("icehockey_nhl");
  const { gameId, setGameId } = useContext(MyContext);
  console.log(sport);

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

  const { loading, data } = useQuery(GET_ODDS, {
    // need to set the sport_key: whatever staate variable we createed to hold the sport_key of what sport we are looking for the games for
    variables: { sport },
  });
  if (loading) {
    return <h1>Loading...</h1>;
  }

  const gameOdds = data?.gameOdds;
  console.log(gameOdds);

  console.log(gameId)
  return (
    <>
      <div className="content-wrapper">
        <h1 className="teal-text">National Hockey League</h1>
        <div className="button-wrapper">
          {gameOdds?.map((odds) => (
            <button className="game-button" onClick={(e) => {
              console.log("this is the odds id", odds.id);
              handleClick(odds.id);
            }} key={odds.id}>
              <ul >
                <li>
                  {odds.home_team} vs. {odds.away_team}
                </li>
                <li>Start Time: {formatDate(odds.commence_time)}</li>
              </ul>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nhl;
