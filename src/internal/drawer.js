class Drawer {
    constructor(store,map) {
        this.store = store.storage;
        this.map = map;
    }
    draw() {
        for(var i = 0; i < this.store.length; i++) {
            this.store[i].draw(this.map);
        }
    }
    setup() {
        for(var i = 0; i < this.store.length; i++) {
            this.store[i].setup();
        }
    }
}

export default Drawer;