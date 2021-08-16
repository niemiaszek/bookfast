const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return recenzja.init(sequelize, DataTypes);
}

class recenzja extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idRecenzja: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    administrator_idAdministrator: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'administrator',
        key: 'idAdministrator'
      }
    },
    'Treść': {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    klient_zarejestrowany_klient_idKlient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'klient_zarejestrowany',
        key: 'Klient_idKlient'
      }
    },
    wydanie_idWydanie1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wydanie',
        key: 'idWydanie'
      }
    }
  }, {
    sequelize,
    tableName: 'recenzja',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idRecenzja" },
        ]
      },
      {
        name: "fk_Recenzja_Administrator1_idx",
        using: "BTREE",
        fields: [
          { name: "administrator_idAdministrator" },
        ]
      },
      {
        name: "fk_Recenzja_Klient Zarejestrowany1_idx",
        using: "BTREE",
        fields: [
          { name: "klient_zarejestrowany_klient_idKlient" },
        ]
      },
      {
        name: "fk_Recenzja_Wydanie1_idx",
        using: "BTREE",
        fields: [
          { name: "wydanie_idWydanie1" },
        ]
      },
    ]
  });
  return recenzja;
  }
}
