import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
    me {
        _id
        username
        email
        calendars {
            name: String
            picturesUrl: [String]
            quotes: [String]
        }
    }
}`

export const QUERY_USER = gql`
    {
        query user($username: String!) {
            user(username: $username) {
              _id
              username
              email
              calendars {
                name: String
                picturesUrl: [String]
                quotes: [String]
            }
        }
    }
`
