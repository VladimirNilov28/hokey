const initModels = require('./models/init-models')
const sequelize = require('./config_db')


initModels.initModels(sequelize).players.sync({force: true})
initModels.initModels(sequelize).teams.sync({force: true})
initModels.initModels(sequelize).games.sync({force: true})


Player.sync({force: true})
Team.sync({force: true})
Game.sync({force: true})

const express = require("express");
const cors = require("cors");

const app = express();


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "salam" });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// database
const db = require("./app/models");
const Role = db.role;

// db.sequelize.sync({ force: true }).then(() => {
//     console.log('Drop and Resync Database with { force: true }');
//     initial();
// });

db.sequelize.sync();

// function initial() {
//     Role.create({
//         id: 1,
//         name: "game"
//     });

//     Role.create({
//         id: 2,
//         name: "player"
//     });

//     Role.create({
//         id: 3,
//         name: "team"
//     });
// }
