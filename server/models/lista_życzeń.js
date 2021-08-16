const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return lista_życzeń.init(sequelize, DataTypes);
}

class lista_życzeń extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    'idlista_życzeń': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    tableName: 'lista_życzeń',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idlista_życzeń" },
        ]
      },
      {
        name: "fk_lista_życzeń_klient_zarejestrowany1_idx",
        using: "BTREE",
        fields: [
          { name: "klient_zarejestrowany_klient_idKlient" },
        ]
      },
    ]
  });
  return lista_życzeń;
  }
}
