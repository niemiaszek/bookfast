const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return historia_zakupów.init(sequelize, DataTypes);
}

class historia_zakupów extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    'idHistoria_zakupów': {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'zamówienie_idZamówienie': {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'zamówienie',
        key: 'idZamówienie'
      }
    }
  }, {
    sequelize,
    tableName: 'historia_zakupów',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idHistoria_zakupów" },
        ]
      },
      {
        name: "fk_historia_zakupów_zamówienie1_idx",
        using: "BTREE",
        fields: [
          { name: "zamówienie_idZamówienie" },
        ]
      },
    ]
  });
  return historia_zakupów;
  }
}
