const db = require('../config/db.config.js');
const User = db.user;
// const Op = db.Sequelize.Op;
var passwordHash = require('password-hash');
var uuidv4 = require('uuid').v4;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.email) {
        res.status(400).send({
            message: "Email can not be empty!"
        });
        return;
    }

    // Create a User
    const user = {
        id: req.body.id = uuidv4(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password = passwordHash.generate(req.body.password),
        status: req.body.status,
        lastLogin: req.body.lastLogin,
        level: req.body.level
    };

    // Save User in the database
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        });
};

exports.checkLoginUser = async function(email, password) {
    var list = [];
    await new Promise((resolve, reject) => {
        User.findAll({
                where: { email: email },
                //attributes: [],
                raw: true
            })
            .then(data => {
                if (data.length > 0) {
                    // console.log("data", data);
                    if (passwordHash.verify(password, data[0].password)) {
                        list = data;
                    }
                }
                resolve();
            })
            .catch(err => {
                reject(err);
            });
    });
    return list;
};

exports.findAll = (req, res) => {
    User.findAll({
        order: [
            ['createdAt', 'DESC']
        ]
    })
        .then(data => {
            // console.log("res" + JSON.stringify(data));
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Users."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with id=" + id
            });
        });
};

exports.update = (req, res) => {
    // const id = req.body.id;
    User.update(req.body, {
            where: { id: req.params.id }
        })
        .then(num => {
            console.log(num)
            if (num == 1) {
                res.send({
                    success:true,
                    message: "Successfully updated."
                });
            } else {
                res.send({
                    success:false,
                    message: `Failed updation`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Record with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    // const id = req.params.id;
    User.destroy({
            where: { id: req.params.id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Record deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Record with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Record with id=" + id
            });
        });
};