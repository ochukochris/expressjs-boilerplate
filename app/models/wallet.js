'use strict'
const { Model } = require('sequelize')

const { v4: uuidv4 } = require('uuid')

module.exports = (sequelize, DataTypes) => {
  class wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  wallet.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      balance: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      }
    },
    {
      hooks: {
        beforeCreate: (wallet, options) => {
          wallet.id = uuidv4()
        },
      },
      sequelize,
      modelName: 'wallet',
    }
  )

  return wallet
}
