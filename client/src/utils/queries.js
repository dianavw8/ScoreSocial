import { gql } from '@apollo/client';

export const GET_ME = gql`
  query {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;

export const GET_USER = gql`
  query getUser($username: String!) {
    user(username: $username) {
      _id
      username
      email
      savedBooks {
        bookId
        title
        authors
        description
        authors
        link
        image
      }
    }
  }
`;

export const GET_BOOKS = gql`
  query getBooks {
    books {
      bookId
      title
      authors
    }
  }
`;
