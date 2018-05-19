/*method to Movie as addCast(cast)
 that allows the addition of one or more Actors*/
/*Logger class ???????????????*/
"use strict"
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) { // The on method takes the event name and the function to call when someone emits the event.
    if(this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }
  emit(eventName, ...rest) { //The emit method will trigger events to be consumed by other functions or objects.
    const ev = this.events[eventName];
    if(ev) {
      ev.forEach(cb => {
        cb.apply(null, rest)
      });
    }
  }
  off(eventName, callback) { //The off method will delete previously defined event listeners.
    this.removeAllListeners(); //found this func, not sure it works
  }
}
class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Movie extends EventEmitter {
  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.actors = [];
  }
  //methods
  play() {
    console.log('Now playing: ' + this.title);
  }
  pause() {
    console.log('PAUSED');
  }
  resume() {
    console.log('Resuming movie:  ' + this.title);
  }
  addCast(cast) {
    for(var i in cast) {
      this.actors.push(cast[i]);
    }
  }
} //----------------end movie
class Logger {
  this.events = {};
  constructor() {}
  log(info) {}
  addListener(event, callback) {
    // Create the event if not exists
    if(this.events[event] === undefined) {
      this.events[event] = {
        listeners: []
      }
    }
    this.events[event].listeners.push(callback);
  }
} //-----------------end logger
//------------- instanciate and playing------------
const terminator = new Movie('Terminator I', 1985, 60);
var log = new Logger();