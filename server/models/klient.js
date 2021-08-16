const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return klient.init(sequelize, DataTypes);
}

class klient extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idKlient: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'imię': {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    nazwisko: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    Mail: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    paczkomat_idpaczkomat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'paczkomat',
        key: 'idpaczkomat'
      }
    }
  }, {
    sequelize,
    tableName: 'klient',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idKlient" },
        ]
      },
      {
        name: "fk_Klient_paczkomat1_idx",
        using: "BTREE",
        fields: [
          { name: "paczkomat_idpaczkomat" },
        ]
      },
    ]
  });
  return klient;
  }
}
