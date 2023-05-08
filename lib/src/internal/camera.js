class Camera {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }
    capture(map) {
        return map.map.slice(this.y, this.y + this.height).map(row => row.slice(this.x, this.x + this.width));
    }
}

export default Camera;