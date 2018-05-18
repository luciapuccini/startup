/*<!---Class heritage
Make the Movie class a subclass of EventEmitter and use the inherited methods
to publish play, pause and resume events when the related method is called.--------->*/
"use strict"

class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) { // The on method takes the event name and the function to call when someone emits the event.
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }
  emit(eventName, ...rest) { //The emit method will trigger events to be consumed by other functions or objects.
    const ev = this.events[eventName];
    if (ev) {
        ev.forEach( cb => {
        cb.apply(null, rest)
      });
    }
  }
  off(eventName, callback) { //The off method will delete previously defined event listeners.
    this.removeAllListeners(); //found this func, not sure it works
  }
}

class Movie extends EventEmitter {
  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
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
}
//------------- instanciate and playing------------
let movie1 = new Movie('infinity war', '2018', 300);
let movie2 = new Movie ('Sherlock holmes', '2011',210);
const ee = new EventEmitter();
movie1.on('playEvent',() => {movie1.play();});
movie1.emit('playEvent');
movie2.on('pauseEvent',() => {movie2.pause();}); //defines .pause as callback
movie2.emit('pauseEvent');
//------------------------------------------------
class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
