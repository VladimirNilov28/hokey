var DataTypes = require("sequelize").DataTypes;
var _games = require("./games");
var _players = require("./players");
var _teams = require("./teams");

function initModels(sequelize) {
  var games = _games(sequelize, DataTypes);
  var players = _players(sequelize, DataTypes);
  var teams = _teams(sequelize, DataTypes);

  games.belongsTo(teams, { as: "hometeam_team", foreignKey: "hometeam"});
  teams.hasMany(games, { as: "games", foreignKey: "hometeam"});
  games.belongsTo(teams, { as: "guestteam_team", foreignKey: "guestteam"});
  teams.hasMany(games, { as: "guestteam_games", foreignKey: "guestteam"});
  players.belongsTo(teams, { as: "team_team", foreignKey: "team"});
  teams.hasOne(players, { as: "player", foreignKey: "team"});

  return {
    games,
    players,
    teams,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
