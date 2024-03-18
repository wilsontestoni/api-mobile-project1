import { connection } from "../db/connection.js";

export const getAllCourses = async () => {
  try {
    const [results, fields] = await connection.query(
      'SELECT * FROM `cursos`'
    );

    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
    return results;
  } catch (err) {
    console.log(err);
  }
}

// A simple SELECT query
export const getComputingCourses = async () => {
  try {
    const [results, fields] = await connection.query(
      'SELECT * FROM `cursos` WHERE `category` = "informatica"'
    );

    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
    return results;
  } catch (err) {
    console.log(err);
  }
};


