"use strict";

module.exports = function(sequelize, DataTypes) {
	var USER = sequelize.define('USER', {
		user: { type: DataTypes.STRING, allowNull: false },
		pass: { type: DataTypes.STRING, allowNull: false },
		group: { type: DataTypes.STRING, allowNull: false, defaultValue: 'user' },
		email: DataTypes.STRING,
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
	});
	return USER;
};
