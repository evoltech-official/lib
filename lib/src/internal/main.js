import Map from "./map";
import Store from "./store";
import EventEmitter from 'events';

class Evol extends EventEmitter {
    constructor() {
        super();
        this.store = new Store();
        this.map = new Map(this.store);
        this.elapsed;
        this.pts;
        this.stopped = false;
        
    }
    init(config) {
        console.log(config);
    }
    start() {
        const step = (ts) => {
            if (this.pts != ts) {
                document.getElementById('term').innerHTML = this.map.draw();
            }
            if (!this.stopped) {
                this.pts = ts;
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step);
    }
    pause() {
        this.stopped = this.stopped ? false : true;
    }
}

export default Evol;