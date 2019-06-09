class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(name, fn) {
    const event = this.events[name];

    if(event) event.push(fn);
    else this.events[name] = [fn];
  }

  emit(name, ...data) {
    const event = this.events[name];
    if(event) event.forEach(fn => fn(...data));
  }
}

export default EventEmitter;