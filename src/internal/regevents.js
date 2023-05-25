class EventRegistry {
    constructor(){
        this.registry = [];
    }
    registerBaseEvents(io) {
        io.on("connection", (socket) => {
            socket.on('keydown', (e) => {
                this.emitEvent('keydown',e);
            });
            socket.on('keypress', (e) => {
                this.emitEvent('keypress',e);
            });
            socket.on('keyup', (e) => {
                this.emitEvent('keyup',e);
            });
            socket.on('resize', (e) => {
                this.emitEvent('resize',e);
            });
        });
    }
    emitEvent(name,event) {
        this.registry.filter(x => x.id === name).forEach(item => {
            item.run(event);
        });
    }
    registerEvent(name,func) {
        this.registry.push({
            id: name,
            run: func,
        });
    }
}

export default EventRegistry;