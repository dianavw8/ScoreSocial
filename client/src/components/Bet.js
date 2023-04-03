import React, { useState, useEffect, useContext } from 'react';
import {
  Container,
  Grid,
  Icon,
  Menu,
  Segment,
} from "semantic-ui-react";
import MyContext from '../components/MyContext';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_POINTS } from '../utils/mutations';
import { GET_USER,GET_SINGLE_ODDS } from '../utils/queries';

const BETTING_URL = '';
let BetData;

export default function BettingGame({activeSport}) {
  console.log("this is activeSport: ",activeSport);

  let activeSportApiRef = activeSportApiReference(activeSport); 
  console.log("this is activeSportApiRef: ",activeSportApiRef);

  const [balance, setBalance] = useState(100);
  const [betAmount, setBetAmount] = useState(0);
  const [betResult, setBetResult] = useState(null);
  const { gameId, setGameId } = useContext(MyContext);
  const [showImage, setShowImage] = useState("");

  useEffect(() => {
      setShowImage(activeSport);
  }, []);

  const { loading, data } = useQuery(GET_SINGLE_ODDS, {
    variables: { sport: activeSportApiRef, eventId: gameId },
  });
  console.log("this is gameId: ", gameId);

  console.log("odd data:");
  console.log(data?.singleGameOdds[0]);
  BetData = data?.singleGameOdds[0];

  if (loading == false && BetData == null) {
    return <h1>Bets on this game can no longer be made.</h1>;
  }
  if (loading == true) {
    return <h1>Loading...</h1>;
  }

  function activeSportApiReference(activeSportName) {
    let content;
    switch (activeSportName) {
      case "NFL":
        content = "americanfootball_nfl";
        break;
      case "MLB":
        content = "baseball_mlb";
        break;
      case "English Premier League":
        content = "soccer_usa_mls";
        break;
      case "NBA":
        content = "basketball_nba";
        break;
      case "NHL":
        content = "icehockey_nhl";
        break;
      default:
        content = "baseball_mlb";
    }

    return content;
  }

  async function placeBet() {
    try {
      const response = await fetch(BETTING_URL, {
        method: 'POST',
        body: JSON.stringify({ amount: betAmount }),
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await response.json();
      const { win, amount, payout } = data;

      if (win) {
        setBalance(balance + payout);
        setBetResult(`You won ${payout} points`);
      } else {
        setBalance(balance - amount);
        setBetResult(`You lost ${amount} points`);
      }

    } catch (error) {
      console.error('Error:', error);
    }
  }

  function handleBetAmountChange(event) {
    const amount = Number(event.target.value);
    setBetAmount(amount);
  }

  function formatDate(dateStr) {
    const dateObj = new Date(dateStr);
    const formattedDate = dateObj.toLocaleDateString("en-US");
    const formattedTime = dateObj.toLocaleTimeString("en-US");
    return `${formattedDate} ${formattedTime}`;
  }

  return (
    <div>
       <>
          <div className="centered-text">
            <Container>
              <h1 class="teal-text"> {BetData?.sport_title} : Place a Bet!</h1>
              <h3>{BetData?.away_team} at {BetData?.home_team}</h3>
              <h3>{formatDate(BetData?.commence_time)}</h3>
            </Container>
          </div>
          <img
            className={`slide-in-memo ${showImage == "English Premier League" ? 'show-memo' : ''}`}
            src="/assets/Guillermo-Ochoa.png"
            alt="Guillermo Ochoa"
            />
        </>
    </div>
  );
}