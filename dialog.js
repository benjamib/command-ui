let station_1 = {
  tag: "station_1",
  content: "THis is the Sidhartha on approach, anyone home?",
  choices:[{option:"Continue",next:"station_2"}]
};
let station_2 = {
  tag:"station_2",
  content:"Station zero six seven, copy, what can we do for you out in this sector Sidhartha?",
  choices:[{option:"News", next:"news"},{option:"Old Republic",next:"old_republic_1"}]
};
let old_republic_1 = {
  tag:"old_republic_1",
  content:"Old Republic is registered right here. Been out for a few days with no reports, which has folks here a bit nervous.\nLast reported location was in sector 8.4, a few sectors west from Aegia. If you could take a look we would be grateful. \nIt's never a bad thing to have some friends in the void.",
  choices:[]
};
let news = {
  tag:"news",
  content:"Locals here are pretty nervous about that jump gate. Whole thing will probably turn into a black hole and swallow\nthe entire system when they theow the switch. Hear that the Science Ministry has been hushing up anyone that speaks against it,\ntypical ministry strong arming. Glad we're out here far from that nonsense.",
  choices:[]
};

var StationDialog = new Map();

function addNode(node,dialog){
  dialog.set(node.tag,node);
}

addNode(station_1,StationDialog);
addNode(station_2,StationDialog);
addNode(news,StationDialog);
addNode(old_republic_1,StationDialog);

function process(tag,dialog){
  var node = dialog.get(tag);
  while(node !== null || node!== undefined)
  {
      document.getElementById("dialog").showModal();
      node = null;//dialog.get(node.choices[0].next);
  }
}