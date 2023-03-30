import axios from 'axios';

// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// save book data for a logged in user
export const saveBook = (bookData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookData),
  });
};

// remove saved book data for a logged in user
export const deleteBook = (bookId, token) => {
  return fetch(`/api/users/books/${bookId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};



// Using axios, we create a search method that is specific to our use case and export it at the bottom
export const getOdds = (query) => {
  const options = {
    method: 'GET',
    url: `https://odds.p.rapidapi.com/v4/sports/${query}/odds&apiKey=0bebf433b10ecdd3a1d87a21e8549ef7`,
    params: {
      regions: 'us',
      oddsFormat: 'decimal',
      markets: 'h2h,spreads',
      dateFormat: 'iso'
    },
    headers: {
      'X-RapidAPI-Key': '0bebf433b10ecdd3a1d87a21e8549ef7',
      'X-RapidAPI-Host': 'odds.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

// export const getScores = (query) => {
//   const options = {
//     method: 'GET',
//     url: `https://api.the-odds-api.com/v4/sports/${query}/scores/?daysFrom=1&apiKey=09976c555cmsh58729f87a32bfdbp1ac64ajsndc1b043664d3`,
//     params: {
//       regions: 'us',
//       oddsFormat: 'decimal',
//       markets: 'h2h,spreads',
//       dateFormat: 'iso'
//     },
//     headers: {
//       'X-RapidAPI-Key': '09976c555cmsh58729f87a32bfdbp1ac64ajsndc1b043664d3',
//       'X-RapidAPI-Host': 'odds.p.rapidapi.com'
//     }
//   };

//   fetch(`https://api.the-odds-api.com/v4/sports/${query}/scores/?daysFrom=1&apiKey=9264d84c86e73245c7c5f05093e91af5`)
//   .then(response => response.json())
//   .then(function (response) {
//     console.log(response);
//     return response
//   }).catch(function (error) {
//     console.error(error);
//   });
// }

// export default { getOdds, getScores };