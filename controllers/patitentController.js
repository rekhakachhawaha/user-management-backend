import { Patitent } from "../models/Patitent.js";

// CREATE
export const createPatitent = async (req, res) => {
  const patitent = await Patitent.create(req.body);
  res.json(patitent);
};

// READ
export const getPatitents = async (req, res) => {
  const patitents = await Patitent.find();
  res.json(patitents);
};

// UPDATE
export const updatePatitent = async (req, res) => {
  const patitent = await Patitent.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(patitent);
};

// DELETE
export const deletePatitent = async (req, res) => {
  await Patitent.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};
