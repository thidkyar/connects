module.exports = function(knex) {
  function insertPerson(firstName, lastName, newDate, cb) {
    knex("famous_people")
      .insert(
        { first_name: firstName, last_name: lastName, birthdate: newDate }
      )
      .then(rows => {
        cb(null, rows);
      })
      .catch(err => cb(err));
  }
  return {
    insertPerson
  };
};
