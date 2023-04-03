import React, { useState, useEffect, useContext } from "react";
import { GET_SINGLE_ODDS, GET_SCORES } from "../utils/queries";
import { MyContext, SportContext } from "../components/MyContext";
import { useMutation, useQuery } from "@apollo/client";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";
let teamWithEarlierLetter;
let teamWithLaterLetter;
const GameDescription = () => {
  const { gameId, setGameId } = useContext(MyContext);

  console.log(gameId);
  const { sport, setSport } = useContext(SportContext);
  console.log(sport);

  const { loading, data } = useQuery(GET_SINGLE_ODDS, {
    // need to set the sport_key: whatever staate variable we createed to hold the sport_key of what sport we are looking for the games for
    variables: { sport: sport, eventId: gameId },
  });
  const singleGameOdds = data?.singleGameOdds;
  console.log(singleGameOdds);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Grid divided="vertically">
      <Grid.Row>
        <Grid.Column>
          <Header as="h2" attached="top" block>
            {singleGameOdds.team_A} vs. {singleGameOdds.team_B}
          </Header>
          <Segment attached>
            <Segment.Group horizontal>
              <Segment>{singleGameOdds.team_A}</Segment>
              <Segment>
                Odds:
                {singleGameOdds.bookmakers[0].markets[0].outcomes[0].price}
              </Segment>

              <Button animated size="large" basic color="teal" floated="right">
                <Button.Content visible>Place Bet</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Segment.Group>
            <Divider section style={{ margin: "-0.2em" }} />
            <Segment.Group horizontal>
              <Segment>{singleGameOdds.team_B}</Segment>

              <Segment>
                Odds:{" "}
                {singleGameOdds.bookmakers[0].markets[0].outcomes[1].price}
              </Segment>

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

export default GameDescription;
