import EventEmitter from './classEventEmitter';
import Logger from './clasLogger';
import Movie from './classMovie';
import Actor from './classActor';
import Social from './Social';
let mylogger = new Logger;
let Movie1 = new Movie("Spider Man", "2016", 120);
let Movie2 = new Movie("Iron Man", "2015", 95);
let actor1 = new Actor("Leonardo Di Caprio", 47);
let otherCast = [
  new Actor("Benedict Cumberbatch", 29),
  new Actor("Jennifer Lopez", 38)
];
Movie1.on('play', mylogger.log);
Movie1.play();
Movie1.on('resume', mylogger.log);
Movie1.resume();
Movie1.off('play', mylogger.log);
Movie1.play();
Object.assign(Movie1, Social);
Movie1.share("John Frusciante");
Movie1.like("John Frusciante");
Movie1.addCast(actor1);
Movie1.addCast(otherCast);
console.log(Movie1.cast);