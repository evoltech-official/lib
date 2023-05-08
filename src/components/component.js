import Parser from "../parser/parser";

class Component {
    constructor(id,par) {
        this.id = id;
        this.parent = par;
        this.parser = new Parser();
    }
}

export default Component;