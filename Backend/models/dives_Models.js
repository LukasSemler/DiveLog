import { query } from '../db/index.js';

const getAllDivesDB = async (id) => {
  const { rows } = await query('SELECT * FROM dive where fk_user = $1;', [id]);

  if (rows[0]) return rows;

  return false;
};

export { getAllDivesDB };
