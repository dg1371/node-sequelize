/**
 * Created by dan_g on 5/12/2017.
 */
module.exports = function (sequelize, DataTypes) {
    var ticketdata = sequelize.define("ticketdata", {
        id: {type: DataTypes.UUID, allowNull: false, defaultValue: DataTypes.UUIDV1, unique: true, primaryKey: true, description: "ID"},
        name: {type: DataTypes.STRING, allowNull: false, description: "Name"},
        authdays: {type: DataTypes.INTEGER, description: "Update User ID"},
        createuserid: {type: DataTypes.UUID, description: "Create User ID"},
        createdAt: {type: DataTypes.DATE, description: "Created Date",field: 'created'},
        updatedAt: {type: DataTypes.DATE, description: "Updated Date", field: 'updated'},


    });

    return ticketdata;
};