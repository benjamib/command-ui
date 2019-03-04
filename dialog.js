let Station_1 = {
  tag: "station_1",
  content: "@Sidhartha: This is the Sidhartha on approach, anyone home?",
  choices:[{option:"Continue",next:"station_2"}]
};
let Station_2 = {
  tag:"station_2",
  content:"@station_067: Station zero six seven, copy, what can we do for you out in this sector Sidhartha?",
  choices:[{option:"What news do you have?", next:"news"},{option:"Do you have any information on a ship called Old Republic?",next:"old_republic_1"}]
};
let Old_republic_1 = {
  tag:"old_republic_1",
  content:"@station_067: Old Republic is registered right here. Been out for a few days with no reports, which has folks here a bit nervous.\nLast reported location was in sector 8.4, a few sectors west from Aegia. If you could take a look we would be grateful. \nIt's never a bad thing to have some friends in the void.",
  choices:[]
};
let News = {
  tag:"news",
  content:"@station_067: Locals here are pretty nervous about that jump gate. Whole thing will probably turn into a black hole and swallow\nthe entire system when they throw the switch. Hear that the Science Ministry has been hushing up anyone that speaks against it,\ntypical ministry strong arming. Glad we're out here far from that nonsense.",
  choices:[]
};

var StationDialog = new Map();

var currentDialogMap = new Map();

function addNode(node,dialog_map){
  dialog_map.set(node.tag,node);
}

addNode(Station_1,StationDialog);
addNode(Station_2,StationDialog);
addNode(News,StationDialog);
addNode(Old_republic_1,StationDialog);

function process(tag){
  var node = currentDialogMap.get(tag);
  
  var dlg = document.getElementById("dialog")
  if(!dlg.open){
    dlg.showModal();
  }
  if(node !== null && node!== undefined)
  {
      
      var content = document.querySelector('#content');
      content.innerHTML = node.content;
      var it = "";
      var btn = document.querySelector('.btn-group');
      btn.innerHTML = "";
      if(node.choices.length === 0){
          btn.innerHTML = btn.innerHTML + "<button id='"+it+"' onclick='closeDialog()'>Close</button>";
      }
     
      
      for(it=0;it<node.choices.length;it++){
        btn.innerHTML = btn.innerHTML + "<button id='"+it+"' onclick='process(&quot;"+node.choices[it].next+"&quot;)'>" + node.choices[it].option + "</button>";
      }
  }
}
function closeDialog(){
  var dlg = document.getElementById("dialog")
  if(dlg.open){
    dlg.close();
  }
  typeWriter("Comms channel disconnected...");
  return;
}