const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return klient_zarejestrowany.init(sequelize, DataTypes);
}

class klient_zarejestrowany extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    Login: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: "Login_UNIQUE"
    },
    'Hasło': {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Numer_telefonu: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    Data_urodzenia: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    'płeć': {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    Klient_idKlient: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'klient',
        key: 'idKlient'
      }
    },
    aktywowany: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'klient_zarejestrowany',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Klient_idKlient" },
        ]
      },
      {
        name: "Login_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Login" },
        ]
      },
      {
        name: "fk_Klient Zarejestrowany_Klient1_idx",
        using: "BTREE",
        fields: [
          { name: "Klient_idKlient" },
        ]
      },
    ]
  });
  return klient_zarejestrowany;
  }
}
