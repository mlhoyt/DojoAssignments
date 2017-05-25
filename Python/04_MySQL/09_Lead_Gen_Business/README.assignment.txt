# -*- text -*-

Assignment: Lead Gen Business
Complete the below SQL queries using the attached database and ERD diagram.

Note
If you're ahead, we strongly encourage that you work on this assignment as this would really help you understand how GROUP BY work and how powerful MySQL could be. If you have already spent more than 2 full days studying ERD and MySQL, just skip this assignment and come back later when you're done with the bootcamp.

If you already have a database called lead-gen-business, drop that database and recreate by importing the lead-gen-business-new.sql file. The database that is created will be different than the one in the morepractice.sql file that we used during the videos.

Queries
1. What query would you run to get the total revenue for March of 2012?

2. What query would you run to get total revenue collected from the client with an id of 2?

3. What query would you run to get all the sites that client=10 owns?

4. What query would you run to get total # of sites created per month per year for the client with an id of 1? What about for client=20?

5. What query would you run to get the total # of leads generated for each of the sites between January 1, 2011 to February 15, 2011?

6. What query would you run to get a list of client names and the total # of leads we've generated for each of our clients between January 1, 2011 to December 31, 2011?

7. What query would you run to get a list of client names and the total # of leads we've generated for each client each month between months 1 - 6 of Year 2011?

8. What query would you run to get a list of client names and the total # of leads we've generated for each of our clients' sites between January 1, 2011 to December 31, 2011? Order this query by client id.  Come up with a second query that shows all the clients, the site name(s), and the total number of leads generated from each site for all time.

9. Write a single query that retrieves total revenue collected from each client for each month of the year. Order it by client id.

10. Write a single query that retrieves all the sites that each client owns. Group the results so that each row shows a new client. It will become clearer when you add a new field called 'sites' that has all the sites that the client owns. (HINT: use GROUP_CONCAT)

Note: You may download this PDF file displaying the expected results from the questions above - Expected Result (Leads)
