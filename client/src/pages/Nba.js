import React from 'react';
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ODDS, GET_SCORES } from "../utils/queries";


const Nba = () => {
    const [sport, setSport] = useState("basketball_nba");
    console.log(sport);
  
    const { loading, data } = useQuery(GET_ODDS, {
      // need to set the sport_key: whatever staate variable we createed to hold the sport_key of what sport we are looking for the games for
      variables: { sport },
    });
    if (loading) {
      return <h1>Loading...</h1>
    }
   const gameOdds = data?.gameOdds
   console.log(gameOdds)

// <<<<<<< featureBrandon10
//    const handleItemClick = (item) => {
//     selectedItem(item);
// }
// =======
// >>>>>>> main

    return (
        <>
        <div className="centered-text">
// <<<<<<< featureBrandon10
//             <h1>National Basketball Association</h1>
//             <ul>
//                     {sport.map((item) => (
//                         <li key={item.id} onClick={() => handleItemClick(item)}>
//                             {item.name}
//                         </li>
//                     ))}
//                 </ul>
// =======
            <h1>National Basketball League</h1>
            <div>
          {gameOdds?.map((odds) => (
            <button>
              <ul key={odds.id}>
                <li>{odds.home_team} vs. {odds.away_team}</li>
                <li>Start Time: {odds.commence_time}</li>
              </ul>
            </button>
          ))}
        </div>

        </div>
      </>
    )
}


export default Nba;