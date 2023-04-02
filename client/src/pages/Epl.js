import React from "react";
import { useState, useEffect, useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ODDS, GET_SCORES } from "../utils/queries";
import MyContext from '../components/MyContext';

const Epl = ({ onSetActiveItem }) => {
  const [sport, setSport] = useState("soccer_usa_mls");
  const { gameId, setGameId } = useContext(MyContext);
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
      <div className="centered-text">
        <h1>English Premier League</h1>
        <div>
          {gameOdds?.map((odds) => (
            <button onClick={(e) => {
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

export default Epl;

//   const gameOdds = data?.gameOdds;
//   console.log(gameOdds)

//   const handleItemClick = (item) => {
//     selectedItem(item);
//   }

//   return (
//     <>
//       <div className="centered-text">
//         <h1>English Premier League</h1>
//         <ul key={odds.id}>
//           {sport.map((item) => (
//             <li onClick={() => handleItemClick(item)}>
//               {item.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   )
// }
