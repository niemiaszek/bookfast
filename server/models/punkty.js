const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return punkty.init(sequelize, DataTypes);
}

class punkty extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idPunkty: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nagroda_idNagroda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'nagroda',
        key: 'idNagroda'
      }
    },
    'ilość': {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'punkty',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPunkty" },
        ]
      },
      {
        name: "fk_Punkty_Nagroda1_idx",
        using: "BTREE",
        fields: [
          { name: "nagroda_idNagroda" },
        ]
      },
    ]
  });
  return punkty;
  }
}
