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

const SSHeader = ({ pointsEarned, userProfile, loginForm, onLogout }) => {
  return (
   
    <Menu fixed="top" inverted compact icon="labeled">
    <Container>
      <Menu.Item as="a" header
            href="/">
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
        href="/points"
        position="right"
        //onClick={this.handleItemClick}
      >
        <Icon name="gem" />
        50 Points Left
      </Menu.Item>

      <Menu.Item name="username" 
            href="/username"
        //onClick={this.handleItemClick}
      >
        <Icon name="user circle" />
        Username
      </Menu.Item>

      {Auth.loggedIn() ? (
        <>
          <Menu.Item
            name="logout"
            href="/login"
            //onClick={this.handleItemClick}
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
            //onClick={this.handleItemClick}
          >
            <Icon name="sign in alternate" />
            Login
          </Menu.Item>
          <Menu.Item
            name="Signup"
            href="/signup"
            // onClick={this.handleItemClick}
          >
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


