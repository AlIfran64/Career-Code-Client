export const myApplicationPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/applications?email=${email}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
