const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return lista_życzeń_has_wydanie.init(sequelize, DataTypes);
}

class lista_życzeń_has_wydanie extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    'lista_życzeń_idlista_życzeń': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'lista_życzeń',
        key: 'idlista_życzeń'
      }
    },
    wydanie_idWydanie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'wydanie',
        key: 'idWydanie'
      }
    }
  }, {
    sequelize,
    tableName: 'lista_życzeń_has_wydanie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lista_życzeń_idlista_życzeń" },
          { name: "wydanie_idWydanie" },
        ]
      },
      {
        name: "fk_lista_życzeń_has_wydanie_wydanie1_idx",
        using: "BTREE",
        fields: [
          { name: "wydanie_idWydanie" },
        ]
      },
      {
        name: "fk_lista_życzeń_has_wydanie_lista_życzeń1_idx",
        using: "BTREE",
        fields: [
          { name: "lista_życzeń_idlista_życzeń" },
        ]
      },
    ]
  });
  return lista_życzeń_has_wydanie;
  }
}
