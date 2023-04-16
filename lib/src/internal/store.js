class Store {
    constructor() {
        this.storage = new Array();
    }
    find(id) {
        return this.storage.find(x => x.id === id);
    }
    add(component) {
        if(this.find(component.id)) {
            console.error('Error: The id of the component you are trying to add ('+component.id+') intersects with an already provided id.')
        } else {
            this.storage.push(component);
        }
    }
    remove(id) {
        if(this.find(id)) {
            this.storage = this.storage.filter(x => x.id !== id);
        } else {
            console.error('Error: There is no existing component with the id ('+id+') you are trying to remove.')
        }
    }
}
export default Store;