const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return nagroda.init(sequelize, DataTypes);
}

class nagroda extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idNagroda: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cena: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'nagroda',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idNagroda" },
        ]
      },
    ]
  });
  return nagroda;
  }
}
