import React from 'react';
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ODDS, GET_SCORES } from "../utils/queries";


const Nhl = () => {
    const [sport, setSport] = useState("icehockey_nhl");
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
    return (
        <>
        <div className="centered-text">
            <h1>National Hockey League</h1>
        </div>
      </>
    )
}


export default Nhl;