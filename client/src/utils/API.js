import axios from 'axios';

// route to get logged in user's info (needs the token)
export const getScores = (name) => {
  return "place holders";
};

export const getOdds = (name) => {
  return "place holders";
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

// // save book data for a logged in user
// export const saveBook = (bookData, token) => {
//   return fetch('/api/users', {
//     method: 'PUT',
//     headers: {
//       'X-RapidAPI-Key': '09976c555cmsh58729f87a32bfdbp1ac64ajsndc1b043664d3',
//       'X-RapidAPI-Host': 'odds.p.rapidapi.com'
//     }
//   };

//   axios.request(options).then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });
// }

<<<<<<<<< Temporary merge branch 1
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
//     body: JSON.stringify(bookData),
//   });
// };

// // remove saved book data for a logged in user
// export const deleteBook = (bookId, token) => {
//   return fetch(`/api/users/books/${bookId}`, {
//     method: 'DELETE',
//     headers: {
//       'X-RapidAPI-Key': '09976c555cmsh58729f87a32bfdbp1ac64ajsndc1b043664d3',
//       'X-RapidAPI-Host': 'odds.p.rapidapi.com'
//     }
//   };
=========
export const getScores = (query) => {

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
>>>>>>>>> Temporary merge branch 2

//   axios.request(options).then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });
// }


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
//   });
// };

