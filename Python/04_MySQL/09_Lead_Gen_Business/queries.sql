/* -*- sql -*- */

/* ---------------------------------------------------------------------- */

/*
1. What query would you run to get:
  - the total revenue for March of 2012?
*/

SELECT SUM(amount)
FROM billing
WHERE DATE_FORMAT(charged_datetime, '%Y-%m') = '2012-03'
ORDER BY charged_datetime
;

/*
'35646'
*/

/* ---------------------------------------------------------------------- */

/*
2. What query would you run to get:
  - total revenue collected from the client with an id of 2?
*/

SELECT SUM(amount)
FROM billing
WHERE client_id = 2
ORDER BY charged_datetime
;

/*
'18639'
*/

/* ---------------------------------------------------------------------- */

/*
3. What query would you run to get:
  - all the sites that client=10 owns?
*/

SELECT sites.domain_name
FROM clients
INNER JOIN sites ON clients.client_id = sites.client_id
WHERE clients.client_id = 10
;

/*
'searchcomputers.com'
'rogers.com'
*/

/* ---------------------------------------------------------------------- */

/*
4. What query would you run to get:
  - total # of sites created per month per year for the client with an id of 1?
  - what about for client=20?
*/

SELECT DATE_FORMAT(created_datetime, '%Y-%m') AS created_date, COUNT(*)
FROM sites
WHERE client_id = 1
GROUP BY created_date
ORDER BY created_datetime
;

/*
'2010-11','1'
'2011-04','1'
'2011-09','1'
'2011-12','1'
'2012-11','1'
*/

SELECT DATE_FORMAT(created_datetime, '%Y-%m') AS created_date, COUNT(*)
FROM sites
WHERE client_id = 20
GROUP BY created_date
ORDER BY created_datetime
;

/*
'2011-10','1'
*/

/* ---------------------------------------------------------------------- */

/*
5. What query would you run to get:
  - the total # of leads generated for each of the sites between January 1, 2011 to February 15, 2011?
*/

SELECT
	sites.site_id,
    sites.domain_name,
    COUNT(leads.leads_id) AS num_leads,
    DATE_FORMAT(leads.registered_datetime, '%Y-%m-%d')
FROM sites
INNER JOIN leads ON sites.site_id = leads.site_id
WHERE DATE_FORMAT(leads.registered_datetime, '%Y-%m') >= '2011-01' AND DATE_FORMAT(leads.registered_datetime, '%Y-%m-%d') <= '2011-02-15'
GROUP BY sites.site_id
ORDER BY sites.site_id, leads.registered_datetime
;

/*
'1','market.com','1','2011-01-13'
'3','ehow.com','1','2011-01-01'
'5','searchphilippines.com','1','2011-02-11'
*/

/* ---------------------------------------------------------------------- */

/*
6. What query would you run to get:
  - a list of client names and the total # of leads generated for each client between January 1, 2011 to December 31, 2011?
*/

SELECT
  clients.client_id,
  CONCAT_WS(' ', clients.first_name, clients.last_name) AS client_name,
  COUNT(leads.leads_id) AS num_leads
FROM clients
INNER JOIN sites ON clients.client_id = sites.client_id
INNER JOIN leads ON sites.site_id = leads.site_id
WHERE DATE_FORMAT(leads.registered_datetime, '%Y') = '2011'
GROUP BY clients.client_id
;

/*
'1','Michael Choi','8'
'2','Joe Smith','6'
'3','Ryan Owen','9'
'4','Masaki Fujimuto','7'
'5','Diana Sue Manlulu','2'
'6','John Supsupin','4'
'7','Toni Rose Panganiban','7'
'8','Maria Gonzales','5'
'9','Tom Owen','7'
'10','Roosevelt Sebial','3'
'12','Shafira Hansen','3'
'14','Erica Suarez','4'
'15','Ferdinand Schmidt','3'
'16','Callie Poole','4'
'18','Alexa Schroeder','2'
*/

/* ---------------------------------------------------------------------- */

/*
7. What query would you run to get:
  - a list of client names and the total # of leads generated for each client each month between months 1 - 6 of Year 2011?
*/

