import React from 'react';
import React, { useState, useEffect } from 'react';

const BETTING_URL = '';

export default function BettingGame() {
  const [balance, setBalance] = useState(100);
  const [betAmount, setBetAmount] = useState(0);
  const [betResult, setBetResult] = useState(null);

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

  return (
    <div>
      
    </div>
  );
}