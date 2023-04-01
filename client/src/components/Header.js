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
import Auth from "../utils/auth";

const SSHeader = ({ currentPoints, userProfile, loginForm, onLogout }) => {

  return (
    <Menu fixed="top" inverted compact icon="labeled">
      <Container>
        <Menu.Item as={Link} to="/">
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
        <Menu.Item name="points" as={Link} to="/points" position="right">
          <Icon name="gem" />
          50 Points Left
        </Menu.Item>
        <Menu.Item name="username" as={Link} to="/username">
          <Icon name="user circle" />
          Username
        </Menu.Item>
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
