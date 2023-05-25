class Drawer {
    constructor(main) {
        this.store = main.store.storage;
        this.map = main.map;
        this.evolobj = main;
    }
    draw() {
        this.store.forEach(item => {
            item.draw(this.map);
        });
    }
    setup() {
        this.store.forEach(item => {
            item.setup(this.evolobj);
        });
    }
}

export default Drawer;