import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import { getToken } from 'shared-ui-utils';

// const httpLink = createHttpLink({
//   uri: ''
// });

// const authLink = setContext(async (_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = await getToken();
//   // eslint-disable-next-line no-console
//   if (process.env.NODE_ENV !== 'test') console.log('token', token);
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       Authorization: token ? `Bearer ${token}` : ''
//     }
//   };
// });

const dataStore = new ApolloClient({
  //   link: authLink.concat(httpLink),
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache() // removing __typename
});

export default dataStore;
