'use strict';

var _classEventEmitter = require('./classEventEmitter');

var _classEventEmitter2 = _interopRequireDefault(_classEventEmitter);

var _clasLogger = require('./clasLogger');

var _clasLogger2 = _interopRequireDefault(_clasLogger);

var _classMovie = require('./classMovie');

var _classMovie2 = _interopRequireDefault(_classMovie);

var _classActor = require('./classActor');

var _classActor2 = _interopRequireDefault(_classActor);

var _Social = require('./Social');

var _Social2 = _interopRequireDefault(_Social);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mylogger = new _clasLogger2.default();
var movie1 = new _classMovie2.default("Spider Man", "2016", 120);
var movie2 = new _classMovie2.default("Iron Man", "2015", 95);
var actor1 = new _classActor2.default("Leonardo Di Caprio", 47);
var otherCast = [new _classActor2.default("Benedict Cumberbatch", 29), new _classActor2.default("Jennifer Lopez", 38)];
movie1.on('play', mylogger.log);
movie1.play();
movie1.on('resume', mylogger.log);
movie1.resume();
movie1.off('play', mylogger.log);
movie1.play();
Object.assign(Movie1, _Social2.default);
movie1.share("John Frusciante");
movie1.like("John Frusciante");
movie1.addCast(actor1);
movie1.addCast(otherCast);
console.log(movie1.cast);