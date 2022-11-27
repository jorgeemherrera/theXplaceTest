import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { AppRouter } from './Routes/routes';
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
          <AppRouter />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
