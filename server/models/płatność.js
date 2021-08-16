const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return płatność.init(sequelize, DataTypes);
}

class płatność extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    'idPłatność': {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'Data_płatności': {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    'Format_płatności': {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    'zniżka_nagroda_idNagroda': {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'zniżka',
        key: 'Nagroda_idNagroda'
      }
    }
  }, {
    sequelize,
    tableName: 'płatność',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPłatność" },
        ]
      },
      {
        name: "fk_Płatność_Zniżka1_idx",
        using: "BTREE",
        fields: [
          { name: "zniżka_nagroda_idNagroda" },
        ]
      },
    ]
  });
  return płatność;
  }
}
