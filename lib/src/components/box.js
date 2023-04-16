import Component from "./component";

class Box extends Component {
    constructor(id,par,style) {
        super(id,par);
        this.style = style;
        this.stylelogged = true;
    }
    draw(map) {
        map.drawRect(this.style.x,this.style.y,this.style.width,this.style.height,' ');
    }
}

export default Box;