/* -*- sql -*- */

CREATE DATABASE mydb;

USE mydb;

CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(45) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO users VALUES
(1,'Keith Hernandez'),
(2,'Wally Backman'),
(3,'Mookie Wilson'),
(4,'Ray Knight'),
(5,'Gary Carter'),
(6,'Howard Johnson'),
(7,'Len Dykstra'),
(8,'Daryl Strawberry'),
(9,'Dwight Gooden')
;
