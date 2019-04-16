const ticketdata = require('../models').ticketdata;


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