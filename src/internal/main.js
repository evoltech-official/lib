import Map from "./map";
import Store from "./store";
import EventRegistry from "./regevents";

class Evol {
    constructor() {
        this.store = new Store();
        this.events = new EventRegistry();
        this.map = new Map(this.store,this.events);
        this.everyfunc = [];
        this.pts;
        this.stopped = false;
    }
    init(config) {
        this.map.drawer.setup();
        this.events.registerBaseEvents();
        console.log(config);
    }
    start() {
        let start = Date.now();
        const step = (ts) => {
            if (this.pts != ts) {
                document.getElementById('term').innerHTML = this.map.draw();
            }
            this.everyfunc.forEach(item => {
                let elapsed = Date.now() - item.start;
                if (elapsed >= item.ms) {
                    item.start = Date.now();
                    item.func();
                }
            });
            if (!this.stopped) {
                this.pts = ts;
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step);
    }
    every(ms,func) {
        this.everyfunc.push(
            {
                start: Date.now(),
                func: func,
                ms: ms
            }
        )
    }
    pause() {
        this.stopped = this.stopped ? false : true;
    }
    on(name,func) {
        this.events.registerEvent(name,func);
    }
}

export default Evol;