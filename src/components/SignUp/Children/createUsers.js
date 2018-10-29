import { graphql } from 'react-apollo'
import CreateUser from '../../../mutations/CreateUsers'
import ListUsers from '../../../queries/ListUsers'

class AddUser extends React.Component { /* class omitted for now */ }

export default graphql(CreateUser, {
  props: props => ({
    onAdd: user => props.mutate({
      variables: user,
      optimisticResponse: {
        __typename: 'Mutation',
        createUser: { ...user,  __typename: 'User' }
      },
      update: (proxy, { data: { createUser } }) => {
        const data = proxy.readQuery({ query: ListUsers });
        data.listUsers.items.push(createUser);
        proxy.writeQuery({ query: ListUsers, data });
      }
    })
  })
})(AddUser)
