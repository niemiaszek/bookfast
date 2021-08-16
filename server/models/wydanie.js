const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return wydanie.init(sequelize, DataTypes);
}

class wydanie extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idWydanie: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Data_wydania: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Cena: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'język': {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    Wydawca_idWydawca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wydawca',
        key: 'idWydawca'
      }
    },
    'Książka_idKsiążka': {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'książka',
        key: 'idKsiążka'
      }
    },
    liczba_stron: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'ilość': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    srednia_ocen: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wydanie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idWydanie" },
        ]
      },
      {
        name: "fk_Wydanie_Książka1_idx",
        using: "BTREE",
        fields: [
          { name: "Książka_idKsiążka" },
        ]
      },
      {
        name: "fk_wydanie_wydawca1_idx",
        using: "BTREE",
        fields: [
          { name: "Wydawca_idWydawca" },
        ]
      },
    ]
  });
  return wydanie;
  }
}
