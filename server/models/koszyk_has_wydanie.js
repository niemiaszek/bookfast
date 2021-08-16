const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return koszyk_has_wydanie.init(sequelize, DataTypes);
}

class koszyk_has_wydanie extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    wydanie_idWydanie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'wydanie',
        key: 'idWydanie'
      }
    },
    koszyk_idKoszyk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'koszyk',
        key: 'idKoszyk'
      }
    }
  }, {
    sequelize,
    tableName: 'koszyk_has_wydanie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "koszyk_idKoszyk" },
          { name: "wydanie_idWydanie" },
        ]
      },
      {
        name: "fk_Koszyk_has_Wydanie_Wydanie1_idx",
        using: "BTREE",
        fields: [
          { name: "wydanie_idWydanie" },
        ]
      },
    ]
  });
  return koszyk_has_wydanie;
  }
}
