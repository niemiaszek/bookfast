const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return książka_has_kategoria.init(sequelize, DataTypes);
}

class książka_has_kategoria extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    'książka_idKsiążka': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'książka',
        key: 'idKsiążka'
      }
    },
    Kategoria_idKategoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'kategoria',
        key: 'idKategoria'
      }
    }
  }, {
    sequelize,
    tableName: 'książka_has_kategoria',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "książka_idKsiążka" },
          { name: "Kategoria_idKategoria" },
        ]
      },
      {
        name: "fk_Książka_has_Kategoria_Kategoria1_idx",
        using: "BTREE",
        fields: [
          { name: "Kategoria_idKategoria" },
        ]
      },
      {
        name: "fk_Książka_has_Kategoria_Książka1_idx",
        using: "BTREE",
        fields: [
          { name: "książka_idKsiążka" },
        ]
      },
    ]
  });
  return książka_has_kategoria;
  }
}
