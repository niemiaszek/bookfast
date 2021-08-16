const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return adres.init(sequelize, DataTypes);
}

class adres extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idAdres: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Miasto: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    Kod_pocztowy: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    Ulica: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Numer_domu: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Numer_mieszkania: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Klient_idKlient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'klient',
        key: 'idKlient'
      }
    }
  }, {
    sequelize,
    tableName: 'adres',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAdres" },
          { name: "Klient_idKlient" },
        ]
      },
      {
        name: "fk_Adres_Klient1_idx",
        using: "BTREE",
        fields: [
          { name: "Klient_idKlient" },
        ]
      },
    ]
  });
  return adres;
  }
}
