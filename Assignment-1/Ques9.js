var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db1",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "INSERT INTO user (id,name) VALUES(14,'pransi')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  SelectAllElements = () => {
    return new Promise((resolve, reject) => {
      con.query("SELECT * FROM user ", (error, elements) => {
        if (error) {
          return reject(error);
        }
        console.log(elements, "hello");
        return resolve(elements);
      });
    });
  };
  const result = SelectAllElements();
  // console.log(result);
});
