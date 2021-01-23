import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from "@auth0/auth0-react";

import config from "./apollo-config.json";

export const GraphQLProvider = ({ children }: any) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const httpLink = createHttpLink({
    uri: config.uri,
  });

  const authLink = setContext(async (_, { headers }) => {

    const token = isAuthenticated ? await getAccessTokenSilently() : null;

    return {
      headers: {
        ...headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
