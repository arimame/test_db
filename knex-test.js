
const settings = require("./settings"); // settings.json
//acessing the object below

const config = {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.sslgit
};

const knex = require('knex')({
  client: 'pg',
  connection: config
})

var name = process.argv[2]

// General Select Query
knex.from('famous_people')
.select('first_name', 'last_name', 'birthdate')
.where({ first_name: name})
.then(function(rows) {
  console.log("Found " + rows.length + " person(s) by the name " + name);
    for (var i = 0; i < rows.length; i++) {
     console.log((i + 1) + ": " + rows[i].first_name + " " + rows[i].last_name + ", born " + rows[i].birthdate);
    }
  return
})