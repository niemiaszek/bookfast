const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return wysyłka.init(sequelize, DataTypes);
}

class wysyłka extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    'idWysyłka': {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'Data_wysyłki': {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dostawca_idDostawca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dostawca',
        key: 'idDostawca'
      }
    },
    paczkomat_idpaczkomat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'paczkomat',
        key: 'idpaczkomat'
      }
    },
    Adres_idAdres: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adres',
        key: 'idAdres'
      }
    },
    'Zamówienie_idZamówienie': {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'zamówienie',
        key: 'idZamówienie'
      }
    }
  }, {
    sequelize,
    tableName: 'wysyłka',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idWysyłka" },
        ]
      },
      {
        name: "fk_Wysyłka_Dostawca1_idx",
        using: "BTREE",
        fields: [
          { name: "dostawca_idDostawca" },
        ]
      },
      {
        name: "fk_Wysyłka_paczkomat1_idx",
        using: "BTREE",
        fields: [
          { name: "paczkomat_idpaczkomat" },
        ]
      },
      {
        name: "fk_Wysyłka_Adres1_idx",
        using: "BTREE",
        fields: [
          { name: "Adres_idAdres" },
        ]
      },
      {
        name: "fk_Wysyłka_Zamówienie1_idx",
        using: "BTREE",
        fields: [
          { name: "Zamówienie_idZamówienie" },
        ]
      },
    ]
  });
  return wysyłka;
  }
}
