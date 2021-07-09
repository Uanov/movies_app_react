const BASE_URL = 'http://localhost:3000';

export const getMovieDB = (URL) => fetch(`${BASE_URL}${URL}`, {method: 'GET'})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  });
