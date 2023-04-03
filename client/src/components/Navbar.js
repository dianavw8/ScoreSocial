import React, { useState, Component, useContext } from "react";
import {
  Container,
  Grid,
  Icon,
  Menu,
  Segment,
} from "semantic-ui-react";

import Mlb from "../pages/Mlb";
import Nba from "../pages/Nba";
import Nfl from "../pages/Nfl";
import Nhl from "../pages/Nhl";
import Epl from "../pages/Epl";
import LandingPage from "../pages/Landingpage";
import Bet from "../components/Bet";
import { MyContext, SportContext } from "./MyContext";

export default function Navbar() {
  const { gameId, setGameId } = useContext(MyContext); // get the gameId and setGameId from the context

  const [activeItem, setActiveItem] = useState("Landingpage");
  const [activeSport, setActiveSport] = useState("");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    setActiveSport(name);
    setGameId(null); // set the gameId in the context to null
  };

  const handleSetActiveItem = (newActiveItem) => {
    console.log("setActiveItem hit!!!!!!");
    setActiveItem(newActiveItem);
  };

  let content;
  switch (activeItem) {
    case "Landingpage":
      content = <LandingPage />;
      break;
    case "NFL":
      content = <Nfl onSetActiveItem={handleSetActiveItem}/>;
      break;
    case "MLB":
      content = <Mlb onSetActiveItem={handleSetActiveItem}/>;
      break;
    case "English Premier League":
      content = <Epl onSetActiveItem={handleSetActiveItem}/>;
      break;
    case "NBA":
      content = <Nba onSetActiveItem={handleSetActiveItem}/>;
      break;
    case "NHL":
      content = <Nhl onSetActiveItem={handleSetActiveItem}/>;
      break;
    case "PlaceBet":
      if (gameId) {
        content = <Bet activeSport={activeSport} />;
      } else {
        content = <Nfl />; // render a default component if the gameId is null
      }
      break;
    default:
      content = <Nfl />;
  }

  return (
    <Container>
      <Container style={{ marginTop: "6.5em" }}>
        <Grid celled="internally">
          <Grid.Column width={3}>
            <Menu color="white" fluid vertical tabular>
              <Menu.Item
                name="NFL"
                as="h4"
                inverted
                color="teal"
                active={activeItem === "NFL"}
                onClick={handleItemClick}
              >
                <Icon name="football ball" />
                NFL
              </Menu.Item>
              <Menu.Item
                name="MLB"
                as="h4"
                inverted
                color="teal"
                active={activeItem === "MLB"}
                onClick={handleItemClick}
              >
                <Icon name="baseball ball" />
                MLB
              </Menu.Item>
              <Menu.Item
                name="English Premier League"
                as="h4"
                inverted
                color="teal"
                active={activeItem === "English Premier League"}
                onClick={handleItemClick}
              >
                <Icon name="futbol outline" />
                English Premire League
              </Menu.Item>
              <Menu.Item
                name="NBA"
                as="h4"
                inverted
                color="teal"
                active={activeItem === "NBA"}
                onClick={handleItemClick}
              >
                <Icon name="basketball ball" />
                NBA
              </Menu.Item>
              <Menu.Item
                name="NHL"
                as="h4"
                inverted
                color="teal"
                active={activeItem === "NHL"}
                onClick={handleItemClick}
              >
                <Icon name="hockey puck" />
                NHL
                </Menu.Item>
                </Menu>
                </Grid.Column>
                 {/* Just for show, need API info */}
      <Grid.Column stretched width={13}>
      <Segment>{content}</Segment>
    </Grid.Column>
  </Grid>
</Container>
</Container>
);
}