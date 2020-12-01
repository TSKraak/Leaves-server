require("dotenv").config(); //  configure dotenv

module.exports = {
  development: {
    url: process.env.ELEPHANT_SQL,
    dialect: "postgres",
    operatorsAliases: "0",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
    use_env_variable: process.env.ELEPHANT_SQL,
  },
};
