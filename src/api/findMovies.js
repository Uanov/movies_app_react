const BASE_URL = 'https://www.omdbapi.com/?apikey=cfe9a10e&t=auth/byTitle?title=';

export const findMovieDB = (title) => fetch(`${BASE_URL}${title}`, {method: 'GET'})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    console.log(response)
    return response.json();
  });