import AppError from "../errors.js";
const userTypeValidator= (req, res, next) => {
    const type = req.params.type.toUpperCase();
    try {
        if (['SPA','PA','HOSPITAL','DOCTOR','LAB','DELVERER','PATIENT'].includes(type)) {
            req.body.type = type;
            return next()
        }
        throw new AppError("Invalid user type", 400);
    } catch (err) {
       return next(err);
    }
};

export default userTypeValidator;