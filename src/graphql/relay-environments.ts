import { Environment, Network, RecordSource, Store, RequestParameters, Variables, GraphQLResponse } from 'relay-runtime'


function fetchGraphQL(
  request: RequestParameters,
  variables: Variables
): Promise<GraphQLResponse> {
  return fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: request.text, // ← Relay가 컴파일된 GraphQL 쿼리를 자동으로 넣어줍니다
      variables,
    }),
  }).then((response) => response.json())
}


export const relayEnvironment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
})
