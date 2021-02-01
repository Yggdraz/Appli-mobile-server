//////////////////////////////////////////////////////////////////////////
//                            DATABASE CONNECTION                       //
//////////////////////////////////////////////////////////////////////////

const mongoose = require("mongoose");
const db = require('dotenv').config()
mongoose.connect(process.env.DBURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);

let connection = mongoose.connection;

connection.on("error", console.error.bind(console, 'Erreur lors de la connexion'));
connection.once('open', () => { console.log("Connexion à la base OK"); });

module.exports = connection