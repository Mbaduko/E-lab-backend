import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,

  {
    host:process.env.DB_HOST,
    dialect:"mysql"
  }
);


const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection successful");

    if (process.env.NODE_ENV === 'development') {
      await sequelize.sync({ force: true });
    }
    console.log("Tables updated!!")
  } catch (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
};


export {
  sequelize,
  dbConnection
};