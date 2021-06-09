//Configuration setup for PostgreSQL connection

/* `host=smarthomes.postgres.database.azure.com 
port=5432 dbname=wattage 
user=smarthomesdashboarduser@smarthomes 
password=b5zT;q_fS\aAUtpD 
sslmode=require` */

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "smarthomesdashboarduser@smarthomes",
  host: "smarthomes.postgres.database.azure.com",
  database: "wattage",
  password: 'b5zT;q_fS\aAUtpD',
  port: 5432,
  
  // sslmode: "require",
  ssl:true
});

const getSN = (request, response) => {
  pool.query("SELECT Serial_Number FROM readings ", (error, results) => {
    if (error) {
      //   throw error;
      console.log("Error in getting the data.", error);
    }
    console.log(results)
    // response.status(200).json(results.rows[0]);
  });
};

module.exports = {
  getSN,
};
