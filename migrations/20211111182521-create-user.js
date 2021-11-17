'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {


      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },



      firstName: {
        field: 'first_name',
        allowNull: false,
        type: Sequelize.STRING
      },
      lastName: {
        field: 'last_name',
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      password: {
        field: 'password_hash',
        allowNull: false,
        type: Sequelize.STRING
      },
      birthdate: {
        type: Sequelize.DATE,
      },
      isSubscribed: {
        field: 'is_subscribed',
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },


      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};