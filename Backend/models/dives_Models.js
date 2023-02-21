import { query } from '../db/index.js';

const getAllDivesDB = async (id) => {
  const { rows } = await query('SELECT * FROM dive where fk_user = $1;', [id]);

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

export { getAllDivesDB, getSingleDiveDB };
