import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import { CreateAplicant } from './Components/CreateAplicant';
// import { CreateCompany } from './Components/CreateCompany';
// import CreateJobOffer from './Components/CreateJobOffer';
// import { ListOfOffers } from './Components/ListJobOffer';
// import { ListOfCompanies } from './Components/ListOfCompany';
import { Home } from './Components/Home';
import './App.scss'

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <div className='parent-app'>
          <Home />
        </div>
        {/* <CreateCompany />
        <CreateJobOffer/>
        <CreateAplicant/>
        <ListOfOffers/>
        <ListOfCompanies/> */}
      </ApolloProvider>
    </>
  );
}

export default App;
