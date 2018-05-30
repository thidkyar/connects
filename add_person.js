const settings = require("./settings");
const knex = require("knex")({
  client: 'pg',
  connection: {
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
  }
});
console.log('connected')

const famousPpl = require("./models/nperson_module")(knex);
  const firstName = process.argv[2]
  const lastName = process.argv[3]
  const newDate = process.argv[4]

  famousPpl.insertPerson(firstName, lastName, newDate, (err, rows) => {
    if (err) {
      return console.log("query failed", err)
    }
    })
    
