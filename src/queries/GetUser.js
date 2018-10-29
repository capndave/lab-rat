import gql from 'graphql-tag'

export default gql`
  query getUser {
    getUser (user_id: "123456") {
      user_id
      email
      pwd
      fName
      lName
    }
  }
`
