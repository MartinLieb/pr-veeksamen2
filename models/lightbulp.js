'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lightbulp = sequelize.define('Lightbulp', {
    on_or_off: DataTypes.BOOLEAN,
    nominel_use: DataTypes.DOUBLE,
    actual_use: DataTypes.DOUBLE,
    light_percent: DataTypes.DOUBLE,
    hardware_type: DataTypes.DOUBLE,
    software_version: DataTypes.DOUBLE

  }, {});
  Lightbulp.associate = function(models) {
    // associations can be defined here
  };
  return Lightbulp;
};