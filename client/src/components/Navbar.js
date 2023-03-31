import React, { useState, Component } from "react";
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
} from "semantic-ui-react";
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import Auth from '../utils/auth';
import { getOdds, getScores } from '../utils/API';

export default class Navbar extends Component {
  state = { activeItem: "bio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu fixed="top" inverted compact icon="labeled">
          <Container>
            <Menu.Item as="a" header>
              <Header
                as="h2"
                inverted
                color="white"
                style={{ marginTop: "0.2em" }}
              >
                <Image
                  size=""
                  src="./assets/logo.png"
                  style={{ marginBottom: "-0.3em", marginTop: "-0.5em" }}
                />
                ScoreSocial
              </Header>
            </Menu.Item>
            <Menu.Item
              name="points"
              position="right"
              onClick={this.handleItemClick}
            >
              <Icon name="gem" />
              50 Points Left
            </Menu.Item>

            <Menu.Item name="username" onClick={this.handleItemClick}>
              <Icon name="user circle" />
              Username
            </Menu.Item>

            {Auth.loggedIn() ? (
              <>
                <Menu.Item
                  name="logout"
                  href="/login"
                  onClick={this.handleItemClick}
                >
                  <Icon name="sign out alternate" />
                  Logout
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item
                  name="Login"
                  href="/login"
                  onClick={this.handleItemClick}
                >
                  <Icon name="sign out alternate" />
                  Login
                </Menu.Item>
                <Menu.Item
                  name="Signup"
                  href="/signup"
                  onClick={this.handleItemClick}
                >
                  <Icon name="sign out alternate" />
                  Sign-up
                </Menu.Item>
              </>
            )}
          </Container>
        </Menu>
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
                  onClick={[
                    this.handleItemClick,
                    getOdds("americanfootball_nfl"),
                    getScores("americanfootball_nfl"),
                  ]}
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
                  onClick={[
                    this.handleItemClick,
                    getOdds("baseball_mlb"),
                    getScores("baseball_mlb"),
                  ]}
                >
                  <Icon name="baseball ball" />
                  MLB
                </Menu.Item>
                <Menu.Item
                  name="English Premire League"
                  as="h4"
                  href="/engPremireLeague"
                  inverted
                  color="teal"
                  active={activeItem === "English Premire League"}
                  onClick={[
                    this.handleItemClick,
                    getOdds("americanfootball_nfl"),
                    getScores("americanfootball_nfl"),
                  ]}
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
                  onClick={[
                    this.handleItemClick,
                    getOdds("basketball_nba"),
                    getScores("basketball_nba"),
                  ]}
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
                  onClick={[
                    this.handleItemClick,
                    getOdds("icehockey_nhl"),
                    getScores("icehockey_nhl"),
                  ]}
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