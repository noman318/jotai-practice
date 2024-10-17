async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = fetch("https://jsonplaceholder.typicode.com/users", options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

async function getUsers() {
  const data = await getData();
  return data;
}

export { getUsers };
