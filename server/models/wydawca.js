const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return wydawca.init(sequelize, DataTypes);
}

class wydawca extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idWydawca: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nazwa_wydawcy: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wydawca',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idWydawca" },
        ]
      },
    ]
  });
  return wydawca;
  }
}
