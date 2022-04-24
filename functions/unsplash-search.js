// import fetch from 'node-fetch';
const axios = require('axios');

exports.handler = async (event) => {
  // console.log(process.env.UNSPLASH_ACCESS_KEY);
  const key = process.env.UNSPLASH_ACCESS_KEY;
  const { query } = JSON.parse(event.body);
  const url = `https://api.unsplash.com/search/photos?client_id=${key}&query=${query}`;

  console.log(url);

  const response = await axios
    .get(url)
    .then((response) => {
      console.log(response.results);
      return response;
    })
    .catch((error) => console.log('error', error));

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(response),
  };
};
