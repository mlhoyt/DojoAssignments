/* -*- sql -*- */

SELECT
  users.first_name,
  users.last_name,
  friends.first_name AS friend_first_name,
  friends.last_name AS friend_last_name
FROM users
INNER JOIN friendships ON users.id = friendships.user_id
INNER JOIN users AS friends ON friendships.friend_id = friends.id
ORDER BY friend_last_name
;

/*
first_name  last_name  friend_first_name  friend_last_name
Chris       Baker      Jessica            Davidson
Chris       Baker      James              Johnson
Chris       Baker      Diana              Smith
Diana       Smith      Chris              Baker
James       Johnson    Chris              Baker
Jessica     Davidson   Chris              Baker
*/
