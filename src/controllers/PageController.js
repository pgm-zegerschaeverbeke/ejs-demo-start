import { person, navItems } from "../data/data.js";


export const home = (req, res) => {
  res.render("pages/home", {
    title: "Dinos are awesome!",
    content: "Dinos are a diverse group of meow meow paw paws",
    navItems,
  });
};

export const about = (req, res) => {
  res.render("pages/default", {
    title: "About us",
    content: "We are a group of dino enthusiasts!",
    team: ["T-Rex", "Velociraptor", "Stegosaurus", "<strong>Premium</strong> Diplodocus"],
    navItems,
  });
};

export const contact = (req, res) => {
  res.render("pages/contact", {
    title: "Contact",
    content: "You can reach us at 09 233 40 89",
    person,
    navItems,
  });
};

export const privacy = (req, res) => {
  res.render("pages/default", {
    title: "Privacy Policy",
    content: "Dinosaurs are protective of their privacy.",
    team: false,
    navItems,
  });
};