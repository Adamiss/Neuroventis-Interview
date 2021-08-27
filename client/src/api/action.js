const SERVER_URL = "http://localhost:5000";

const get = async (endpoint) => {
  const url = SERVER_URL + endpoint;
  const response = await fetch(url);
  console.log(response.status);
  if (response.ok) {
    return response.json();
  }

  return null;
};

const post = async (endpoint, data) => {
  const url = SERVER_URL + endpoint;
  const response = await fetch(url);
  console.log(response.status);
  if (response.ok) {
    return response.json();
  }

  return null;
};

module.exports = {
  get,
  post,
};
