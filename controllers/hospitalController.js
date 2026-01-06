import { Hospital } from "../models/Hospital.js";

export const addHospital = async(req, res) =>{
    const hospital = await Hospital.create(req.body);
    res.json(hospital);
};

export const getHospitals = async(req,res) =>{
    const hospitals= await Hospital.find();
    res.json(hospitals);
};