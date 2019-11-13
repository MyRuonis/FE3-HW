import axios from 'axios';
import { setMostPopularMovies, setGenres } from './actions';
import { endpoints } from './config';

export const getMostPopularMovies = ($genre = -1) => (dispatch) => {
    if($genre === -1) {
        axios
            .get(endpoints.mostPopularMovies())
            .then((data) => {
                dispatch(setMostPopularMovies(data.data.results));
            });
    }
    else {
        axios
            .get(endpoints.genreMovies($genre))
            .then((data) => {
                dispatch(setMostPopularMovies(data.data.results));
            });
    }
};

export const getGenres = () => (dispatch) => {
    axios
        .get(endpoints.genres())
        .then((data) => {
            dispatch(setGenres(data.data.genres));
        });
};