SELECT
  CONCAT_WS(' ', clients.first_name, clients.last_name) AS client_name,
  COUNT(sites.client_id) AS leads_per_client,
	DATE_FORMAT(leads.registered_datetime, '%M') AS month_generated
FROM clients
INNER JOIN sites ON clients.client_id = sites.client_id
INNER JOIN leads ON sites.site_id = leads.site_id
WHERE DATE_FORMAT(leads.registered_datetime, '%Y') = '2011' AND DATE_FORMAT(leads.registered_datetime, '%m') >= 1 AND DATE_FORMAT(leads.registered_datetime, '%m') <= 6
GROUP BY month_generated, sites.client_id
ORDER BY DATE_FORMAT(leads.registered_datetime, '%m'), clients.last_name, clients.first_name
;

/*
'Michael Choi','1','January'
'Diana Sue Manlulu','1','January'
'Tom Owen','1','February'
'Diana Sue Manlulu','1','March'
'John Supsupin','1','March'
'Ryan Owen','1','April'
'Masaki Fujimuto','1','May'
'Toni Rose Panganiban','1','May'
'John Supsupin','1','May'
'Toni Rose Panganiban','1','June'
*/

/* ---------------------------------------------------------------------- */

/*
8. What query would you run to get:
  - a list of client names and the total # of leads generated for each of client's sites between January 1, 2011 to December 31, 2011?
  Order this query by client id.
  Come up with a second query that shows:
  - all the clients, the site name(s), and the total number of leads generated from each site for all time.
*/

SELECT
  CONCAT_WS(' ', clients.first_name, clients.last_name) AS client_name,
  sites.domain_name,
  COUNT(leads.leads_id) AS number_of_leads
FROM clients
INNER JOIN sites ON clients.client_id = sites.client_id
INNER JOIN leads ON sites.site_id = leads.site_id
WHERE DATE_FORMAT(leads.registered_datetime, '%Y') = '2011'
GROUP BY sites.site_id
ORDER BY clients.client_id
;

/*
'Michael Choi','market.com','4'
'Michael Choi','youtube.com','1'
'Michael Choi','assignmentworld.com','2'
'Michael Choi','serrano.com','1'
'Joe Smith','reyes.com','2'
'Joe Smith','fox.com','1'
'Joe Smith','olson.com','2'
'Joe Smith','connectme.com','1'
'Ryan Owen','searchhomes.com','3'
'Ryan Owen','family.com','1'
'Ryan Owen','finalsite.com','3'
'Ryan Owen','decker.com','2'
'Masaki Fujimuto','cryshinjohn.com','2'
'Masaki Fujimuto','help.com','4'
'Masaki Fujimuto','loans.com','1'
'Diana Sue Manlulu','ehow.com','1'
'Diana Sue Manlulu','olx.com','1'
'John Supsupin','uptownzone.com','1'
'John Supsupin','massey.com','1'
'John Supsupin','keepvid.com','2'
'Toni Rose Panganiban','timespace.com','2'
'Toni Rose Panganiban','atech.com','5'
'Maria Gonzales','warcraft.com','1'
'Maria Gonzales','duran.com','2'
'Maria Gonzales','homes.com','2'
'Tom Owen','searchphilippines.com','2'
'Tom Owen','yestogod.com','5'
'Roosevelt Sebial','rogers.com','2'
'Roosevelt Sebial','searchcomputers.com','1'
'Shafira Hansen','phillips.com','2'
'Shafira Hansen','valencia.com','1'
'Erica Suarez','rodgers.com','1'
'Erica Suarez','hester.com','3'
'Ferdinand Schmidt','marquez.com','3'
'Callie Poole','mcmahon.com','1'
'Callie Poole','webb.com','3'
'Alexa Schroeder','baird.com','2'
*/

SELECT
  CONCAT_WS(' ', clients.first_name, clients.last_name) AS client_name,
  sites.domain_name,
  COUNT(leads.leads_id) AS number_of_leads
FROM clients
INNER JOIN sites ON clients.client_id = sites.client_id
INNER JOIN leads ON sites.site_id = leads.site_id
GROUP BY sites.site_id
ORDER BY clients.client_id
;

