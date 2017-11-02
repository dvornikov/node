// framework. решил Express, т.к. помню что он легок в плане старта для
// программиста.
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
};

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// для token будем использовать JWT. Не лучшее место для настройки,
// но так нет Dependency Injection делаем так.
const jwt = require('express-jwt');
app.use(
    jwt({
        secret: 'gem4me',
        getToken: function (req) {
            if (req.query && req.query.token) {
                return req.query.token;
            }
            return null;
        }
    })
    .unless({path: ['/auth']})
);
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    req.user = false;
  }
  next();
});

// решил использовать такую организацию кода, вместо MVC. По идеи никто не мешает потом
// сделать MVC внутри модулей.
require('./user')(app);
require('./note')(app);
require('./partners')(app);

app.use(express.static(__dirname + '/public'))
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});
