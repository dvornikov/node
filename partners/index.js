module.exports = function(app) {
    const getPartners = function(req, res, next) {
        res.send('This is not implemented now');
    };

    app.route('/user/personalPartners')
        .get(getPartners);
};
