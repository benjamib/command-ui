let Station_1 = {
  tag: "station_1",
  content: "@Sidhartha: This is the Sidhartha on approach, anyone home?",
  choices:[Station_1_Option_1]
};
let Station_2 = {
  tag:"station_2",
  content:"@station_067: Station zero six seven, copy, what can we do for you out in this sector Sidhartha?",
  choices:[Station_2_Option_1,Station_2_Option_2]
};
let Old_republic_1 = {
  tag:"old_republic_1",
  content:"@station_067: Old Republic is registered right here. Been out for a few days with no reports, which has folks here a bit nervous.\nLast reported location was in sector 8.4, a few sectors west from Aegia. If you could take a look we would be grateful. \nIt's never a bad thing to have some friends in the void.",
  choices:[Old_Republic_Option_1]
};
let News = {
  tag:"news",
  content:"@station_067: Locals here are pretty nervous about that jump gate. Whole thing will probably turn into a black hole and swallow\nthe entire system when they throw the switch. Hear that the Science Ministry has been hushing up anyone that speaks against it,\ntypical ministry strong arming. Glad we're out here far from that nonsense.",
  choices:[Station_2_Option_2,News_Option_2]
};
let Station_3 = {
  tag:"station_3",
  content:"@station_067: Any word on the Old Republic? I've got a bad feeling about this one, not like Captain Pip to not check in with the station on the regular.",
  choices:[Station_3_Option_1]
};
let Station_4 ={
  tag:"station_4",
  content:"@Sidhartha: I searched sector 8.4 and found a debris field. The only thing left was the ship's log. You can have the log, but I would like to know what was in those last enrtries.",
  choices:[Station_4_Option_1]
};
let Station_5 ={
  tag:"station_5",
  content:"@station_067: Thanks for searching, we appreciate the favor you did us. We can hand over the information from those logs for a price. The Old Republic was in the process of procuring some equipment for us. Bring back the following: \nRemote Detonators qty: 5\nCX85 Mining Charge qty: 5\nV.2 Delivery Drones qty: 5",
  choices:[Station_5_Option_1]
};
let Station_6={
  tag:"station_6",
  content:"@station_067: Do you have the equipment we needed?",
  choices:[Station_6_Option_1]
};
var StationDialog = new Map();

var currentDialogMap = new Map();


function Station_3_Option_1(){
  if(gs.gameFlags.foundOR !== true){
    gs.gameFlags.foundOR = true;
    return {option:"No word yet, but I will continue to search the void for your lost friends",next:null};
  } else {
    return {option:"I have some bad news...",next:"station_4"};
  }
}
function Station_1_Option_1(){
  if(gs.gameFlags.looking !== true){
    return {option:"Continue",next:"station_2"};
  } else if(gs.gameFlags.procuring !== true){
    return {option:"Continue", next:"station_3"};
  } else{
    return {option:"Continue", next:"station_6"};
  }
}
function Station_2_Option_1(){
  return {option:"What news do you have?", next:"news"};
}
function Station_2_Option_2(){
  return {option:"Do you have any information on a ship called Old Republic?",next:"old_republic_1"};
}
function Old_Republic_Option_1(){
  gs.gameFlags.looking = true;
  return {option:"Close",next:null};
}
function News_Option_2(){
  return {option:"Close",next:null};
}
function Station_4_Option_1(){
  return {option:"Continue",next:"station_5"};
}
function Station_5_Option_1(){
  gs.gameFlags.procuring = true;
  return {option:"No problem",next:null};
}
function Station_6_Option_1(){
  return {option:"Still working on it...",next:null};
}

function addNode(node,dialog_map){
  dialog_map.set(node.tag,node);
}

addNode(Station_1,StationDialog);
addNode(Station_2,StationDialog);
addNode(News,StationDialog);
addNode(Old_republic_1,StationDialog);
addNode(Station_3,StationDialog);
addNode(Station_4,StationDialog);
addNode(Station_5,StationDialog);
addNode(Station_6,StationDialog);
function process(tag){
  var node = currentDialogMap.get(tag);
  
  var dlg = document.getElementById("dialog")
  if(!dlg.open){
    dlg.showModal();
  }
  if(node !== null && node!== undefined)
  {
      if(node.onProcess !== undefined)
        node.onProcess();
      var content = document.querySelector('#content');
      content.innerHTML = node.content;
      var it = "";
      var btn = document.querySelector('.btn-group');
      btn.innerHTML = "";
      
      for(it=0;it<node.choices.length;it++){
        var choice = node.choices[it]();
        if(choice !== null)
          btn.innerHTML = btn.innerHTML + "<button id='"+it+"' onclick='process(&quot;"+choice.next+"&quot;)'>" + choice.option + "</button>";
      }
  } else {
    closeDialog();
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