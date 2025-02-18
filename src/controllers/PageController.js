export const home = (req, res) => {
  res.render("pages/home", {
    title: "Dinos are awesome!",
    content: "Dinos are a diverse group of meow meow paw paws"
  });
};

export const about = (req, res) => {
  res.render("pages/default", {
    title: "About us",
    content: "We are a group of dino enthusiasts!",
    team: ["T-Rex", "Velociraptor", "Stegosaurus"],
  });
};

export const contact = (req, res) => {
  res.render("pages/contact", {
    title: "Contact",
    content: "You can reach us at 09 233 40 89",
  });
};

export const privacy = (req, res) => {
  res.render("pages/default", {
    title: "Privacy Policy",
    content: "Dinosaurs are protective of their privacy.",
    team: false,
  });
};