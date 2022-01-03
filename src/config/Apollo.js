import ApolloClient from "apollo-boost";


const Client = new ApolloClient({
    uri: 'https://swapi.loquenecesito.co/graphql/'  
  });

  export default Client