const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return darmowa_książka.init(sequelize, DataTypes);
}

class darmowa_książka extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    nagroda_idNagroda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'nagroda',
        key: 'idNagroda'
      }
    },
    wydanie_idWydanie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'wydanie',
        key: 'idWydanie'
      }
    }
  }, {
    sequelize,
    tableName: 'darmowa_książka',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nagroda_idNagroda" },
          { name: "wydanie_idWydanie" },
        ]
      },
      {
        name: "fk_Darmowa książka_Nagroda1_idx",
        using: "BTREE",
        fields: [
          { name: "nagroda_idNagroda" },
        ]
      },
      {
        name: "fk_Darmowa książka_Wydanie1_idx",
        using: "BTREE",
        fields: [
          { name: "wydanie_idWydanie" },
        ]
      },
    ]
  });
  return darmowa_książka;
  }
}
