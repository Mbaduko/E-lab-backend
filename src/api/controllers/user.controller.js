import { addUser } from "../services/user.service.js"
import httpStatus from 'http-status';

const createUser = async (req, res, next) => {
    try {
        const user = await addUser(req.body);
        return res.status(httpStatus.CREATED).json(user.dataValues)
    } catch (err) {
        next(err);
    };
};

export {
    createUser
};