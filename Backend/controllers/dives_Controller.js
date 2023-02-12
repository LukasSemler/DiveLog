import { getAllDivesDB } from '../models/dives_Models.js';

const getAllDives = async (req, res) => {
  const { id } = req.params;
  const dives = await getAllDivesDB(id);

  if (dives) return res.status(200).json(dives);
};

export { getAllDives };
