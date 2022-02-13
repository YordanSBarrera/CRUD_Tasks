import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect("mongodb://localhost/crud-mongo");
    console.log("DB connecte to :", db.connection.name);
  } catch (e) {
    console.error(e, "Error +++++++++++++++");
  }
})();
