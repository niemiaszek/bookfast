const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return autor.init(sequelize, DataTypes);
}

class autor extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idAutor: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'imię': {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    nazwisko: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    Kraj_pochodzenia: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    drugie_imie: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'autor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAutor" },
        ]
      },
    ]
  });
  return autor;
  }
}
