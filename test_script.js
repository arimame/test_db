module.exports = (function () {

const pg = require("pg");
const settings = require("./settings"); // settings.json
//acessing the object below

const config = {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
};

const client = new pg.Client(config);

//connecting to database

client.connect();

function famousLookup (name, callback) {
  client.query(`select first_name, last_name, birthdate::varchar from famous_people where first_name = $1::text`, [name], function (err, results) {
    console.log("in here", results, err);
  callback(err, results.rows);
  });
}

function close() {
    client.end();
  };


  return {
    famousLookup: famousLookup,
    close : close
  }

})();