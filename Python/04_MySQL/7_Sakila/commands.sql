/* -*- sql -*-

/* ---------------------------------------------------------------------- */

/*
1. What query would you run to get:
  - all the customers inside city_id = 312?
  Your query should return:
  - customer first name
  - last name
  - email
  - address
*/

SELECT
	address.city_id,
    city.city,
    customer.first_name,
    customer.last_name,
    customer.email,
    address.address
FROM customer
INNER JOIN address ON customer.address_id = address.address_id
INNER JOIN city ON address.city_id = city.city_id
WHERE address.city_id = 312
;

/*
'312','London','MATTIE','HOFFMAN','MATTIE.HOFFMAN@sakilacustomer.org','1497 Yuzhou Drive'
'312','London','CECIL','VINES','CECIL.VINES@sakilacustomer.org','548 Uruapan Street'
*/

/* ---------------------------------------------------------------------- */

/*
2. What query would you run to get:
  - all comedy films?
  Your query should return:
  - film title
  - description
  - release year
  - rating
  - special features
  - genre (category)
*/

SELECT
  film.title,
  film.description,
  film.release_year,
  film.rating,
  film.special_features,
  category.name
FROM film
INNER JOIN film_category ON film.film_id = film_category.film_id
INNER JOIN category ON film_category.category_id = category.category_id
WHERE category.name = 'Comedy'
;

/*
'AIRPLANE SIERRA','A Touching Saga of a Hunter And a Butler who must Discover a Butler in A Jet Boat',2006,'PG-13','Trailers,Deleted Scenes','Comedy'
'ANTHEM LUKE','A Touching Panorama of a Waitress And a Woman who must Outrace a Dog in An Abandoned Amusement Park',2006,'PG-13','Deleted Scenes,Behind the Scenes','Comedy'
'BRINGING HYSTERICAL','A Fateful Saga of a A Shark And a Technical Writer who must Find a Woman in A Jet Boat',2006,'PG','Trailers','Comedy'
'CAPER MOTIONS','A Fateful Saga of a Moose And a Car who must Pursue a Woman in A MySQL Convention',2006,'G','Trailers,Commentaries,Deleted Scenes','Comedy'
'CAT CONEHEADS','A Fast-Paced Panorama of a Girl And a A Shark who must Confront a Boy in Ancient India',2006,'G','Commentaries,Deleted Scenes','Comedy'
...
*/

/* ---------------------------------------------------------------------- */

/*
3. What query would you run to get:
  - all the films joined by actor_id=5?
  Your query should return:
  - actor id
  - actor name
  - film title
  - description
  - release year
*/

SELECT
	actor.actor_id,
    actor.first_name,
    actor.last_name,
    film.title,
    film.description,
    film.release_year
FROM film
INNER JOIN film_actor ON film.film_id = film_actor.film_id
INNER JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.actor_id = 5
;

/*
'5','JOHNNY','LOLLOBRIGIDA','AMADEUS HOLY','A Emotional Display of a Pioneer And a Technical Writer who must Battle a Man in A Baloon',2006
'5','JOHNNY','LOLLOBRIGIDA','BANGER PINOCCHIO','A Awe-Inspiring Drama of a Car And a Pastry Chef who must Chase a Crocodile in The First Manned Space Station',2006
'5','JOHNNY','LOLLOBRIGIDA','BONNIE HOLOCAUST','A Fast-Paced Story of a Crocodile And a Robot who must Find a Moose in Ancient Japan',2006
'5','JOHNNY','LOLLOBRIGIDA','CHITTY LOCK','A Boring Epistle of a Boat And a Database Administrator who must Kill a Sumo Wrestler in The First Manned Space Station',2006
'5','JOHNNY','LOLLOBRIGIDA','COMMANDMENTS EXPRESS','A Fanciful Saga of a Student And a Mad Scientist who must Battle a Hunter in An Abandoned Mine Shaft',2006
...
*/

/* ---------------------------------------------------------------------- */

/*
4. What query would you run to get:
  - all the customers in store_id = 1 and inside these cities (1, 42, 312 and 459)?
  Your query should return:
  - customer first name
  - last name
  - email
  - address
*/

SELECT
  customer.store_id,
  address.city_id,
  customer.first_name,
  customer.last_name,
  customer.email,
  address.address
FROM customer
INNER JOIN address ON customer.address_id = address.address_id
WHERE customer.store_id = 1 AND address.city_id IN ('1', '42', '312', '459')
;

/*
'1','1','JULIE','SANCHEZ','JULIE.SANCHEZ@sakilacustomer.org','939 Probolinggo Loop'
'1','42','SCOTT','SHELLEY','SCOTT.SHELLEY@sakilacustomer.org','587 Benguela Manor'
'1','312','CECIL','VINES','CECIL.VINES@sakilacustomer.org','548 Uruapan Street'
'1','459','NELSON','CHRISTENSON','NELSON.CHRISTENSON@sakilacustomer.org','1764 Jalib al-Shuyukh Parkway'
*/

/* ---------------------------------------------------------------------- */

/*
5. What query would you run to get
  - all the films with a "rating = G" and "special feature = behind the scenes", joined by actor_id = 15?
  Your query should return:
  - film title
  - description
  - release year
  - rating
  - special feature
  Hint: You may use LIKE function in getting the 'behind the scenes' part.
*/

