import { Doctor } from "../models/Doctor.js";

export const addDoctor = async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.json(doctor);
};

export const getDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};
