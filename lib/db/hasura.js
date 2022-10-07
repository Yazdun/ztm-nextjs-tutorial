async function queryHasuraGQL(operationsDoc, operationName, variables) {
  const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL, {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Inlhenp6IiwiaWF0IjoxNjMyNjA5NDAzLCJleHAiOjE2NjUxNDIzMTQwNTMsImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXVzZXItaWQiOiJ5YXp6eiJ9fQ.eHqJ8rXMzKCZvQDqdDI_IcNyIpMUWjl8Jp19jCQ5SC8",
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

const operationsDoc = `
    query MyQuery {
      users {
        id
        issuer
        publicAddress
        email
      }
      stats {
        favourited
        id
        userId
        videoId
        watched
      }
    }
    
    mutation MyMutation {
      insert_stats(objects: {favourited: 1, id: 1, videoId: "c6lU-xYRjFA", userId: "yazzz", watched: true}) {
        affected_rows
      }
    }
  `;

function fetchMyQuery() {
  return queryHasuraGQL(operationsDoc, "MyQuery", {});
}

function executeMyMutation() {
  return queryHasuraGQL(operationsDoc, "MyMutation", {});
}

export async function startFetchMyQuery() {
  const { errors, data } = await fetchMyQuery();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}

async function startExecuteMyMutation() {
  const { errors, data } = await executeMyMutation();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
