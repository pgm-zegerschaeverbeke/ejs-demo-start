// import statements

import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";
import { home, about, contact, privacy } from "./controllers/PageController.js";
import * as dinos from "./controllers/DinoController.js";
import helpers from "./utils/templateHelpers.js";


// create an instance of express
const app = express();

// use express layouts
app.use(expressLayouts);

// set views engine to ejs
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');
app.set("views", path.resolve("src", "views"));

// make helpers available to all views
Object.assign(app.locals, helpers);

// serve static files from the public folder
// they can be accessed from the root of the site (e.g. /assets/images/dino_07.png) 🦕
app.use(express.static("public"));

// page routes
app.get("/", home);
app.get("/about", about);
app.get("/contact", contact);
app.get("/privacy", privacy);
app.get('/dinosaurs', dinos.index);
app.get('/dinosaurs/:slug', dinos.detail);

app.get('*', (req, res) => {
  res.status(404).render('errors/404', {
    layout: 'layouts/error',
});
});


// start the server, listen on port defined in .env file
app.listen(process.env.PORT, () => {
  // callback function that is called when the server starts
  console.log(`Application is listening to port ${process.env.PORT}.`);
});
