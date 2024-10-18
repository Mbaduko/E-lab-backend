import { addUser } from "../services/user.service.js"
import httpStatus from 'http-status';

const createUser = async (req, res) => {
    try {
        const user = await addUser(req.body);
        return res.status(httpStatus.CREATED).json(user.dataValues)
    } catch (err) {
        console.error("Server error:",err.stack);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({success:false,  message:"Server error?"})
    };
};

export {
    createUser
};