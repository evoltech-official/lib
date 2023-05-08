import Box from "./components/box";
import Evol from "./internal/main";
import Parargaph from "./components/paragraph";

var instance = new Evol();

const lib = {
    init: instance.init.bind(instance),
    start: instance.start.bind(instance),
    pause: instance.pause.bind(instance),
    map: instance.map,
    store: instance.store,
    camera: instance.map.camera,
    get screen() {
      return {
        width: instance.map.camera.width,
        height: instance.map.camera.height
      };
    },
    get components() {
        return {
          box: Box,
          par: Parargaph
        };
    }
}

export default lib;