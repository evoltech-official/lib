import Camera from './camera';
import Drawer from './drawer';

class Map {
    constructor(store) {
        this.map;
        this.drawer = new Drawer(store,this);
        this.camera = new Camera();
        this.camera.width = Math.floor(this.fromWidthToText(window.innerWidth*0.8,0)[1]);
        this.camera.height = Math.floor(this.fromWidthToText(0,window.innerHeight)[0]);
    }
    fromWidthToText(x,y) {
        var linewidth = x/13;
        var lineheight = y/29;
        return [lineheight,linewidth];
    }
    update() {
        this.camera.width = Math.floor(this.fromWidthToText(window.innerWidth*0.8,0)[1]);
        this.camera.height = Math.floor(this.fromWidthToText(0,window.innerHeight)[0]);
        this.map = Array.from({ length: this.camera.height }, () => Array(this.camera.width).fill(' '));
    }
    draw() {
        this.update();
        this.drawer.draw();
        const window = this.camera.capture(this);
        return window.map(row => row.join('')).join('<br>');
    }
    addRows(rows) {
        for (var i = 0; i < rows; i++) {
            this.map.push(Array(this.map[0].length).fill(' '));
        }
    }
    addColumns(columns) {
        this.map = this.map.map(function(row) {
            var newColumns = Array(columns).fill(' ');
            return row.concat(newColumns);
        });
    }
    drawRect(x, y, width, height, tile) {
        if (x < 0 || y < 0) {
            console.error('Error: Invalid coordinates');
        }
        if (x + width > this.map[0].length) {
            this.addColumns(x + width - this.map[0].length);
        }
        if (y + height > this.map.length) {
            this.addRows(y + height - this.map.length);
        }
        for (var xcoord = x; xcoord < x + width; xcoord++) {
            for (var ycoord = y; ycoord < y + height; ycoord++) {
                this.map[ycoord][xcoord] = tile;
            }
        }
    }
    getPoint(x,y) {
        return this.map[y][x];
    }
    setPoint(x,y,tile) {
        this.map[y][x] = tile;
    }
}
export default Map;