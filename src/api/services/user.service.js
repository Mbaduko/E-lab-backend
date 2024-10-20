import { Op } from 'sequelize';
import db from '../models/index.js';
import User from '../models/user.model.js';
import AppError from '../../errors.js'

const findUser = async (email, phone) => {
    const user = await User.findOne({
        where:{
            [Op.or]: [
                {email},
                {phone}
            ]
        }
    });;

    return user;
}

const addUser = async (inputs) => {
    const userExists = await findUser(inputs.email, inputs.phone);
    if (userExists)
        throw new AppError("User already registered", 400)
    return await  db.user.create(inputs);
};

export {
    addUser
};