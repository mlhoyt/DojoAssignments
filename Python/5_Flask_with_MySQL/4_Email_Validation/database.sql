/* -*- sql -*- */

CREATE DATABASE emails;

USE emails;

CREATE TABLE emails (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO emails VALUES
(1,'michael@codingdojo.co', '2013-06-24 07:01:02', '2013-06-24 07:01:02'),
(2,'dexter@codingdojo.co', '2013-06-22 08:03:04', '2013-06-22 08:03:04'),
(3,'eylem@codingdojo.co', '2013-06-20 11:56:08', '2013-06-20 11:56:08')
;
