/* -*- sql -*- */

CREATE DATABASE  IF NOT EXISTS `books`;

USE `books`;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
);

/* LOCK TABLES `books` WRITE; */

INSERT INTO 'books' VALUES
  (1,'user1','2017-05-14 06:54:32','2017-05-14 06:65:32')
  (2,'User2','2017-05-14 07:12:34','2017-05-14 07:23:45')
  (3,'USER3','2017-05-14 09:57:31','2017-05-14 10:20:30')
  ;
