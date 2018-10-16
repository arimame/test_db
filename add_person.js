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

var args = process.argv;
var firstname = args[2];
var lastname = args[3];
var birthdate = args[4];


knex('famous_people')
  .insert({first_name: firstname, last_name: lastname, birthdate: birthdate}).then();
  //must put then to make it run



