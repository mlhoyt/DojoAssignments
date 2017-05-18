/* -*- sql -*- */

/* ---------------------------------------------------------------------- */

/*
1. What query would you run to get:
  - all the countries that speak Slovene?
Your query should return:
  - the name of the country
  - language
  - language percentage
Your query should arrange the result by:
  - language percentage in DESCENDING order
*/

SELECT countries.name AS country_name, languages.language AS language_name, languages.percentage AS language_percentage
FROM countries
INNER JOIN languages ON countries.id = languages.country_id
WHERE languages.language = 'Slovene'
ORDER BY language_percentage DESC
;

/*
country_name,language_name,language_percentage
'Slovenia','Slovene','87.9'
'Austria','Slovene','0.4'
'Italy','Slovene','0.2'
'Croatia','Slovene','0.0'
*/

/* ---------------------------------------------------------------------- */

/*
2. What query would you run to get:
  - the total number of cities for each country?
Your query should return:
  - the name of the country
  - the total number of cities
Your query should arrange the result by:
  - the number of cities in DESCENDING order
*/

SELECT countries.name AS country_name, COUNT(cities.name) AS num_cities
FROM cities
INNER JOIN countries ON countries.id = cities.country_id
GROUP BY countries.name
ORDER BY num_cities DESC
;

/*
country_name,num_cities
China,363
India,341
United States,274
Brazil,250
Japan,248
Russian Federation,189
Mexico,173
Phillipines,136
Germany,93
...
*/

/* ---------------------------------------------------------------------- */

/*
3. What query would you run to get:
  - all the cities in Mexico with a population of greater than 500,000?
Your query should arrange the result by:
  - population in DESCENDING order
*/

SELECT cities.name AS city_name, cities.population AS city_population
FROM cities
INNER JOIN countries ON countries.id = cities.country_id
WHERE countries.name = 'Mexico' AND cities.population > 500000
ORDER BY city_population DESC
;

/*
city_name,city_population
'Ciudad de MÃ©xico','8591309'
'Guadalajara','1647720'
'Ecatepec de Morelos','1620303'
'Puebla','1346176'
'NezahualcÃ³yotl','1224924'
'JuÃ¡rez','1217818'
'Tijuana','1212232'
'LeÃ³n','1133576'
'Monterrey','1108499'
...
*/

/* ---------------------------------------------------------------------- */

/*
4. What query would you run to get:
  - all languages in each country with a percentage greater than 89%?
Your query should arrange the result by:
  - percentage in DESCENDING order
*/

SELECT countries.name AS country_name, languages.language AS language_name, languages.percentage AS language_percentage
FROM countries
INNER JOIN languages ON countries.id = languages.country_id
WHERE languages.percentage > 89
ORDER BY language_percentage DESC
;

/*
'Grenada','Creole English','100.0'
'El Salvador','Spanish','100.0'
'Cuba','Spanish','100.0'
'Rwanda','Rwanda','100.0'
'San Marino','Italian','100.0'
'Bermuda','English','100.0'
'Cape Verde','Crioulo','100.0'
'Maldives','Dhivehi','100.0'
'Western Sahara','Arabic','100.0'
'Faroe Islands','Faroese','100.0'
'Haiti','Haiti Creole','100.0'
'Saint Kitts and Nevis','Creole English','100.0'
'Dominica','Creole English','100.0'
'South Korea','Korean','99.9'
'North Korea','Korean','99.9'
'Yemen','Arabic','99.6'
'Bosnia and Herzegovina','Serbo-Croatian','99.2'
'Japan','Japanese','99.1'
...
*/

/* ---------------------------------------------------------------------- */

/*
5. What query would you run to get:
  - all the countries with Surface Area below 501 and Population greater than 100,000?
*/

SELECT name AS country, surface_area, population
FROM countries
WHERE surface_area < 501 AND population > 100000
;

/*
'Aruba','193.00','103000'
'Barbados','430.00','270000'
'Macao','18.00','473000'
'Maldives','298.00','286000'
'Malta','316.00','380200'
'Mayotte','373.00','149000'
'Saint Vincent and the Grenadines','388.00','114000'
*/

/* ---------------------------------------------------------------------- */

/*
6. What query would you run to get:
  - countries with only Constitutional Monarchy with a capital greater than 200 and a life expectancy greater than 75 years?
*/

SELECT name, government_form, capital, life_expectancy
FROM countries
WHERE government_form = 'Constitutional Monarchy' AND capital > 200 AND life_expectancy > 75
;

/*
'Denmark','Constitutional Monarchy','3315','76.5'
'Spain','Constitutional Monarchy','653','78.8'
'United Kingdom','Constitutional Monarchy','456','77.7'
'Jamaica','Constitutional Monarchy','1530','75.2'
'Jordan','Constitutional Monarchy','1786','77.4'
'Japan','Constitutional Monarchy','1532','80.7'
'Liechtenstein','Constitutional Monarchy','2446','78.8'
'Luxembourg','Constitutional Monarchy','2452','77.1'
'Monaco','Constitutional Monarchy','2695','78.8'
'Norway','Constitutional Monarchy','2807','78.7'
'New Zealand','Constitutional Monarchy','3499','77.8'
'Sweden','Constitutional Monarchy','3048','79.6'
*/

/* ---------------------------------------------------------------------- */

/*
7. What query would you run to get:
  -  all the cities of Argentina inside the Buenos Aires district and have the population greater than 500, 000?
The query should return:
  - Country Name
  - City Name
  - District
  - Population
*/

SELECT countries.name AS country_name, cities.name AS city_name, cities.district AS district, cities.population AS city_population
FROM cities
INNER JOIN countries ON countries.id = cities.country_id
WHERE countries.name = 'Argentina' AND cities.district = 'Buenos Aires' AND cities.population > 500000
;

/*
country_name,city_name,district,city_population
'Argentina','La Matanza','Buenos Aires','1266461'
'Argentina','Lomas de Zamora','Buenos Aires','622013'
'Argentina','Quilmes','Buenos Aires','559249'
'Argentina','Almirante Brown','Buenos Aires','538918'
'Argentina','La Plata','Buenos Aires','521936'
'Argentina','Mar del Plata','Buenos Aires','512880'
*/

/* ---------------------------------------------------------------------- */

/*
8. What query would you run to get:
  - the number of countries in each region
The query should return:
  - name of the region
  - number of countries
Your query should arrange the result by
  - the number of countries in DESCENDING order
*/

SELECT countries.region, COUNT(countries.name) AS num_countries
FROM countries
GROUP BY countries.region
ORDER BY num_countries DESC
;

/*
'Caribbean','24'
'Eastern Africa','20'
'Middle East','18'
'Western Africa','17'
'Southern Europe','15'
'Southern and Central Asia','14'
'South America','14'
'Southeast Asia','11'
'Eastern Europe','10'
'Polynesia','10'
'Central Africa','9'
'Western Europe','9'
'Central America','8'
'Eastern Asia','8'
'Micronesia','7'
'Nordic Countries','7'
'Northern Africa','7'
'Antarctica','5'
'North America','5'
'Australia and New Zealand','5'
'Melanesia','5'
'Southern Africa','5'
'Baltic Countries','3'
'British Islands','2'
'Micronesia/Caribbean','1'
*/
