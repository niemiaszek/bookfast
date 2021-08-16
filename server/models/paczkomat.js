const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return paczkomat.init(sequelize, DataTypes);
}

class paczkomat extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idpaczkomat: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Ulica: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Miasto: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    Kod_pocztowy: {
      type: DataTypes.STRING(6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'paczkomat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idpaczkomat" },
        ]
      },
    ]
  });
  return paczkomat;
  }
}
