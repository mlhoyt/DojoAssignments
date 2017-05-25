/* -*- sql -*- */

CREATE DATABASE 7_Wall;

USE 7_Wall;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(40) NOT NULL,
  salt VARCHAR(40) NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO users (id, first_name, last_name, email, password, salt, created_at, updated_at)
VALUES
(1,'Michael','Choi','mchoi@codingdojo.co','d554cd79bb09a064e714146fcdf9593e','28d0e694c86f0c47ecd910a0348130',NOW(),NOW()),
(2,'Corey','Whiteland','cwhiteland@codingdojo.co','d554cd79bb09a064e714146fcdf9593e','28d0e694c86f0c47ecd910a0348130',NOW(),NOW()),
(3,'Ab','Cde','AbCde@f.x','d554cd79bb09a064e714146fcdf9593e','28d0e694c86f0c47ecd910a0348130',NOW(),NOW()),
;

/*
raw passwd: 1password
salt: 28d0e694c86f0c47ecd910a0348130
passwd: d554cd79bb09a064e714146fcdf9593e
*/
/*
raw passwd: 2password
salt: cb52189918385519677cdff03a0012
passwd: ea9b64123c0bed77a641fbef723a9fb6
*/
/*
raw passwd: password1
salt: 45e9ae8382bdd321174a89d3091dc3
passwd: 6e8a2346251bb05cf6bf7773501a5997
*/

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  message TEXT,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  PRIMARY KEY (id),
  KEY `fk_users_id` (`user_id`),
  CONSTRAINT `fk_users_id_cstr` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

INSERT INTO messages (id, user_id, message, created_at, updated_at)
VALUES
(1,2,'This is my message.  This is my message.  This is my message.  This is my message.  This is my message.  This is my message.  This is my message.  This is my message.  This is my message.  This is my message.','2013-01-01 08:01:23','2013-01-01 08:01:23'),
(2,2,'This is my message.  This is my message.  This is my message.  This is my message.  This is my message.  This is my message.  This is my message.  This is my message.  This is my message.  This is my message.','2013-01-15 18:45:01','2013-01-15 18:45:01'),
(3,1,'This is my message.  This is my message.  This is my message.  This is my message.  This is my message.  This is my message.  This is my message.  This is my message.  This is my message.  This is my message.','2013-01-23 13:24:35','2013-01-23 13:24:35')
;

CREATE TABLE comments (
  id INT NOT NULL AUTO_INCREMENT,
  message_id INT NOT NULL,
  user_id INT NOT NULL,
  comment TEXT,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  PRIMARY KEY (id),
  KEY `fk_comments_messages_id` (`message_id`),
  CONSTRAINT `fk_comments_messages_id_cstr` FOREIGN KEY (`message_id`) REFERENCES `messages` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  KEY `fk_comments_users_id` (`user_id`),
  CONSTRAINT `fk_comments_users_id_cstr` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

INSERT INTO users (id, first_name, last_name, email, password, salt, created_at, updated_at)
VALUES
(4,'Victor','Tran','Victor_Tran@codingdojo.co','d554cd79bb09a064e714146fcdf9593e','28d0e694c86f0c47ecd910a0348130',NOW(),NOW()),
(5,'Eva','Roa','Eva_Roa@codingdojo.co','d554cd79bb09a064e714146fcdf9593e','28d0e694c86f0c47ecd910a0348130',NOW(),NOW())
;

INSERT INTO comments (id, message_id, user_id, comment, created_at, updated_at)
VALUES
(1,2,4,'This is a comment.  This is a comment.  This is a comment.  This is a comment.  This is a comment.','2013-02-01 01:23:45','2013-02-01 01:23:45'),
(2,3,4,'This is a comment.  This is a comment.  This is a comment.  This is a comment.  This is a comment.','2013-02-01 12:34:50','2013-02-01 12:34:50'),
(3,3,5,'This is a comment.  This is a comment.  This is a comment.  This is a comment.  This is a comment.','2013-02-03 23:45:01','2013-02-03 23:45:01')
;
