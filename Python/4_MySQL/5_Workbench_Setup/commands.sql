/* -*- sql -*- */

/* imported provided twitter.sql file */

SELECT * FROM users;
SELECT * FROM faves;
SELECT * FROM follows;
SELECT * FROM tweets;
SELECT *
FROM users
WHERE first_name LIKE "%e"
ORDER BY birthday DESC;
SELECT * FROM tweets JOIN users ON users.id = tweets.user_id  WHERE users.id = 1;
SELECT tweets.tweet FROM tweets JOIN users ON users.id = tweets.user_id  WHERE users.id = 1;
SELECT tweets.tweet AS kobe_tweets FROM tweets JOIN users ON users.id = tweets.user_id  WHERE users.id = 1;
SELECT users.first_name, tweets.tweet FROM faves LEFT JOIN tweets ON tweets.id = faves.tweet_id LEFT JOIN users ON users.id = faves.user_id WHERE faves.user_id = 2;
SELECT users.first_name, tweets.tweet FROM faves LEFT JOIN tweets ON tweets.id = faves.tweet_id LEFT JOIN users ON users.id = faves.user_id WHERE faves.user_id = 1 OR faves.user_id = 2;

