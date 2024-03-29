var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
var config    = require(path.join(__dirname, '..', 'config', 'config.json')).db;


var sequelize = new Sequelize(config.database, config.user, config.password, config.options);
var db        = {};
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

  Object.keys(db).forEach((modelName) => {
      if (typeof db[modelName].associate === 'function') {
        db[modelName].associate(db);
      }
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
