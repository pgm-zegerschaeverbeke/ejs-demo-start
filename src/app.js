// import statements
import express from "express";
import path from "path";
import { title } from "process";


// create an instance of express
const app = express();

// set views engine to ejs
app.set('view engine', 'ejs');
app.set("views", path.resolve("src", "views"));

// serve static files from the public folder
// they can be accessed from the root of the site (e.g. /assets/images/dino_07.png) 🦕
app.use(express.static("public"));

// GET route to serve the index.html file
app.get("/", (req, res) => {
  res.render("home", {
    title: "Dinos are awesome!",
    content: "Dinos are a diverse group of meow meow paw paws"
  })
});

// start the server, listen on port defined in .env file
app.listen(process.env.PORT, () => {
  // callback function that is called when the server starts
  console.log(`Application is listening to port ${process.env.PORT}.`);
});
