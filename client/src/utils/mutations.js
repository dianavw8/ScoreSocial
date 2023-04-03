import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation LogoutUser {
    logout {
      message
    }
  }
`;

export const UPDATE_POINTS = gql`
  mutation UpdatePoints($username: String!, $points: Int!) {
    updatePoints(username: $username, points: $points) {
    _id
    username
    points
    }
  }
`;

export const SEND_FRIEND_REQUEST = gql`
mutation addFriend($username: String!, $id: ID!) {
  addFriend(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;
