(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.listeners = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(event, callback) {
      if (this.listeners[event] !== callback) {
        this.listeners[event] = callback;
      }
    }
  }, {
    key: "off",
    value: function off(event, callback) {
      if (this.listeners[event]) {
        delete this.listeners[event];
      }
    }
  }, {
    key: "emit",
    value: function emit(movie, event) {
      if (this.listeners[event]) {
        this.listeners[event](movie, event);
      }
    }
  }]);

  return EventEmitter;
}();

exports.EventEmitter = EventEmitter;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Social = {
  share: function share(friendName) {
    console.log("Share " + this.title + " with " + friendName);
  },
  like: function like(friendName) {
    console.log(friendName + " liked " + this.title);
  }
};
exports.Social = Social;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age) {
  _classCallCheck(this, Actor);

  this.name = name, this.age = age;
};

exports.Actor = Actor;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Movie = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EventEmitter2 = require('./EventEmitter');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_EventEmitter) {
  _inherits(Movie, _EventEmitter);

  function Movie(title, year, duration) {
    _classCallCheck(this, Movie);

    var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

    _this.title = title;
    _this.year = year;
    _this.duration = duration;
    _this.cast = [];
    return _this;
  }

  _createClass(Movie, [{
    key: 'play',
    value: function play() {
      _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, this, 'play');
    }
  }, {
    key: 'pause',
    value: function pause() {
      _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, this, 'pause');
    }
  }, {
    key: 'resume',
    value: function resume() {
      _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, this, 'resume');
    }
  }, {
    key: 'addCast',
    value: function addCast(actor) {
      this.cast = this.cast.concat(actor);
    }
  }]);

  return Movie;
}(_EventEmitter2.EventEmitter);

exports.Movie = Movie;

},{"./EventEmitter":1}],5:[function(require,module,exports){
'use strict';

var _EventEmitter = require('./EventEmitter');

var _logger = require('./logger');

var _Movie = require('./Movie');

var _Actor = require('./Actor');

var _Social = require('./Social');

var mylogger = new _logger.logger();

var movie1 = new _Movie.Movie("Spider Man", "2016", "120");
var movie2 = new _Movie.Movie("Iron Man", "2015", "95");

var actor1 = new _Actor.Actor("Leonardo Di Caprio", 47);
var otherCast = [new _Actor.Actor("Benedict Cumberbatch", 29), new _Actor.Actor("Jennifer Lopez", 38)];

movie1.on('play', mylogger.log);
movie1.play();

movie1.on('resume', mylogger.log);
movie1.resume();

movie1.off('play', mylogger.log);
movie1.play();

Object.assign(movie1, _Social.Social);

movie1.share("John Frusciante");
movie1.like("John Frusciante");
movie1.addCast(actor1);
movie1.addCast(otherCast);
console.log(movie1.cast);

},{"./EventEmitter":1,"./Social":2,"./Actor":3,"./Movie":4,"./logger":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = function () {
  function logger() {
    _classCallCheck(this, logger);
  }

  _createClass(logger, [{
    key: "log",
    value: function log(movie, functionName) {
      console.log(movie.title + " " + functionName);
    }
  }]);

  return logger;
}();

exports.logger = logger;

},{}]},{},[5]);