/*
'Michael Choi','market.com','13'
'Michael Choi','youtube.com','8'
'Michael Choi','serrano.com','3'
'Michael Choi','assignmentworld.com','5'
'Michael Choi','drake.com','6'
'Joe Smith','connectme.com','4'
'Joe Smith','fox.com','7'
'Joe Smith','flipfly.com','5'
'Joe Smith','waters.com','5'
'Joe Smith','reyes.com','7'
'Joe Smith','olson.com','6'
'Ryan Owen','family.com','10'
'Ryan Owen','decker.com','9'
'Ryan Owen','searchhomes.com','6'
'Ryan Owen','finalsite.com','7'
...
*/

/* ---------------------------------------------------------------------- */

/*
9. Write a single query that retrieves:
  - total revenue collected from each client for each month of the year.
  Order it by client id.
*/

SELECT
  CONCAT_WS(' ', clients.first_name, clients.last_name) AS client_name,
  SUM(billing.amount) AS total_revenue,
  DATE_FORMAT(billing.charged_datetime, '%M') AS month_charged,
  DATE_FORMAT(billing.charged_datetime, '%Y') AS year_charged
FROM clients
INNER JOIN billing ON clients.client_id = billing.client_id
GROUP BY clients.client_id, DATE_FORMAT(billing.charged_datetime, '%Y-%m')
ORDER BY clients.client_id, DATE_FORMAT(billing.charged_datetime, '%Y-%m')
;

/*
'Michael Choi','300','January','2011'
'Michael Choi','5000','April','2011'
'Michael Choi','450','September','2011'
'Michael Choi','4052','October','2011'
'Michael Choi','6629','March','2012'
'Michael Choi','5904','May','2012'
'Michael Choi','1776','September','2012'
'Joe Smith','1000','April','2011'
'Joe Smith','900','June','2011'
'Joe Smith','3600','January','2012'
'Joe Smith','3795','April','2012'
'Joe Smith','1117','May','2012'
'Joe Smith','5952','July','2012'
'Joe Smith','2275','August','2012'
'Ryan Owen','500','January','2011'
'Ryan Owen','5200','July','2011'
'Ryan Owen','3217','September','2011'
'Ryan Owen','1409','May','2012'
...
*/

/* ---------------------------------------------------------------------- */

/*
10. Write a single query that retrieves:
  - all the sites that each client owns.
  Group the results so that each row shows a new client.
  It will become clearer when you add a new field called 'sites' that has all the sites that the client owns.
  (HINT: use GROUP_CONCAT)
*/

SELECT
  CONCAT_WS(' ', clients.first_name, clients.last_name) AS client_name,
  GROUP_CONCAT(sites.domain_name SEPARATOR ' / ') AS sites
FROM clients
INNER JOIN sites ON clients.client_id = sites.client_id
GROUP BY clients.client_id
;

/*
'Michael Choi','market.com / youtube.com / serrano.com / assignmentworld.com / drake.com'
'Joe Smith','flipfly.com / waters.com / fox.com / connectme.com / reyes.com / olson.com'
'Ryan Owen','finalsite.com / family.com / searchhomes.com / decker.com'
'Masaki Fujimuto','cryshinjohn.com / loans.com / help.com'
'Diana Sue Manlulu','floyd.com / ehow.com / olx.com / alexander.com'
'John Supsupin','keepvid.com / byers.com / searchvillage.com / uptownzone.com / massey.com / park.com'
'Toni Rose Panganiban','lamb.com / timespace.com / atech.com / searchcoronado.com'
'Maria Gonzales','homes.com / warcraft.com / duran.com'
'Tom Owen','searchphilippines.com / yestogod.com'
'Roosevelt Sebial','rogers.com / searchcomputers.com'
'Alvin Malone','lowe.com'
'Shafira Hansen','johnston.com / phillips.com / valencia.com'
'Erica Suarez','hester.com / rodgers.com'
'Ferdinand Schmidt','marquez.com / hopkins.com / albert.com'
'Callie Poole','mcmahon.com / webb.com'
'Alexa Schroeder','jarvis.com / collier.com / baird.com'
'Francis Walsh','alston.com'
'Caesar Stewart','wright.com'
*/
