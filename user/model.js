const bookshelf = require('../config/db').bookshelf;

const User = bookshelf.Model.extend({
    validations: {
        sponsor: {
            isRequired: true
        },
        username: {
            isRequired: true
        },
        email: {
            isRequired: true,
            isEmail: true
        },
        firstName: {
            isRequired: true
        },
        secondName: {
            isRequired: true
        },
        phoneNumber: {
            isRequired: true
        },
        country: {
            isRequired: true
        },
        password: {
            isRequired: true
        },
        finPassword: {
            isRequired: true
        }
    },
	tableName: 'users'
});

module.exports = {
	User: User
};
