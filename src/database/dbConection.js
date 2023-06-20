import  Sequelize  from "sequelize";
import {DB_URL} from "../config.js";

// create a new sequelize instance with the db url
export const sequelize = new Sequelize( DB_URL,{
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
        ssl:{
            require: true,
            rejectUnauthorized: false,
        }
    }
});

// function to create tables in db and sync them
// export async function synchronizeModels() {
//     try {
//       await sequelize.sync();
//       console.log("Tables created successfully.");
//     } catch (error) {
//       console.error("Error creating tables:", error);
//     }
//   }