const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return dostawca.init(sequelize, DataTypes);
}

class dostawca extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idDostawca: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Cena: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Czas_dostawy: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Firma: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    'Sposób_dostawy': {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dostawca',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idDostawca" },
        ]
      },
    ]
  });
  return dostawca;
  }
}
