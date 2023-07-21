import axios from "axios";
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
//  1. get movies
const GET_MOVIES = "GET_MOVIES";

function* getMovies() {
  try {
    const res = yield axios.get("/api/movie");
    const movies = yield res.data;
    yield put(setMoviesAction(movies));
  } catch {
    console.log("get all error");
    alert("Something went wrong.");
  }
}

export const getMoviesAction = () => {
  return { type: GET_MOVIES };
};

//  1. get genres
const GET_GENRES = "GET_GENRES";

function* getGenres() {
  try {
    const res = yield axios.get("/api/genre");
    const genres = yield res.data;
    yield put(setGenresAction(genres));
  } catch {
    console.log("get all error");
    alert("Something went wrong.");
  }
}

export const getGenresAction = () => {
  return { type: GET_GENRES };
};

// combine sagas into one watcher saga
function* watcherSaga() {
  yield takeEvery(GET_MOVIES, getMovies);
  yield takeEvery(GET_GENRES, getGenres);
}

// run the watcher saga in the saga middleware
sagaMiddleware.run(watcherSaga);
