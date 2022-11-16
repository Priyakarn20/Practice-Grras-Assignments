const UserModel = require('../model/user.model');

exports.createUser = async function (req, res) {
    if(!req.body.username && req.body.email && req.body.password){
        res.send({
            message: "User doesn't exist ",
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

