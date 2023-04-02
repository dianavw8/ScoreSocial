import React from "react";
import { useState, useEffect, useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ODDS, GET_SCORES } from "../utils/queries";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";

const Nfl = () => {
import MyContext from '../components/MyContext';

const Nfl = ({ onSetActiveItem }) => {
  const [sport, setSport] = useState("americanfootball_nfl");
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
    // <>
    //   <div className="centered-text">
    //     <h1>National Football League</h1>
    //     <div>
    //       {gameOdds?.map((odds) => (
    //         <button>
    //           <ul key={odds.id}>
    //             <li>{odds.home_team} vs. {odds.away_team}</li>
    //             <li>Start Time: {formatDate(odds.commence_time)}</li>
    //           </ul>
    //         </button>
    //       ))}
    //     </div>
    //   </div>
    // </>
    <Grid divided="vertically">
      <Grid.Row>
        <Grid.Column>
          <Header as="h2" attached="top" block>
            Team A vs. Team B
          </Header>
          <Segment attached>
            <Segment.Group horizontal>
              <Segment>Team A</Segment>
              <Segment>Odds: </Segment>
              <Button animated size="large" basic color="teal" floated="right">
                <Button.Content visible>Place Bet</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Segment.Group>
            <Divider section style={{ margin: "-0.2em" }} />
            <Segment.Group horizontal>
              <Segment>Team B</Segment>
              <Segment>Odds: </Segment>
              <Button animated size="large" basic color="teal" floated="right">
                <Button.Content visible>Place Bet</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Segment.Group>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Nfl;
