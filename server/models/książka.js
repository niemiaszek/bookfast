const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return książka.init(sequelize, DataTypes);
}

class książka extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    'idKsiążka': {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'tytuł': {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    opis: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'książka',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idKsiążka" },
        ]
      },
    ]
  });
  return książka;
  }
}
