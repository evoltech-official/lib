import EventEmitter from 'events';

class EventRegistry extends EventEmitter {
    constructor(){
        super();
        this.registry = ['no','penis'];
    }
    registerBaseEvents() {
        console.log('Registered!!!');
    }
}

export default EventRegistry;