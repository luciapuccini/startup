/*---Create a Movie Class ,Instantiate some
Create an Actor class
Create a class called EventEmitter--->*/
"use strict"

class Movie {
  constructor(title,year,duration) {
    this.title = title;
    this.year = year;
    this.duration = duration;
  }
  //methods
  play() {
    console.log(this.title+' ' +'is the movie');
  }
  pause() {
  }
  resume() {
  }
}
//------------- instanciate and playing
let movie1 = new Movie('infinity war','2018',300);
movie1.play();
//-------------------------------------------
class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class EventEmitter {
  constructor() {
  }
  on(eventName,callback) {
    //The on method will receive a eventName and
    // a callback or listener that will be executed
    // each time a that event is triggered.
    document.getElementById('on').addEventListener('eventName', callback);
    function callback() {
    }
  }
  emit(eventName) { //The emit method will trigger events to be consumed by other functions or objects.
    document.getElementById('emit').addEventListener('eventName', fun);
  }
  off(eventName,callback) {//The off method will delete previously defined event listeners.

  }
}
