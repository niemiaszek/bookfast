const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return historia_zakupów_has_wydanie.init(sequelize, DataTypes);
}

class historia_zakupów_has_wydanie extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    'historia_zakupów_idHstoria_zakupów': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'historia_zakupów',
        key: 'idHistoria_zakupów'
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
    },
    'ilość': {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'historia_zakupów_has_wydanie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "wydanie_idWydanie" },
          { name: "historia_zakupów_idHstoria_zakupów" },
        ]
      },
      {
        name: "fk_Historia Zakupów_has_Wydanie_Wydanie1_idx",
        using: "BTREE",
        fields: [
          { name: "wydanie_idWydanie" },
        ]
      },
      {
        name: "fk_Historia Zakupów_has_Wydanie_Historia Zakupów1_idx",
        using: "BTREE",
        fields: [
          { name: "historia_zakupów_idHstoria_zakupów" },
        ]
      },
    ]
  });
  return historia_zakupów_has_wydanie;
  }
}
