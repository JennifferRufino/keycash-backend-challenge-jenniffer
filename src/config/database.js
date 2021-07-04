module.exports = {
    "dialect": "mysql",
    "host": process.env.DB_HOST,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "port": "3306",
    "database": process.env.DB_DATABASE,
    "define": {
        timestamps: true,
        underscored: true
    }
}