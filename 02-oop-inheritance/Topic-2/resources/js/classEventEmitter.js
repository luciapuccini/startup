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
export {
  EventEmitter
}