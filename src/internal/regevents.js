class EventRegistry {
    constructor(){
        this.registry = [];
    }
    registerBaseEvents() {
        document.addEventListener('keydown', (e) => {
            this.emitEvent('keydown',e);
        });
        document.addEventListener('keypress', (e) => {
            this.emitEvent('keypress',e);
        });
        document.addEventListener('keyup', (e) => {
            this.emitEvent('keyup',e);
        });
        document.addEventListener('resize', (e) => {
            this.emitEvent('resize',e);
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