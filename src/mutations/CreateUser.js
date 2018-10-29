import gql from 'graphql-tag'

export default gql`
  mutation createUser(
    $email: String!
    $pwd: String!
    $fName: String
    $lName: String
    $company: String
    $userType: String!
    $orgType: String
    $industries: [String]
  ) {
  createUser(input: {
    email: $email,
    pwd: $pwd,
    fName: $fname,
    lName: $lname,
    company: $company,
    userType: $userType
    orgType: $orgType,
    industries: $industries,
  }) {
    email
    pwd
    fName
    lName
    company
    userType
    orgType
    industries
  }
}
`
