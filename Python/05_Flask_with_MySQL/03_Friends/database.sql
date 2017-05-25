/* -*- sql -*- */

CREATE DATABASE friends;

USE friends;

CREATE TABLE friends (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  age INT NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO friends VALUES
(1,'Jay Patel', 190, '2015-01-15 07:01:02', '2015-01-15 07:01:02'),
(2,'Brendan Stanton', 175, '2015-06-19 08:03:04', '2015-06-19 08:03:04'),
(3,'Eli Byers', 120, '2016-08-12 11:56:08', '2016-08-12 11:56:08'),
(4,'Anna Propas', 98, '1987-05-03 13:12:34', '1987-05-03 13:12:34')
;

