const Model = require('./model');

module.exports = function(app) {
    const getUser = function(req, res, next) {
        if (!req.user) {
            res.status(401).end();
            return;
        }
        res.send('This is not implemented now');
    };

    const newUser = function(req, res, next) {
        new Model.User({
            sponsor: req.body.sponsor,
            username: req.body.username,
            email: req.body.email,
            firstName: req.body.firstName,
            secondName: req.body.secondName,
            phoneNumber: req.body.phone,
            country: req.body.country,
            password: req.body.password,
            finPassword: req.body.finPassword,
            skype: req.body.skype
        })
        .save()
        .then(function (user) {
            res.json(user.toJSON());
            // res.status(200).json({ token: 0 });
        })
        .catch(function (error) {
            console.log(error);
            res.send('An error occured');
        });
        // res.send('This is not implemented now');
    };

    const editUser = function(req, res, next) {
        if (!req.user) {
            res.status(403);
        }
        res.send('This is not implemented now');
    };

    const resetPassword = function(req, res, next) {
        res.send('This is not implemented now');
    };

    const changePassword = function(req, res, next) {
        res.send('This is not implemented now');
    };

    const authUser = function(req, res, next) {
        res.send('This is not implemented now');
    };

    app.route('/user')
        .get(getUser)
        .post(newUser)
        .put(editUser);

    app.get('/auth', authUser);
};
