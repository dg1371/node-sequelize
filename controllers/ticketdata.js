const ticketdata = require('../models').ticketdata;
const sequelize = require('sequelize');


module.exports = {
    list(req, res) {
        return ticketdata
            .findAll()
            .then(ticketdata => res.status(200).send(ticketdata))
            .catch((error) => {
                console.log(error.toString());
                res.status(400).send(error)
            });
    },
//SELECT to_char(AVG (authdays), '99999999999999999D99') FROM ticketdata;

// select count(*) from ticketdata where created > now() - interval '12 hour';

    average(req, res) {
        return ticketdata
            .findAll({
                attributes: ['createuserid', [sequelize.fn('AVG',
                    sequelize.col('authdays')), 'authdays']],
                group: ['createuserid'],
                //order: [[sequelize.fn('AVG', sequelize.col('authdays')), 'DESC']]
            })
            .then(ticketdata => res.status(200).send(ticketdata))
            .catch((error) => {
                console.log(error.toString());
                res.status(400).send(error)
            });
    },

    total(req, res) {
        return ticketdata
            .findAll({
                where: {
                    [sequelize.Op.and]: [
                        sequelize.literal(`created > NOW() - INTERVAL '12 hour'`),
                    ],
                },
                attributes: ['createuserid', [sequelize.fn('COUNT', sequelize.col('id')), 'createuserid']],
                group: ['createuserid']

            })
            .then(ticketdata => res.status(200).send(ticketdata))
            .catch((error) => {
                console.log(error.toString());
                res.status(400).send(error)
            });
    },

    getById(req, res) {
        return ticketdata
            .findById(req.params.id, {

            })
            .then((ticketdata) => {
                if (!ticketdata) {
                    return res.status(404).send({
                        message: 'ticketdata Not Found',
                    });
                }
                return res.status(200).send(ticketdata);
            })
            .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return ticketdata
            .create({
                name: req.body.name,
                authdays: req.body.authdays
            })
            .then((ticketdata) => res.status(201).send(ticketdata))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return ticketdata

                    .update({
                        name: req.body.name,
                        authdays: req.body.authdays
                    },
                        {
                            where: {
                                id: req.params.id
                            },}
                            )
                    .then(() => res.status(200).send(ticketdata))
                    .catch((error) => res.status(400).send(error));


    },

    delete(req, res) {
        return ticketdata
            .findById(req.params.id)
            .then(ticketdata => {
                if (!ticketdata) {
                    return res.status(400).send({
                        message: 'ticketdata Not Found',
                    });
                }
                return ticketdata
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};