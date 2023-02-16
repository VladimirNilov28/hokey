const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('games', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hometeam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'teams',
        key: 'id'
      }
    },
    guestteam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'teams',
        key: 'id'
      }
    },
    scorehome: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    scoreguest: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'games',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "index_hometeam",
        using: "BTREE",
        fields: [
          { name: "hometeam" },
        ]
      },
      {
        name: "index_guestteam",
        using: "BTREE",
        fields: [
          { name: "guestteam" },
        ]
      },
    ]
  });
};
