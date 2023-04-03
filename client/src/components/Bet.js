import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Container,
  Grid,
  Divider,
  Icon,
  Header,
  Segment,
  Input,
} from "semantic-ui-react";
import { MyContext, SportContext } from "../components/MyContext";
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_POINTS , ADD_BET} from '../utils/mutations';
import { GET_USER,GET_SINGLE_ODDS } from '../utils/queries';
import Auth from "../utils/auth";

export default function BettingGame({ activeSport }) {

  let activeSportApiRef = activeSportApiReference(activeSport);
  const [betAmount, setBetAmount] = useState(0);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [betResult, setBetResult] = useState(null);
  const { gameId, setGameId } = useContext(MyContext);
  const [showImage, setShowImage] = useState("");
  const [addBet, { error }] = useMutation(ADD_BET);
  const [betPlaced, setBetPlaced] = useState(false);
  const [updatePoints] = useMutation(UPDATE_POINTS);
  const [NotEnoughPointsMessage, setMessage] = useState("");
  const [userProfile, setUserProfile] = useState({});

 // If the user is logged in, set the `userProfile` state to the logged-in user's information
 useEffect(() => {
  if (Auth.loggedIn()) {
    console.log("User logged in");
    const profileData = Auth.getProfile();
    setUserProfile(profileData);
    console.log("profileData");
    console.log(profileData);
    setShowImage(activeSport);
  }
}, [])

  const { loading, data } = useQuery(GET_SINGLE_ODDS, {
    variables: { sport: activeSportApiRef, eventId: gameId },
  });
  console.log("userProfile before userData fetch");
  console.log(userProfile);

  const userDataQuery = useQuery(GET_USER, {
    variables: { username: userProfile?.data?.username },
    fetchPolicy: 'network-only',
  });
  
  const userData = userDataQuery.data?.user;
  console.log("userdata");
  console.log(userData);
  const points = userData?.points;
  const BetData = data?.singleGameOdds[0];

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

  function formatDate(dateStr) {
    const dateObj = new Date(dateStr);
    const formattedDate = dateObj.toLocaleDateString("en-US");
    const formattedTime = dateObj.toLocaleTimeString("en-US");
    return `${formattedDate} ${formattedTime}`;
  }

  function handlePlaceBet() {
    // console.log("PLACING BET");
    // console.log("selectedTeam:", selectedTeam);
    // console.log("betAmount:", betAmount);
    // console.log("points:", points);
    setMessage("");

    if (selectedTeam && betAmount > 0) {
      const newPoints = points - betAmount;
      //console.log("newPoints:", newPoints);

      if (newPoints < 0) {
        setMessage("You do not have enough points to place this bet.");
        return;
      }
      updatePoints({
        variables: {
          username: userProfile.data.username,
          points: newPoints,
        },
        refetchQueries: [{ query: GET_USER, variables: { username: userProfile.data.username } }],
      })
        .then((res) => {
          console.log(res);
          //setBalance(res.data.updatePoints.points);
          //setBetResult(res.data.addBet);
          setBetPlaced(true); // set state variable to true
          console.log("BET SUCCESSFUL");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  

  return (
    <div>
      <>
      {(betPlaced && !NotEnoughPointsMessage) && <h1 className="teal-text center-text-simple">BET HAS BEEN PLACED</h1>}
      {NotEnoughPointsMessage && <h1 className="red-text error-message center-text-simple">{NotEnoughPointsMessage}</h1>}

        <div className="centered-text">
          <Container>
            <Grid divided="vertically">
              <Grid.Row>
                <Grid.Column>
                  <Header as="div" attached="top" block>
                    <h2>{BetData?.away_team} at {BetData?.home_team}</h2>
                    <h3>{formatDate(BetData?.commence_time)}</h3>
                  </Header>
                  <Segment attached>
                    <Segment.Group horizontal>
                    <Segment
                      className={selectedTeam === BetData?.away_team ? "selected-team" : ""}
                      onClick={() => setSelectedTeam(BetData?.away_team)}
                    >
                      {BetData?.away_team}
                    </Segment>
                    <Segment
                      className={selectedTeam === BetData?.home_team ? "selected-team" : ""}
                      onClick={() => setSelectedTeam(BetData?.home_team)}
                    >
                      {BetData?.home_team}
                    </Segment>
                    </Segment.Group>
                    <Divider section style={{ margin: "-0.2em" }} />
                    <Segment.Group horizontal>
                     
                      <Segment>Bet Amount: </Segment>
                      <Input
                        type="number"
                        value={betAmount}
                        onChange={(e) => setBetAmount(e.target.value)}
                      />
                      <Button
                        animated
                        size="large"
                        basic
                        color="teal"
                        floated="right"
                        onClick={handlePlaceBet}
                      >
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
          </Container>
        </div>
      </>
    </div>
  );
}
