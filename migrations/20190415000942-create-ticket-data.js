/**
 * Created by dan_g on 5/12/2017.
 */

"use strict";
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable("ticketdata", {
            id: {
                type: Sequelize.UUID,
                allowNull: false,
                defaultValue: Sequelize.UUIDV1,
                unique: true,
                primaryKey: true
            },

            name: {
                type: Sequelize.STRING,
                allowNull: false,
                description: "Name"
            },
            createuserid: {
                type: Sequelize.UUID,
                description: "Create User ID"
            },
            authdays: {
                allowNull: false,
                type: Sequelize.INTEGER,
                description: "Authorized Days"
            },
            created: {
                allowNull: false,
                type: Sequelize.DATE,
                description: "Created Date",
            },
            updated: {
                allowNull: false,
                type: Sequelize.DATE,
                description: "Updated Date"
            }
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable("ticketdata");
    }
};