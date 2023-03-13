import { query } from '../db/index.js';

const getAllDivesDB = async (id) => {
  const { rows } = await query('SELECT * FROM dive where fk_user = $1 order by nr ASC;', [id]);

  if (rows[0]) return rows;

  return false;
};

const getSingleDiveDB = async (u_ID, d_ID) => {
  const { rows } = await query('SELECT * FROM dive where fk_user = $1 AND "d_ID" = $2;', [
    u_ID,
    d_ID,
  ]);

  if (rows[0]) return rows;
  return false;
};

const addDiveDB = async (
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
  u_id,
) => {
  const { rows } = await query('SELECT * FROM dive where fk_user = 3 ORDER BY nr ASC;');

  if (rows[0]) {
    const { rows: insert } = await query(
      'INSERT INTO dive (title, date, location, divesite, "airIn", "airOut", depth, weight, "airType", suit, nr, fk_user,"diveTime", coords) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) returning *',
      [
        title,
        date,
        country,
        divesite,
        airIn,
        airOut,
        depth,
        weight,
        air,
        suit,
        rows[rows.length - 1].nr + 1,
        u_id,
        time,
        JSON.stringify(coords),
      ],
    );

    if (insert[0]) return insert;
    return false;
  }
};

export { getAllDivesDB, getSingleDiveDB, addDiveDB };
