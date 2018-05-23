import EventEmitter from './EventEmitter';
import Logger from './Logger';
import Movie from './Movie';
import Actor from './Actor';
import Social from './Social';
let mylogger = new Logger;
let movie1 = new Movie("Spider Man", "2016", 120);
let movie2 = new Movie("Iron Man", "2015", 95);
let actor1 = new Actor("Leonardo Di Caprio", 47);
let otherCast = [
  new Actor("Benedict Cumberbatch", 29),
  new Actor("Jennifer Lopez", 38)
];
movie1.on('play', mylogger.log);
movie1.play();
movie1.on('resume', mylogger.log);
movie1.resume();
movie1.off('play', mylogger.log);
movie1.play();
Object.assign(Movie1, Social);
movie1.share("John Frusciante");
movie1.like("John Frusciante");
movie1.addCast(actor1);
movie1.addCast(otherCast);
console.log(movie1.cast);
