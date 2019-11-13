export const toggleCards = (shouldShow) => ({
  type: 'toggleCards',
  shouldShow,
});

export const setMostPopularMovies = (list) => ({
  type: 'setMostPopularMovies',
  list,
});

export const setGenres = (list) => ({
  type: 'setGenres',
  list,
});

export const addGenre = (id) => ({
  type: 'add',
  id,
});

export const removeGenre = (id) => ({
  type: 'remove',
  id,
});
