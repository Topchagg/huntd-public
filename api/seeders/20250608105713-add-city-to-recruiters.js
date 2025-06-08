/* eslint-disable @typescript-eslint/no-unused-vars */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate('recruiter_profiles',
      { city: 'Kyiv' },
      {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate('recruiter_profiles',
      { city: null },
      {});
  },
};
