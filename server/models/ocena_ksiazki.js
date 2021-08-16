const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return ocena_ksiazki.init(sequelize, DataTypes);
}

class ocena_ksiazki extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    Wydanie_idWydanie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'wydanie',
        key: 'idWydanie'
      }
    },
    ocena: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    klient_zarejestrowany_Klient_idKlient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'klient_zarejestrowany',
        key: 'Klient_idKlient'
      }
    }
  }, {
    sequelize,
    tableName: 'ocena_ksiazki',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Wydanie_idWydanie" },
          { name: "klient_zarejestrowany_Klient_idKlient" },
        ]
      },
      {
        name: "fk_Klient Zarejestrowany_has_Wydanie_Wydanie1_idx",
        using: "BTREE",
        fields: [
          { name: "Wydanie_idWydanie" },
        ]
      },
      {
        name: "fk_ocena_ksiazki_klient_zarejestrowany1_idx",
        using: "BTREE",
        fields: [
          { name: "klient_zarejestrowany_Klient_idKlient" },
        ]
      },
    ]
  });
  return ocena_ksiazki;
  }
}
