const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return administrator.init(sequelize, DataTypes);
}

class administrator extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idAdministrator: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stopien_uprawnien: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Lokalizacja: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    imie: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nazwisko: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'administrator',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAdministrator" },
        ]
      },
    ]
  });
  return administrator;
  }
}
