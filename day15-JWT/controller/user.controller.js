const UserModel = require('../model/user.model');

async function createUser(req, res) {
    if(!req.body.username && req.body.email){
        res.send({
            message: "Forgotten password",
        });
    }
    const NewUser = new UserModel(req.body);
    try {
        await NewUser.save();
        res.send({ message: "User saved successfully",});
    } catch(error){
        res.send({ message: error.message});
    }
}

module.exports = createUser;