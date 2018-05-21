'use strict';

var _EventEmitter = require('./EventEmitter');

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _Logger = require('./Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _Movie = require('./Movie');

var _Movie2 = _interopRequireDefault(_Movie);

var _Actor = require('./Actor');

var _Actor2 = _interopRequireDefault(_Actor);

var _Social = require('./Social');

var _Social2 = _interopRequireDefault(_Social);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mylogger = new _Logger2.default();
var movie1 = new _Movie2.default("Spider Man", "2016", 120);
var movie2 = new _Movie2.default("Iron Man", "2015", 95);
var actor1 = new _Actor2.default("Leonardo Di Caprio", 47);
var otherCast = [new _Actor2.default("Benedict Cumberbatch", 29), new _Actor2.default("Jennifer Lopez", 38)];
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