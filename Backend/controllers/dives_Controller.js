import { getAllDivesDB, getSingleDiveDB } from '../models/dives_Models.js';

const getAllDives = async (req, res) => {
  const { id } = req.params;
  const dives = await getAllDivesDB(id);

  if (dives) return res.status(200).json(dives);
};

const getSingleDive = async (req, res) => {
  const { u_ID, d_ID } = req.params;

  const dive = await getSingleDiveDB(u_ID, d_ID);

  if (dive) return res.status(200).json(dive);
  return res.status(404).send('Dive not Found');
};

export { getAllDives, getSingleDive };
