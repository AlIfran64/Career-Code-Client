export const jobsCreatePromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/careers?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
