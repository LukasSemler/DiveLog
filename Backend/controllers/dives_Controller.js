import { getAllDivesDB, getSingleDiveDB, addDiveDB } from '../models/dives_Models.js';

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

const addDive = async (req, res) => {
  const { id } = req.params;

  const { title, date, country, divesite, coords, depth, airIn, airOut, weight, air, suit, time } =
    req.body;

  const result = await addDiveDB(
    title,
    date,
    country,
    divesite,
    coords,
    depth,
    airIn,
    airOut,
    weight,
    air,
    suit,
    time,
    id,
  );

  if (result) return res.status(200).json(result);
  return res.status(500).send('Error when inserting');
};

export { getAllDives, getSingleDive, addDive };
