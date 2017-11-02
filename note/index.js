module.exports = function(app) {
    const getNote = function(req, res, next) {
        res.send('This is not implemented now');
    };

    const newNote = function(req, res, next) {
        res.send('This is not implemented now');
    };

    const editNote = function(req, res, next) {
        res.send('This is not implemented now');
    };

    const deleteNote = function(req, res, next) {
        res.send('This is not implemented now');
    };

    app.route('/user/note')
        .post(newNote)
        .get(getNote)
        .put(editNote)
        .delete(deleteNote);
};
