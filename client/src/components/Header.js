import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Popup,
} from "semantic-ui-react";
import Auth from "../utils/auth";
const SSHeader = ({ pointsEarned, loginForm, onLogout }) => {
  const [userProfile, setUserProfile] = useState({});
  // If the user is logged in, set the `userProfile` state to the logged-in user's information
  useEffect(() => {
    if (Auth.loggedIn()) {
      console.log("User logged in");
      const profileData = Auth.getProfile();
      setUserProfile(profileData);
      console.log(profileData);
    }
  }, []);
  return (
    <Menu fixed="top" inverted compact icon="labeled">
      <Container>
        <Menu.Item as={Link} to="/">
          <Header as="h2" inverted color="white" style={{ marginTop: "0.2em" }}>
            <Image
              size=""
              src="./assets/logo.png"
              style={{ marginBottom: "-0.3em", marginTop: "-0.5em" }}
            />
            ScoreSocial
          </Header>
        </Menu.Item>

        {/* Points */}
        <Popup
          trigger={
            <Menu.Item name="points" position="right">
              <Icon name="gem" />
              50 Points Left
            </Menu.Item>
          }
          flowing
          hoverable
        >
          <Grid centered divided columns={3}>
            <Grid.Column textAlign="center">
              <Header as="h4"> Add Points</Header>
              <Button>
                <Icon name="plus square" />
                10
              </Button>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Header as="h4"> Add Points</Header>
              <Button>
                <Icon name="plus square" />
                25
              </Button>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Header as="h4"> Add Points</Header>
              <Button>
                <Icon name="plus square" />
                50
              </Button>
            </Grid.Column>
          </Grid>
        </Popup>
        {/* Points */}

        {userProfile && userProfile.data && Auth.loggedIn() ? (
          <Menu.Item name="username" as={Link} to="/username">
            <Icon name="user circle" />
            {userProfile.data.username}
          </Menu.Item>
        ) : (
          <Menu.Item name="username" as={Link} to="/username">
            <Icon name="user circle" />
            Username
          </Menu.Item>
        )}
        {Auth.loggedIn() ? (
          <Menu.Item name="logout" as={Link} to="/" onClick={Auth.logout}>
            <Icon name="sign out alternate" />
            Logout
          </Menu.Item>
        ) : (
          <>
            <Menu.Item name="Login" as={Link} to="/login">
              <Icon name="sign in alternate" />
              Login
            </Menu.Item>
            <Menu.Item name="Signup" as={Link} to="/signup">
              <Icon name="sign out alternate" />
              Sign-up
            </Menu.Item>
          </>
        )}
      </Container>
    </Menu>
  );
};
export default SSHeader;
