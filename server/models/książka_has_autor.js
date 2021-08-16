const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return książka_has_autor.init(sequelize, DataTypes);
}

class książka_has_autor extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    'książka_idKsiążka': {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'książka',
        key: 'idKsiążka'
      }
    },
    Autor_idAutor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'autor',
        key: 'idAutor'
      }
    }
  }, {
    sequelize,
    tableName: 'książka_has_autor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "książka_idKsiążka" },
          { name: "Autor_idAutor" },
        ]
      },
      {
        name: "fk_Książka_has_Autor_Autor1_idx",
        using: "BTREE",
        fields: [
          { name: "Autor_idAutor" },
        ]
      },
      {
        name: "fk_Książka_has_Autor_Książka_idx",
        using: "BTREE",
        fields: [
          { name: "książka_idKsiążka" },
        ]
      },
    ]
  });
  return książka_has_autor;
  }
}
