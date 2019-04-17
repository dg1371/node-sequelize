/**
 * Created by dan_g on 5/12/2017.
 */
module.exports = function (sequelize, DataTypes) {
    var reportdata = sequelize.define("reportdata", {
                authsummary: {type: DataTypes.INTEGER, description: "Update User ID"},

    }, {
        description: "Report Data",
        freezeTableName: true // Model tableName will be the same as the model name
    });

    return reportdata;
};