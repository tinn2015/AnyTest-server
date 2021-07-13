const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');    //引用mongoose模块
const config = require('../config')
const { logger } = require('../middlewares/logger')

let url = "mongodb://" + config.mongoDB.host + ":" + config.mongoDB.port + "/" + config.mongoDB.database;
    mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}); //创建一个数据库连接
console.log('mongodb url', url)

let db = {
    mongoose: mongoose,
    models: {}
};
// 错误
mongoose.connection.on('error', function (err) {
    console.log('connect error', err)
    logger.error(new Error(err));
});
// 开启
mongoose.connection.once('open', function () {
    logger.info("mongo is opened");
});
// 整合models文件下的其他js文件
fs.readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    }).forEach(function (file) {
    var modelFile = require(path.join(__dirname, file));
    var schema = new mongoose.Schema(modelFile.schema);

    db.models[modelFile.name] = mongoose.model(modelFile.name, schema);
});
// 根据name选择model
db.getModel = function (name) {
    return this.models[name];
};

module.exports = db;
