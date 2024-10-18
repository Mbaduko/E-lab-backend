import db from '../models/index.js';


const addUser = async (inputs) => {
    return await  db.user.create(inputs);
};

export {
    addUser
};