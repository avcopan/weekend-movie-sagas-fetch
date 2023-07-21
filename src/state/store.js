import { configureStore, createSlice } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";

// create slices/reducers
export const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    setMovies: (_, action) => {
      return action.payload;
    },
  },
});

export const setMoviesAction = moviesSlice.actions.setMovies;

export const genresSlice = createSlice({
  name: "genres",
  initialState: [],
  reducers: {
    setGenres: (_, action) => {
      return action.payload;
    },
  },
});

export const setGenresAction = genresSlice.actions.setGenres;

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

// create store
export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    genres: genresSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// create sagas
const GET_MOVIES = "GET_MOVIES";

// - saga: getMovies
function* getMovies() {
  try {
    const response = yield fetch("/api/movie");
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const movies = yield response.json();
    yield put(setMoviesAction(movies));
  } catch {
    console.log("get all error");
    alert("Something went wrong.");
  }
}

export const getMoviesAction = () => {
  return { type: GET_MOVIES };
};

// combine sagas into one watcher saga
function* watcherSaga() {
  yield takeEvery(GET_MOVIES, getMovies);
}

// run the watcher saga in the saga middleware
sagaMiddleware.run(watcherSaga);
