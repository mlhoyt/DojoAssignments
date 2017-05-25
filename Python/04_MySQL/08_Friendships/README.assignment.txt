# -*- text -*-

Assignment: Friendships

Using the attached ERD, write the SQL query that returns a list of users along with their friends' names.

Create the tables and populate them with some fake data.  Your results should look like below:

    first_name  last_name  friend_first_name  friend_last_name
    Chris       Baker      Jessica            Davidson
    Chris       Baker      James              Johnson
    Chris       Baker      Diana              Smith
    Diana       Smith      Chris              Baker
    James       Johnson    Chris              Baker
    Jessica     Davidson   Chris              Baker

Your actual query will look something similar to this:

    SELECT *
    FROM users 
    LEFT JOIN friendships ON ___ = ___ 
    LEFT JOIN users as user2 ON ___ = ___

Take note that we're joining the users table again but we're specifying the second users table as user2.
You can then reference the second users by calling user2 (e.g. user2.id, user2.first_name, etc).  

You can also rename the fields that are displayed on the result by using the AS keyword, like the below example:   

    SELECT
        user2.first_name AS friend_first_name,
        user2.last_name AS friend_last_name
        ...
    FROM ...

Knowing how to do joins can be tricky but is used quite often and will most likely appear again in your belt exam.

Note: The order which we return the results is alphabetical by friend_last_name.

