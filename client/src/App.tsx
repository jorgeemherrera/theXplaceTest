import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { CreateAplicant } from './Components/CreateAplicant';
import { CreateCompany } from './Components/CreateCompany';
import CreateJobOffer from './Components/CreateJobOffer';
import { ListOfOffers } from './Components/ListJobOffer';
import { ListOfCompanies } from './Components/ListOfCompany';

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <CreateCompany />
        <CreateJobOffer/>
        <CreateAplicant/>
        <ListOfOffers/>
        <ListOfCompanies/>
      </ApolloProvider>
    </>
  );
}

export default App;
