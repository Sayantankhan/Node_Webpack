'use strict'

var _ = require('lodash');
 
var people = [{
  "id": 1,
  "first_name": "Gilbert",
  "last_name": "Ridd",
  "email": "gridd0@cyberchimps.com",
  "gender": "Male",
  "ip_address": "173.192.38.159"
}, {
  "id": 2,
  "first_name": "Emmy",
  "last_name": "Bothie",
  "email": "ebothie1@addtoany.com",
  "gender": "Male",
  "ip_address": "138.153.150.70"
}, {
  "id": 3,
  "first_name": "Tanney",
  "last_name": "Pratte",
  "email": "tpratte2@gravatar.com",
  "gender": "Male",
  "ip_address": "20.253.80.214"
}, {
  "id": 4,
  "first_name": "Elbertina",
  "last_name": "Pigrome",
  "email": "epigrome3@umich.edu",
  "gender": "Female",
  "ip_address": "31.130.75.27"
}, {
  "id": 5,
  "first_name": "Karry",
  "last_name": "Meadus",
  "email": "kmeadus4@networkadvertising.org",
  "gender": "Female",
  "ip_address": "15.90.225.237"
}, {
  "id": 6,
  "first_name": "Aaron",
  "last_name": "De la Yglesias",
  "email": "adelayglesias5@smugmug.com",
  "gender": "Male",
  "ip_address": "201.41.112.31"
}, {
  "id": 7,
  "first_name": "Clerc",
  "last_name": "Sizland",
  "email": "csizland6@amazonaws.com",
  "gender": "Male",
  "ip_address": "221.95.205.121"
}, {
  "id": 8,
  "first_name": "Dalston",
  "last_name": "Volett",
  "email": "dvolett7@ucoz.com",
  "gender": "Male",
  "ip_address": "134.165.40.100"
}, {
  "id": 9,
  "first_name": "Meredithe",
  "last_name": "Inkster",
  "email": "minkster8@netlog.com",
  "gender": "Female",
  "ip_address": "160.18.64.43"
}, {
  "id": 10,
  "first_name": "Joshuah",
  "last_name": "Eagle",
  "email": "jeagle9@samsung.com",
  "gender": "Male",
  "ip_address": "33.244.198.5"
}];

var femaleCount = _.filter(people,{gender : "Female"}).length;
console.log(femaleCount);
