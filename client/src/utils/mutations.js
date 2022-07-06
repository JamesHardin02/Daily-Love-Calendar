import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
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
      }
    }
  }
`;

export const BUILD_CALENDAR = gql `
  mutation BuildCalendar($name: String!, $picturesUrl: [String], $quotes: [String]) {
    buildCalendar(name: $name, picturesUrl: $picturesUrl, quotes: $quotes) {
      name
      picturesUrl
      quotes
    }
  }
`