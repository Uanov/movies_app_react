const BASE_URL = 'http://localhost:3000';

const putMovieIntoDB = (movie) => {
  const {
    Title,
    Plot,
    Poster,
    imdbUrl,
    imdbID,
    imdbRating
  } = movie;

  fetch(`${BASE_URL}/auth/putNewMovie`,
    {
      method: 'POST',
      body: JSON.stringify({
        Title,
        Plot,
        Poster,
        imdbUrl,
        imdbID,
        imdbRating
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
};

export default putMovieIntoDB;
