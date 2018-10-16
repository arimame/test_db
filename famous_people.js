const db = require("./test_script");

var name = process.argv[2]


db.famousLookup (name, function (err, rows) {
   console.log("Found " + rows.length + " person(s) by the name " + name);
    for (var i = 0; i < rows.length; i++) {
      console.log((i + 1) + ": " + rows[i].first_name + " " + rows[i].last_name + ", born " + rows[i].birthdate);
    }
   db.close();
  });

