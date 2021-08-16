const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return kategoria.init(sequelize, DataTypes);
}

class kategoria extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idKategoria: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nazwa: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'kategoria',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idKategoria" },
        ]
      },
    ]
  });
  return kategoria;
  }
}
