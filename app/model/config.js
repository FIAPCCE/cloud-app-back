const mongoose = require('mongoose');

module.exports = (app) => {
    const object = {};

    const uri = 'mongodb+srv://magnorion:pass123@cluster-kxmvf.mongodb.net/startup?retryWrites=true';

    mongoose.set('useFindAndModify', false);
    mongoose.connect(uri, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Banco conectado!');
    })

    return object;
}