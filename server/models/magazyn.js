const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return magazyn.init(sequelize, DataTypes);
}

class magazyn extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idMagazyn: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'ilość_książek': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Termin_Dostawy: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'magazyn',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idMagazyn" },
        ]
      },
    ]
  });
  return magazyn;
  }
}
