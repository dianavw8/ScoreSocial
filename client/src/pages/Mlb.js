import React, { useContext } from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ODDS } from "../utils/queries";
import MyContext from '../components/MyContext';

const Mlb = ({ onSetActiveItem }) => {
  const [sport, setSport] = useState("baseball_mlb");
  const { gameId, setGameId } = useContext(MyContext);

  const { loading, data } = useQuery(GET_ODDS, {
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
      <div className="centered-text">
        <h1>Major League Baseball</h1>
        <div>
          {gameOdds?.map((odds) => (
            <button onClick={(e) => {
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

export default Mlb;
