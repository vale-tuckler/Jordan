const Mongoose = require("mongoose");
const Cors = require("cors");
const Express = require("express");
const App = Express();

let Mongo_URI = "mongodb+srv://MyUser:mypassword@playbox.tmlwh.mongodb.net/Jordan?retryWrites=true&w=majority";
const PORT = 4020;

/*  IMPORT ROUTES HERE  */
const formRoutes = require("./routes");

App.use(Cors());
App.use(Express.json());
App.use(Express.urlencoded({extended:true}));

/*  USE ROUTES HERE */
App.use(formRoutes);


Mongoose.connect(Mongo_URI, {useNewUrlParser:true, useUnifiedTopology:true});

//This line is to get the default "Connection" object through "Mongoose.connection"
const Connection = Mongoose.connection;

Connection.once("open", () => console.log("MongoDB connection established!"));

/*  MAIN ROUTE HERE */
App.use("/new_message", formRoutes);

App.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));