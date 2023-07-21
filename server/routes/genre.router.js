const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

/**
 * @api {get} /api/genre Get genres for all movies
 * @apiSuccess {Object[]} Each object associates a `genre` with a `movie_id`.
 *   A `genre_id` and a unique `id` for the relation included as well.
 */
router.get("/", (_, res) => {
  const queryString = `
    SELECT movies_genres.id, movie_id, genre_id, name FROM genres
    JOIN movies_genres ON genres.id = genre_id;
  `;
  pool
    .query(queryString)
    .then((result) => result.rows)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => handleError(error, res));
});

function handleError(error, res) {
  console.error(error);
  res.sendStatus(500);
}

module.exports = router;
