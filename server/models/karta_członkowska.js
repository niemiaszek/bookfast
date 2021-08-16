const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return karta_członkowska.init(sequelize, DataTypes);
}

class karta_członkowska extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    'idKarta_członkowska': {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    punkty_idPunkty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'punkty',
        key: 'idPunkty'
      }
    },
    klient_zarejestrowany_klient_idKlient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'klient_zarejestrowany',
        key: 'Klient_idKlient'
      }
    }
  }, {
    sequelize,
    tableName: 'karta_członkowska',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idKarta_członkowska" },
        ]
      },
      {
        name: "fk_Karta członkowska_Punkty1_idx",
        using: "BTREE",
        fields: [
          { name: "punkty_idPunkty" },
        ]
      },
      {
        name: "fk_karta_członkowska_klient_zarejestrowany1_idx",
        using: "BTREE",
        fields: [
          { name: "klient_zarejestrowany_klient_idKlient" },
        ]
      },
    ]
  });
  return karta_członkowska;
  }
}
