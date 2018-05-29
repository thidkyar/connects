module.exports = function(client) {
  function all(callback) {
    const query = "SELECT * FROM famous_people;";
    client.query(query, callback);
  }

  function findByName(name, cb) {
    const query =
      "SELECT * FROM famous_people WHERE (first_name ILIKE $1) OR (last_name ILIKE $1);";
    client.query(query, [`%${name}%`], cb);
  }

  return {
    findByName
  };
};
