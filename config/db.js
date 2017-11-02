const path = require('path');
const fs = require('fs');
const dbFile = path.join(__dirname, '..', 'app.db')
const DBConfig = {
	client: 'sqlite3',
	connection: {
		filename: dbFile
	},
    useNullAsDefault: true
};

const knex = require('knex')(DBConfig);
const db = require('bookshelf')(knex);
const validator = require('validator');

validator.isRequired = function (val) {
  return val != null;
}

db.plugin('bookshelf-validate', {
    validator: validator,
    validateOnSave: true
});

function createUserTable(exists) {
    if (!exists) {
        return knex.schema.createTable('users', function(t) {
            t.increments('id').primary();
            t.string('username');
            t.string('sponsor');
            t.string('email');
            t.string('firstName');
            t.string('secondName');
            t.date('birthday');
            t.string('phoneNumber');
            t.string('phoneNumber2');
            t.string('skype');
            t.string('country');
            t.string('state');
            t.string('city');
            t.string('address');
            t.string('zipCode');
            t.string('site');
            t.string('odnoklassniki');
            t.string('vk');
            t.string('fb');
            t.string('youtube');
            t.boolean('autoExtensionBS');
            t.boolean('showMobile');
            t.boolean('showEmail');
            t.boolean('showName');
            t.boolean('deliveryEMail');
            t.boolean('deliverySMS');
            t.string('password');
            t.string('finPassword');
        });
    }
}

function createNoteTable(exists) {
    if (!exists) {
        return knex.schema.createTable('notes', function(t) {
            t.increments('id').primary();
            t.integer('user_id');
            t.text('note');
        });
    }
}

function createPartnersTable(exists) {
    if (!exists) {
        return knex.schema.createTable('partners', function(t) {
            t.integer('user_id');
            t.integer('partner_id');
            t.primary(['user_id', 'partner_id']);
        });
    }
}

// Создаем таблицы, если не существуют.
fs.exists(dbFile, function(exists) {
    if (!exists) {
        knex.schema.hasTable('users').then(createUserTable);
        knex.schema.hasTable('note').then(createNoteTable);
        knex.schema.hasTable('partners').then(createPartnersTable);
    }
})

module.exports.bookshelf = db;
