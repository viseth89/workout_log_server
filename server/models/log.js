const { DataTypes } = require("sequelize");
const db = require("../db");

const Log = db.define("log", {
    description: {
        type: DataTypes.STRING(100),
        allownNull: false,
    },
    definition: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    result: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    owner_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
    }
})

module.exports = Log