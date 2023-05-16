import Parser from "../parser/parser";

class Component {
    constructor(id,par) {
        this.id = id;
        this.parent = par;
        this.parser = new Parser();
    }
    on(name,func) {
        this.events.registerEvent(name,func);
    }
}

export default Component;