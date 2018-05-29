const pg = require("pg");
const settings = require("./settings");

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

const famousPplByName = require("./models/fpName")(client);

client.connect(err => {
  if (err) {
    return console.log("connection failed", err);
  }
const myArg = process.argv[2]
  famousPplByName.findByName(myArg, (err, result) => {
    if (err) {
      return console.log("query failed", err)
    }
    console.log(`Found ${result.rows.length} person(s) by the name '${myArg}':`)
    result.rows.forEach(function (row, i) {
      console.log(`- ${i+1}: ${row.first_name} ${row.last_name}, born '${row.birthdate.toLocaleDateString('ar-EG',{year:'numeric',month: '2-digit',day:'2-digit'})}'`)
    })
    client.end();
    
  });
});
