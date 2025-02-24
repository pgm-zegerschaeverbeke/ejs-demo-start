import { title } from "process";
import { navItems, dinosaurs } from "../data/data.js";

export const index = (req, res) => {
  res.render("dinosaurs/index", {
    title: "Dinosaurs",
    navItems,
    dinosaurs,
  });
};
export const detail = (req, res) => {
  const dino = dinosaurs.find((dino) => dino.slug === req.params.slug);

  if (!dino) {
    res.status(404).render("errors/404", {
      layout: "layouts/error",
      message: "Dino Not Found",
    });
  }
  res.render("dinosaurs/detail", {
    title: "Dino Details",
    dino,
    navItems,
  });
};