SELECT
  film.title,
  film.description,
  film.release_year,
  film.rating,
  film.special_features
FROM film
INNER JOIN film_actor ON film.film_id = film_actor.film_id
WHERE rating = 'G' AND special_features LIKE '%behind the scenes%' AND film_actor.actor_id = 15
;

/*
'BORROWERS BEDAZZLED','A Brilliant Epistle of a Teacher And a Sumo Wrestler who must Defeat a Man in An Abandoned Fun House',2006,'G','Commentaries,Deleted Scenes,Behind the Scenes'
'NOON PAPI','A Unbelieveable Character Study of a Mad Scientist And a Astronaut who must Find a Pioneer in A Manhattan Penthouse',2006,'G','Behind the Scenes'
'WEREWOLF LOLA','A Fanciful Story of a Man And a Sumo Wrestler who must Outrace a Student in A Monastery',2006,'G','Trailers,Behind the Scenes'
*/

/* ---------------------------------------------------------------------- */

/*
6. What query would you run to get:
  - all the actors that joined in the film_id = 369?
  Your query should return:
  - film_id
  - title
  - actor_id
  - actor_name
*/

SELECT
  film.film_id,
  film.title,
  film_actor.actor_id,
  CONCAT_WS(' ', actor.first_name, actor.last_name) AS actor_name
FROM film
INNER JOIN film_actor ON film.film_id = film_actor.film_id
INNER JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.film_id = 369
;

/*
'369','GOODFELLAS SALUTE','2','NICK WAHLBERG'
'369','GOODFELLAS SALUTE','5','JOHNNY LOLLOBRIGIDA'
'369','GOODFELLAS SALUTE','22','ELVIS MARX'
'369','GOODFELLAS SALUTE','83','BEN WILLIS'
'369','GOODFELLAS SALUTE','107','GINA DEGENERES'
'369','GOODFELLAS SALUTE','110','SUSAN DAVIS'
'369','GOODFELLAS SALUTE','126','FRANCES TOMEI'
'369','GOODFELLAS SALUTE','197','REESE WEST'
*/

/* ---------------------------------------------------------------------- */

/*
7. What query would you run to get:
  - all drama films with a rental rate of 2.99?
  Your query should return:
  - film title
  - description
  - release year
  - rating
  - special features
  - genre (category)
*/

SELECT
  film.title,
  film.description,
  film.release_year,
  film.rating,
  film.special_features,
  category.name
FROM film
INNER JOIN film_category ON film.film_id = film_category.film_id
INNER JOIN category ON film_category.category_id = category.category_id
WHERE category.name = 'Drama' AND film.rental_rate = 2.99
;

/*
'APOLLO TEEN','A Action-Packed Reflection of a Crocodile And a Explorer who must Find a Sumo Wrestler in An Abandoned Mine Shaft',2006,'PG-13','Trailers,Commentaries,Deleted Scenes,Behind the Scenes','Drama'
'BUNCH MINDS','A Emotional Story of a Feminist And a Feminist who must Escape a Pastry Chef in A MySQL Convention',2006,'G','Behind the Scenes','Drama'
'CHITTY LOCK','A Boring Epistle of a Boat And a Database Administrator who must Kill a Sumo Wrestler in The First Manned Space Station',2006,'G','Commentaries','Drama'
'DARKNESS WAR','A Touching Documentary of a Husband And a Hunter who must Escape a Boy in The Sahara Desert',2006,'NC-17','Deleted Scenes,Behind the Scenes','Drama'
'DIARY PANIC','A Thoughtful Character Study of a Frisbee And a Mad Cow who must Outgun a Man in Ancient India',2006,'G','Commentaries,Behind the Scenes','Drama'
...
*/

/* ---------------------------------------------------------------------- */

/*
8. What query would you run to get:
  - all the action films which are joined by SANDRA KILMER?
  Your query should return:
  - film title
  - description
  - release year
  - rating
  - special features
  - genre (category)
  - actor's first name
  - actor's last name
*/

SELECT
  film.title,
  film.description,
  film.release_year,
  film.rating,
  film.special_features,
  category.name AS genre,
  CONCAT_WS(' ', actor.first_name, actor.last_name) AS actor_name
FROM film
INNER JOIN film_actor ON film.film_id = film_actor.film_id
INNER JOIN actor ON film_actor.actor_id = actor.actor_id
INNER JOIN film_category ON film.film_id = film_category.film_id
INNER JOIN category ON film_category.category_id = category.category_id
WHERE category.name = "Action" AND actor.first_name LIKE "sandra" AND actor.last_name LIKE "kilmer"
;

/*
'BULL SHAWSHANK','A Fanciful Drama of a Moose And a Squirrel who must Conquer a Pioneer in The Canadian Rockies',2006,'NC-17','Deleted Scenes','Action','SANDRA KILMER'
'DARN FORRESTER','A Fateful Story of a A Shark And a Explorer who must Succumb a Technical Writer in A Jet Boat',2006,'G','Deleted Scenes','Action','SANDRA KILMER'
'MAGNOLIA FORRESTER','A Thoughtful Documentary of a Composer And a Explorer who must Conquer a Dentist in New Orleans',2006,'PG-13','Trailers,Commentaries,Deleted Scenes','Action','SANDRA KILMER'
*/
