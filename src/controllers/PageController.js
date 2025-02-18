export const home = (req, res) => {
  res.render("home", {
    title: "Dinos are awesome!",
    content: "Dinos are a diverse group of meow meow paw paws"
  });
};

export const about = (req, res) => {
  res.render("default", {
    title: "About us",
    content: "We are a group of dino enthusiasts!",
  });
};

export const contact = (req, res) => {
  res.render("contact", {
    title: "Contact",
    content: "You can reach us at 09 233 40 89",
  });
};

export const privacy = (req, res) => {
  res.render("default", {
    title: "Privacy Policy",
    content: "Dinosaurs are protective of their privacy.",
  });
};