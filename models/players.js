const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('players', {
    number: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    secondname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    country: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    team: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'teams',
        key: 'id'
      },
      unique: "players_ibfk_1"
    },
    position: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'players',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "number" },
        ]
      },
      {
        name: "index_teamid",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "team" },
        ]
      },
    ]
  });
};
