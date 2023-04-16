import Box from "./components/box";
import Evol from "./internal/main";

var instance = new Evol();

const lib = {
    init: instance.init.bind(instance),
    start: instance.start.bind(instance),
    pause: instance.pause.bind(instance),
    map: instance.map,
    store: instance.store,
    get components() {
        return {
          box: Box
        };
    }
}

export default lib;