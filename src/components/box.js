import Component from "./component";

class Box extends Component {
    constructor(id,par,style) {
        super(id,par);
        this.style = style;
    }
    draw(map) {
        this.style.litx = this.style.x;
        this.style.lity = this.style.y;
        if(this.parent) {
            if(/^\d+(\.\d+)?%$/g.test(this.style.x)) {
                console.log(this.id);
                var percentnum = this.style.x.slice (0, -1);
                this.style.x = Math.round((percentnum / 100) * this.parent.style.width);
            }
            if(/^\d+(\.\d+)?%$/g.test(this.style.y)) {
                console.log(this.id);
                var percentnum = this.style.y.slice (0, -1);
                this.style.y = Math.round((percentnum / 100) * this.parent.style.height);
            }
            if(/^\d+(\.\d+)?%$/g.test(this.style.width)) {
                console.log(this.id);
                var percentnum = this.style.width.slice (0, -1);
                this.style.width = Math.round((percentnum / 100) * this.parent.style.width);
            }
            if(/^\d+(\.\d+)?%$/g.test(this.style.height)) {
                var percentnum = this.style.height.slice (0, -1);
                this.style.height = Math.round((percentnum / 100) * this.parent.style.height);
                console.log(this.id);
            }
            if(this.style.width == 'full') {
                this.style.width = this.parent.style.width - this.style.x;
            }
            if(this.style.height == 'full') {
                this.style.height = this.parent.style.height - this.style.y;
            }
            this.style.litx = this.parent.style.litx + this.style.x;
            this.style.lity = this.parent.style.lity + this.style.y;
        }
        map.drawRect(this.style.litx,this.style.lity,this.style.width,this.style.height,this.style.slice ? this.style.slice[1][1] : ' ');
        if(this.style.slice) {
            map.drawRect(this.style.litx, this.style.lity, 1, 1, this.style.slice[0][0]);
            map.drawRect(this.style.litx + this.style.width - 1, this.style.lity, 1, 1, this.style.slice[0][2]);
            map.drawRect(this.style.litx, this.style.lity + this.style.height - 1, 1, 1, this.style.slice[2][0]);
            map.drawRect(this.style.litx + this.style.width - 1, this.style.lity + this.style.height - 1, 1, 1, this.style.slice[2][2]);
            for (var i = this.style.litx + 1; i < this.style.litx + this.style.width - 1; i++) {
                map.drawRect(i, this.style.lity, 1, 1, this.style.slice[0][1]);
                map.drawRect(i, this.style.lity + this.style.height - 1, 1, 1, this.style.slice[2][1]);
            }
            for (var j = this.style.lity + 1; j < this.style.lity + this.style.height - 1; j++) {
                map.drawRect(this.style.litx, j, 1, 1, this.style.slice[1][0]);
                map.drawRect(this.style.litx + this.style.width - 1, j, 1, 1, this.style.slice[1][2]);
            }
        } else {
            if(this.style.bgtile) {
                map.drawRect(this.style.litx,this.style.lity,this.style.width,this.style.height,this.style.bgtile);
            }
        }
    }
    setup(event) {
        if (this.parent) {
            var pas = evol.store.find(this.parent);
            if(pas) {
                this.parent = pas;
            } else {
                console.error('The parent { '+this.parent+' } you provided for the { '+this.id+' } component deos not exist.');
            }
        } else this.parent = null;
        this.events = event;
    }
}

export default Box;