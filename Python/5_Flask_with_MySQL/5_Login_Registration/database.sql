/* -*- sql -*- */

CREATE DATABASE 5_Users_App;

USE 5_Users_App;

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
(1,'Ab','Cde','AbCde@f.x','d554cd79bb09a064e714146fcdf9593e','28d0e694c86f0c47ecd910a0348130',NOW(),NOW()),
(2,'Gh','Ijk','gh_ijk@l.y','ea9b64123c0bed77a641fbef723a9fb6','cb52189918385519677cdff03a0012', NOW(), NOW()),
(3,'Mn','Opq','Mn_Opq@r.z','6e8a2346251bb05cf6bf7773501a5997','45e9ae8382bdd321174a89d3091dc3',NOW(),NOW())
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
