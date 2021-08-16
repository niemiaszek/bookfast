const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return zwrot.init(sequelize, DataTypes);
}

class zwrot extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idZwrot: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Data_zwrotu: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Przyczyna: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    administrator_idAdministrator: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'administrator',
        key: 'idAdministrator'
      }
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
    tableName: 'zwrot',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idZwrot" },
        ]
      },
      {
        name: "fk_Zwrot_Administrator1_idx",
        using: "BTREE",
        fields: [
          { name: "administrator_idAdministrator" },
        ]
      },
      {
        name: "fk_Zwrot_Klient1_idx",
        using: "BTREE",
        fields: [
          { name: "klient_idKlient" },
        ]
      },
    ]
  });
  return zwrot;
  }
}
