var box = new evol.components.box('id','thing',{
    "width": 10,
    "height": 10,
    "x": 1,
    "y": 1,
});
evol.store.add(box);
evol.init('Config');
evol.start();