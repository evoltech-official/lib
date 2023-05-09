import Component from "./component";

class Parargaph extends Component {
    constructor(id,par,style) {
        super(id,par);
        this.style = style;
    }
    draw(map) {
        this.style.litx = this.style.x;
        this.style.lity = this.style.y;
        if(this.parent) {
            this.style.litx = this.parent.style.litx + this.style.x;
            this.style.lity = this.parent.style.lity + this.style.y;
            if(this.style.width == 'full') {
                this.style.width = this.parent.style.width - this.style.x;
            }
            if(this.style.height == 'full') {
                this.style.height = this.parent.style.height - this.style.y;
            }
        }
        if (this.style.text) {
            var chars = this.parser.parseToIndividualChar(this.style.text);
            var suby = 0;
            var subwidth = 0;
            for(var ch = 0; ch < chars.length; ch++) {
                if (subwidth >= this.style.width) {
                    suby++;
                    if(suby+1 > this.style.height) {
                        map.setPoint(this.style.litx+subwidth-3,this.style.lity+this.style.height-1,'.');
                        map.setPoint(this.style.litx+subwidth-2,this.style.lity+this.style.height-1,'.');
                        map.setPoint(this.style.litx+subwidth-1,this.style.lity+this.style.height-1,'.');
                        break;
                    }
                    subwidth = 0;
                }
                if (chars[ch] == 25) {
                    suby++;
                    ch+=2;
                    if(suby+1 > this.style.height) {
                        map.setPoint(this.style.litx+subwidth-3,this.style.lity+this.style.height-1,'.');
                        map.setPoint(this.style.litx+subwidth-2,this.style.lity+this.style.height-1,'.');
                        map.setPoint(this.style.litx+subwidth-1,this.style.lity+this.style.height-1,'.');
                        break;
                    }
                    subwidth = 0;
                }
                map.setPoint(this.style.litx+subwidth,this.style.lity+suby,chars[ch]);
                subwidth++;
            }
        } else {
            console.error('The style value { text } was not provided in the { '+this.id+' } component.');
        }
    }
    setup() {
        if (this.parent) {
            var pas = evol.store.find(this.parent);
            if(pas) {
                this.parent = pas;
            } else {
                console.error('The parent { '+this.parent+' } you provided for the { '+this.id+' } component deos not exist.');
            }
        } else this.parent = null;
    }
}

export default Parargaph;