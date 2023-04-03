import React from 'react';
import { useQuery } from '@apollo/client';
import { Container } from 'semantic-ui-react';
import { GET_USER_BETS } from '../utils/queries';

const Username = () => {
  const { loading, error, data } = useQuery(GET_USER_BETS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { userBets } = data;
  console.log(userBets);
  
  // Parse singleGameOdds field for each user bet
  const parsedUserBets = userBets.map((bet) => {
    const parsedSingleGameOdds = JSON.parse(bet.singleGameOdds);
    return { ...bet, singleGameOdds: parsedSingleGameOdds };
  });
  
  console.log(parsedUserBets);


  function formatDate(dateStr) {
    const dateObj = new Date(dateStr);
    const formattedDate = dateObj.toLocaleDateString("en-US");
    const formattedTime = dateObj.toLocaleTimeString("en-US");
    return `${formattedDate} ${formattedTime}`;
  }

  return (
    <>
      <div className="centered-text">
        <Container className='teal-text'>
          <h1>My Bets</h1>
          {parsedUserBets?.length > 0 ? (
          <div className="bet-wrapper">
            {parsedUserBets.map((bet) => (
              <button
                className="game-button"
                key={bet._id}
              >
                <ul>
                  <li>
                    {bet.singleGameOdds.home_team} vs. {bet.singleGameOdds.away_team}
                  </li>
                  <li>Start Time: {formatDate(bet.singleGameOdds.commence_time)}</li>
                  <li>Chosen Team: {bet.chosenTeam}</li>
                  <li>Bet Amount: {bet.betAmount}</li>
                  <li>Created At: {bet.createdAt}</li>
                </ul>
              </button>
            ))}
          </div>
        ) : (
          <p>No bets have been made.</p>
        )}
        </Container>
      </div>
    </>
  );
};

export default Username;
