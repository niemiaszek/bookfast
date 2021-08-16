const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return koszyk.init(sequelize, DataTypes);
}

class koszyk extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idKoszyk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    klient_idKlient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'klient',
        key: 'idKlient'
      }
    }
  }, {
    sequelize,
    tableName: 'koszyk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idKoszyk" },
        ]
      },
      {
        name: "fk_Koszyk_Klient1_idx",
        using: "BTREE",
        fields: [
          { name: "klient_idKlient" },
        ]
      },
    ]
  });
  return koszyk;
  }
}
