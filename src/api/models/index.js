import { sequelize } from '../../config/config.js';
import User from './user.model.js';

const db = {};

db.Sequelize = sequelize;
db.sequelize = sequelize;
db.user = User.init(sequelize); // Ensure this line initializes the model correctly

export default db;