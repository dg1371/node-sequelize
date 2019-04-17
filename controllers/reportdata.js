const reportdata = require('../models').reportdata;


module.exports = {
    daySummary(req, res) {
        return reportdata
            .findAll()
            .then(reportdata => res.status(200).send(reportdata))
            .catch((error) => {
                console.log(error.toString());
                res.status(400).send(error)
            });
    },

    dayAverage(req, res) {
        return reportdata
            .findById(req.params.id, {

            })
            .then((reportdata) => {
                if (!reportdata) {
                    return res.status(404).send({
                        message: 'reportdata Not Found',
                    });
                }
                return res.status(200).send(reportdata);
            })
            .catch((error) => res.status(400).send(error));
    },


};