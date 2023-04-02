import React, { useState, Component } from "react";
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


export default class Navbar extends Component {
  state = { activeItem: "Landingpage" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    let content;
    switch (activeItem) {
      case "Landingpage":
        content = <LandingPage />;
        break;
      case "NFL":
        content = <Nfl/>;
        break;
      case "MLB":
        content = <Mlb />;
        break;
      case "English Premier League":
        content = <Epl />;
        break;
      case "NBA":
        content = <Nba />;
        break;
      case "NHL":
        content = <Nhl />;
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
                  onClick={this.handleItemClick}
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
                  onClick={this.handleItemClick}
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
                  onClick={this.handleItemClick}
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
                  onClick={this.handleItemClick}
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
                  onClick={this.handleItemClick}
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
}
