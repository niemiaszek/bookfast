const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return opiniować.init(sequelize, DataTypes);
}

class opiniować extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    Klient_Zarejestrowany_Klient_idKlient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'klient_zarejestrowany',
        key: 'Klient_idKlient'
      }
    },
    ocena: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Recenzja_idRecenzja: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'recenzja',
        key: 'idRecenzja'
      }
    }
  }, {
    sequelize,
    tableName: 'opiniować',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Klient_Zarejestrowany_Klient_idKlient" },
          { name: "Recenzja_idRecenzja" },
        ]
      },
      {
        name: "fk_Recenzja_has_Klient Zarejestrowany_Klient Zarejestrowany_idx",
        using: "BTREE",
        fields: [
          { name: "Klient_Zarejestrowany_Klient_idKlient" },
        ]
      },
      {
        name: "fk_Opiniować_Recenzja1_idx",
        using: "BTREE",
        fields: [
          { name: "Recenzja_idRecenzja" },
        ]
      },
    ]
  });
  return opiniować;
  }
}
