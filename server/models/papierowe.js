const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return papierowe.init(sequelize, DataTypes);
}

class papierowe extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idPapierowa: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Magazyn_idMagazyn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'magazyn',
        key: 'idMagazyn'
      }
    },
    'Okładka': {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    wydanie_idWydanie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wydanie',
        key: 'idWydanie'
      }
    }
  }, {
    sequelize,
    tableName: 'papierowe',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPapierowa" },
        ]
      },
      {
        name: "fk_Papierowe_Magazyn1_idx",
        using: "BTREE",
        fields: [
          { name: "Magazyn_idMagazyn" },
        ]
      },
      {
        name: "fk_Papierowe_Wydanie1_idx",
        using: "BTREE",
        fields: [
          { name: "wydanie_idWydanie" },
        ]
      },
    ]
  });
  return papierowe;
  }
}
