import { ApolloClient, NormalizedCacheObject, gql } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';

const API_URL: string = 'http://0.0.0.0:4000/graphql';

export function getHelloWorld(q: string): Promise<object> {
  return new Promise((resolve, reject) => {
    const client = new ApolloClient({
        uri: API_URL,
        cache: new InMemoryCache()
      });
    client.query({query: gql`
      query { ${q} }
        `}).then(res => {
            resolve(res.data);
        }).catch(reject);
  });
}
  
export default { getHelloWorld };