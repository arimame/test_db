
const pg = require("pg");
const settings = require("./settings"); // settings.json
//acessing the object below
var name = process.argv[2]

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

//connecting to database

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }


 famousLookup(name);
 console.log("Searching....")
});


function famousLookup (name) {
  client.query(`select first_name, last_name, birthdate::varchar from famous_people where first_name = $1::text`, [name], function (err, results) {
    console.log("Found " + results.rows.length + " person(s) by the name " + name);
    for (var i = 0; i < results.rows.length; i++) {
      console.log((i + 1) + ": " + results.rows[i].first_name + " " + results.rows[i].last_name + ", born " + results.rows[i].birthdate);
    }
  });
}