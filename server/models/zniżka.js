const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return zniżka.init(sequelize, DataTypes);
}

class zniżka extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    Nagroda_idNagroda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'nagroda',
        key: 'idNagroda'
      }
    },
    'procent_zniżki': {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'zniżka',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Nagroda_idNagroda" },
        ]
      },
      {
        name: "fk_Zniżka_Nagroda1_idx",
        using: "BTREE",
        fields: [
          { name: "Nagroda_idNagroda" },
        ]
      },
    ]
  });
  return zniżka;
  }
}
