import { combineReducers } from 'redux';

const initialState = {
  showCards: true,
};

const componentState = (state = initialState, action) => {
  switch (action.type) {
    case 'toggleCards': return {
      ...state,
      showCards: action.shouldShow,
    };
    default: return state;
  }
};

const initialStateOfCards = {
  mostPopular: [],
};

const cards = (state = initialStateOfCards, action) => {
  switch (action.type) {
    case 'setMostPopularMovies': return {
      ...state,
      mostPopular: action.list,
    };
    default: return state;
  }
};

const initialStateGenres = {
  genres: [],
}

const genres = (state = initialStateGenres, action) => {
  switch (action.type) {
    case 'setGenres': return {
      ...state,
      genres: action.list,
    };
    default: return state;
  }
};

const initHearted = [];

const hearted = (state = initHearted, action) => {
  switch (action.type) {
    case 'add': return {
      ...state,
      initHearted : initHearted.push(action.id),
    };
    case 'remove':
      for(var $i = 0; $i < initHearted.length; $i++) {
        if(initHearted[$i] === action.id)
        {
          for(var $j = $i+1; $j < initHearted.length; $j++)
          {
            initHearted[$j] = initHearted[$j-1];
          }
          initHearted.pop();
          break;
        }
      }

      return {
      ...state,
      initHearted,
    };
    default: return state;
  }
};

export const rootReducer = combineReducers({
  componentState,
  cards,
  genres,
  hearted,
});
