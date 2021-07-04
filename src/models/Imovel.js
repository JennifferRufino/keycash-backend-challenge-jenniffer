const {Model, DataTypes} = require("sequelize");

class Imovel extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            bedrooms: DataTypes.INTEGER,
            bathrooms: DataTypes.INTEGER,
            parking: DataTypes.INTEGER,
            lotSize: DataTypes.DOUBLE,
        }, {
            modelName: 'imovel',
            tableName: 'imovels',
            sequelize
        })
    }
}

module.exports = Imovel;