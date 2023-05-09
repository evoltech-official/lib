var gagsas = new evol.components.box('gagsas',null,{
    "width": evol.screen.width - 4,
    "height": evol.screen.height - 4,
    "x": 2,
    "y": 2,
    "slice": [
        ["+", "-", "+"],
        ["|", " ", "|"],
        ["+", "-", "+"]
    ]
});
var box = new evol.components.box('thebox','gagsas',{
    "width": evol.screen.width - (evol.screen.width + 6)/2,
    "height": evol.screen.height - 6,
    "x": 1,
    "y": 1,
    "slice": [
        ["[", ">", "]"],
        ["[", ">", "]"],
        ["[", ">", "]"]
    ]
});
var box2 = new evol.components.box('knockoffbox','thebox',{
  "width": box.style.width-2,
  "height": 'full',
  "x": 1,
  "y": 8,
  "bgtile":"%"
});
var beautifultext = new evol.components.par('paragraph','thebox',{
  "width": box.style.width-2,
  "height": 2,
  "x": 1,
  "y": 1,
  "text": "[fg:blue]This is a [bold]bold[/bold] and \n[fg:green][bg:red]colorful[/fg][/bg] /[text/].[/fg] [italic]This is an [underline]underlined[/underline] and [italic]italic[/italic] text.[/italic]"
})
var fiont = true;
// define a fixed time step in milliseconds
let previous = 0;
let timeStep = 60;
// define a variable to store the accumulated time
let accumulatedTime = 0;
function animate(timestamp) {
  // calculate delta time in milliseconds
  let delta = timestamp - previous;
  // update previous timestamp
  previous = timestamp;
  // add delta to accumulated time
  accumulatedTime += delta;
  // update animation using fixed time step
  while (accumulatedTime >= timeStep) {
    // subtract time step from accumulated time
    accumulatedTime -= timeStep;
    // update animation logic using time step
    if(fiont) {
      if((box.style.x + box.style.width) < (box.parent.style.width - 1)) {
          box.style.x+= Math.floor(timeStep/60);
      } else {
          var boxstyle = box.style;
          boxstyle.slice[0][1] = "<";
          boxstyle.slice[1][1] = "<";
          boxstyle.slice[2][1] = "<";
          fiont = false;
      }
    } else {
      if(box.style.x != 1) {
          box.style.x-= Math.floor(timeStep/60);
      } else {
          var boxstyle = box.style;
          boxstyle.slice[0][1] = ">";
          boxstyle.slice[1][1] = ">";
          boxstyle.slice[2][1] = ">";
          fiont = true;
      }
    }
  }
  // request next frame
  requestAnimationFrame(animate);
}
// start animation
requestAnimationFrame(animate);
evol.store.add(gagsas);
evol.store.add(box);
evol.store.add(beautifultext);
evol.store.add(box2);
evol.init('Config');
evol.start();