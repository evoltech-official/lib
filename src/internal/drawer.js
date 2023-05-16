class Drawer {
    constructor(store,map,events) {
        this.store = store.storage;
        this.map = map;
        this.events = events;
    }
    draw() {
        this.store.forEach(item => {
            item.draw(this.map);
        });
    }
    setup() {
        this.store.forEach(item => {
            item.setup(this.events);
        });
    }
}

export default Drawer;