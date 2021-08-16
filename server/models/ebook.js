const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return ebook.init(sequelize, DataTypes);
}

class ebook extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idebook: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    format: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    URL: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Wydanie_idWydanie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wydanie',
        key: 'idWydanie'
      }
    }
  }, {
    sequelize,
    tableName: 'ebook',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idebook" },
        ]
      },
      {
        name: "fk_e-book_Wydanie1_idx",
        using: "BTREE",
        fields: [
          { name: "Wydanie_idWydanie" },
        ]
      },
    ]
  });
  return ebook;
  }
}
