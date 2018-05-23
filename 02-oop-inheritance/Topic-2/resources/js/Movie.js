import {
  EventEmitter
} from './EventEmitter';
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
    super.emit(this, 'play');
  }
  pause() {
    console.log('PAUSED');
    super.emit(this, 'pause');
  }
  resume() {
    super.emit(this, 'resume');
  }
  addCast(cast) {
    for(var i in cast) {
      this.actors.push(cast[i]);
    }
  }
} //----------------end movie
export {
  Movie
}
