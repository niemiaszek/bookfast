const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return zamówienie.init(sequelize, DataTypes);
}

class zamówienie extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    'idZamówienie': {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'Data_Zamówienia': {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Klient_idKlient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'klient',
        key: 'idKlient'
      }
    },
    'Płatność_idPłatność': {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'płatność',
        key: 'idPłatność'
      }
    },
    Zwrot_idZwrot: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'zwrot',
        key: 'idZwrot'
      }
    }
  }, {
    sequelize,
    tableName: 'zamówienie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idZamówienie" },
        ]
      },
      {
        name: "fk_Zamówienie_Klient1_idx",
        using: "BTREE",
        fields: [
          { name: "Klient_idKlient" },
        ]
      },
      {
        name: "fk_Zamówienie_Płatność1_idx",
        using: "BTREE",
        fields: [
          { name: "Płatność_idPłatność" },
        ]
      },
      {
        name: "fk_Zamówienie_Zwrot1_idx",
        using: "BTREE",
        fields: [
          { name: "Zwrot_idZwrot" },
        ]
      },
    ]
  });
  return zamówienie;
  }
}
