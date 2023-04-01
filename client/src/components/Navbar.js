import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
} from "semantic-ui-react";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Auth from "../utils/auth";

export default class Navbar extends Component {
  state = { activeItem: "NFL" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Container style={{ marginTop: "6.5em" }}>
          <Grid celled="internally">
            <Grid.Column width={3}>
              <Menu color="white" fluid vertical tabular>
                <Menu.Item
                  name="NFL"
                  as="h4"
                  href="/nfl"
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
                  href="/mlb"
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
                  href="/engPremierLeague"
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
                  href="/nba"
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
                  href="/nhl"
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
              <Segment>Sports Stuff...</Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </Container>
    );
  }
}
