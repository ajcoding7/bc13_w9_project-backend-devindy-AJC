const { query } = require("../db/index.js");

async function getBootcampers() {
  
    const strengthsArray = await query("SELECT first_name, last_name, topic_name, strength_weakness FROM strengths_weaknesses s JOIN bootcampers b ON b.bootcamper_id = s.bootcamper_id JOIN topics t ON t.topic_id = s.topic_id;")
    const bootcamperArray = await query("SELECT first_name, last_name, password, image_url FROM bootcampers")
    return [bootcamperArray.rows, strengthsArray.rows];
  }

async function getBootcamperByID(id) {
    const specificBootcamper = await query("SELECT * FROM bootcampers WHERE bootcamper_id = $1", [id]);
    console.log(specificBootcamper)   
    return specificBootcamper.rows
}

 async function deleteTopic(id) {
    const deletedTopic = await query ("DELETE FROM strengths_weaknesses WHERE strength_id = $1", [id]);
    return deletedTopic
}
  module.exports = {
    getBootcampers,
    getBootcamperByID,
    deleteTopic
  }