  
function GetAboutSAM(){
  return gs.SAM.about;
}
function GetHelp(){
  return gs.SAM.help;
}
function GetShip(){
  var str ="";
  str+="Name: " + gs.ship.name;
  str+="\nType: "+ gs.ship.type;
  str+="\n\n" + gs.ship.about;
  return str;
}


let Rendevous_1 = new objective(1);
Rendevous_1.content = "Travel to sector 7,2 and investigate to understand what is going on";
let Rendevous_2 = new objective(2);
Rendevous_2.content = "Travel to the outpost and ask for more information about the Old Republic";
let Rendevous_3 = new objective(3);
Rendevous_3.content = "Find the Old Republic. The last known location for the Old Republic was 8,4";
let Rendevous_4 = new objective(4);
Rendevous_4.content = "Procure mining charges and remote detonators in exchange for decoding the data file.";
let Rendevous_5 = new objective(5);
Rendevous_5.content = "Get the mining charges and remote detonators from the smuggler. The smuggler is located in the northwestern sectors of the system";
let Rendevous_6 = new objective(6);
Rendevous_6.content = "Return the mining charges and remote detonators to the outpost";
let ExploreRendevous = new Quest();
ExploreRendevous.name = "Explore Rendevous";
ExploreRendevous.description = "The ship log indicated that I was headed for a rendevous with an unknown party in sector 7,2. I should go there to try and discover what is going on.";

ExploreRendevous.objectives.set(Rendevous_1.id,Rendevous_1);
ExploreRendevous.objectives.set(Rendevous_2.id,Rendevous_2);
ExploreRendevous.objectives.set(Rendevous_3.id,Rendevous_3);
ExploreRendevous.objectives.set(Rendevous_4.id,Rendevous_4);
ExploreRendevous.objectives.set(Rendevous_5.id,Rendevous_5);
ExploreRendevous.objectives.set(Rendevous_6.id,Rendevous_6);

ExploreRendevous.currentObjective = Rendevous_1;


let ActiveQuests = [];
ActiveQuests.push(ExploreRendevous);

GetActiveQuests = function (){
  return gs.activeQuests;
};
  
  
function CurrentLocation(){
  return gs.currentLocation;
}
function MoveNorth(){
  if(gs.currentLocation.north!==""){
    gs.currentLocation = gs.currentLocation.north;
    return "Moved north";
  }
  return "Can't move further north...";
}
function MoveSouth(){
  if(gs.currentLocation.south !== ""){
    gs.currentLocation = gs.currentLocation.south;
    return "Moved south";
  }
  return "Can't move further south...";
}
function MoveEast(){
  if(gs.currentLocation.east !== ""){
    gs.currentLocation = gs.currentLocation.east;
    return "Moved east";
  }
  return "Can't move further east...";
}
MoveWest = function(){
  if(gs.currentLocation.west !==""){
    gs.currentLocation = gs.currentLocation.west;
    return "Moved west";
  }
  return "Can't move further west...";
};
class SpaceObject{
  constructor(name,canTake){
    this.name = name;
    this.canTake = canTake;
    this.details = "";
    this.dialog = null;
    this.initialDialog = "";
    this.about = "";
  }
}

GetLocation = function(){
  return "System: " + gs.currentLocation.system + "\nLocation: " + gs.currentLocation.name + "\nX: " + gs.currentLocation.pos.x + " Y: "+ gs.currentLocation.pos.y;
};
GetWhoami = function(){
  var str="";
  str += "Name: Cmdr. Scout Jones";
  str += "\nOccupation: Service Ministry Pilot";
  str += "\nAge: 29";
  str += "\nBio: Flying ships since they were 19. Joined the Corps at 21. Fought in the Chronis Uprising with distinguished service.";
  str += "\nCurrent Mission: Unknown";
  return str;
};
class Log {
  constructor(title,date,corrupted){
    this.title = title;
    this.date = date;
    this.content="";
    this.read = false;
    if(corrupted === null) corrupted = false;
    this.corrupted = corrupted;
    this.OnRead = null;
  }
  ReadLog()
  {
    var str="";
    if(!this.corrupted){
      this.read = true;
      for(i=0;i<80;i++)
        str+="=";
      str+= "\n\nTitle: " + this.title + "\nDate: " + this.date + "\n\n" + this.content+"\n\n";
      for(i=0;i<80;i++)
        str+="=";
      if(this.OnRead !== null){
        this.OnRead();
      }
      return str;
    }
    else{
      if(this.OnRead !== null){
        this.OnRead();
      }
      return "Cannot read contents of this log, the contents are corrupted... ";
    }
  }
}
DisplayLogs = function(){
  var str = "";
  str+= "=== Ship's Log ===\n\n";
  for(var i=0;i<Logs.length;i++){
    str+="\n"+ (i+1) + " - " + Logs[i].title;
  }
  return str;
};
ReadLog = function(index){
  if(index <= 0 || index > Logs.length){
    return "Invalid log entry " + index +". Please enter a vlaue between 1 and " + Logs.length;
  }
  return Logs[index-1].ReadLog();
};

map = function(){
  var ret ="\t    1   2   3   4   5   6   7   8";
  ret += "\n\t  +---+---+---+---+---+---+---+---+";
  ret += "\n\t1 |   |   |   |   |   |   |   |   |";
  ret += "\n\t  +---+---+---+---+---+---+---+---+";
  ret += "\n\t2 |   |   |   |   |   |   |   |   |";
  ret += "\n\t  +---+---+---+---+---+---+---+---+";
  ret += "\n\t3 |   |   |   |   |   |   |   |   |";
  ret += "\n\t  +---+---+---+---+---+---+---+---+";
  ret += "\n\t4 |   |   |   |   |   |   |   |   |";
  ret += "\n\t  +---+---+---+---+---+---+---+---+";
  ret += "\n\t5 |   |   |   |   |   |   |   |   |";
  ret += "\n\t  +---+---+---+---+---+---+---+---+";
  ret += "\n\t6 |   |   |   |   |   |   |   |   |";
  ret += "\n\t  +---+---+---+---+---+---+---+---+";
  ret += "\n\t7 |   |   |   |   |   |   |   |   |";
  ret += "\n\t  +---+---+---+---+---+---+---+---+";
  ret += "\n\t8 |   |   |   |   |   |   |   |   |";
  ret += "\n\t  +---+---+---+---+---+---+---+---+";
  ret = setPosition(ret);
  typeWriter(ret,3000);
  return "";
  
};
setPosition = function(ret){
  
  //1,1 = 77, 151,225,299,373,447,521,595,
  var index = 77 + 74 * (gs.currentLocation.pos.y-1) + (gs.currentLocation.pos.x-1) * 4;
  ret = ret.substr(0,index) + "@" + ret.substr(index+1);
  return ret;
};
processScan = function(param){
  var str =""
  var snd = new Audio("generic_sounds/water/magnet_start.wav"); // buffers automatically when created
  snd.play();
  if(param === undefined){
    if(gs.currentLocation.objects.length >0){
      str+="The ship scanners picked up the following objects in the area:\n"
      for(var it=0;it<gs.currentLocation.objects.length;it++){
        str+= gs.currentLocation.objects[it].name + "\n";
      }
    } else{
      str+="The ship scanners did not pick up anything of interest in the area"
    }
  } else{
    var found = gs.currentLocation.objects.find(function(element) {
      if(element.name.toLowerCase() === param)
        return element
    });
    if(found !== undefined) {
      return found.details;
    } else {
      return "There is no '"+param+ "' to scan in this area"
    }
  }
  
  return str;
};
processGet = function(param){
  if(param === undefined){
    return "I cannot pick up "+ param;
  }
  var found = gs.currentLocation.objects.find(function(element) {
    if(element.name.toLowerCase() === param){
      return element
    }});
  if(found === undefined){
    return "There is no " + param + " to get, try a different object";
  }
  if(found.canTake !== true){
    return param + " cannot be taken";
  }
  var it;
  for(it=0;it<gs.currentLocation.objects.length;it++){
    if(gs.currentLocation.objects[it].name.toLowerCase() === param){
      gs.currentLocation.objects.splice(it,1);
      break;
    }
  }
  return gs.addCargo(found);
  
};
processCargo = function(param){
  return gs.getCargo(param);
};
processRemove = function(param){
  return gs.removeCargo(param);
};
/*Game Data*/

let LostOrdersQst = new Quest();
LostOrdersQst.name = "Lost Orders";
LostOrdersQst.description = "I need to figure out what I was up to before I blacked out.";
let LostOrdersQst_1 = new objective(1);
LostOrdersQst.content = "I should check in with the Service Ministry to see what is going on.";
LostOrdersQst.objectives.set(LostOrdersQst_1.id,LostOrdersQst_1);
LostOrdersQst.currentObjective = LostOrdersQst_1;


var Logs = [];
let log1 = new Log("First Entry","1 March 2132");
Logs.push(log1);
log1.content = "Just took off from the AX1 shipyards with this old AX1-C. Cargo is loaded and we are heading for the rendevous five clicks west of Aegia. Should be there in a few days.";
log1.OnRead = function() {
  gs.gameFlags.explorerendevous = true;
  gs.activeQuests.push(ExploreRendevous);
  typeWriter("New quest added...(TODO for more details)");
};
let log2 = new Log("Cargo Manifest","1 March 2132");
Logs.push(log2);
log2.content = "Remote Detonators qty: 5\nCX85 Mining Charge qty: 5\nV.2 Delivery Drones qty: 5\n\nCERTIFIED AX1 CARGO AGENT 634ATY";
let log3 = new Log("Orders","2 March 2132",true);
log3.OnRead = function() {
  gs.gameFlags.lostorders = true;
  gs.activeQuests.push(LostOrdersQst);
  typeWriter("New quest added...(TODO for more details)");
};
Logs.push(log3);
let log4 = new Log("@#$G $%^","@#$@GHF", true);
Logs.push(log4);
let log5 = new Log("Critical System Error","5 March 2132");
log5.content = "!!!SAM AUTOMATED MESSAGE!!!\nSystem reboot at 14:54:45.5656\n\nError Code: 34 - Power System Failure\nEnergy spike detected with external sensors. Signal indicates a high energy event. Power was diverted to life support systems.";
Logs.push(log5);

function handleHello(param){
  if(param === undefined){
    return "can't establish connection to " + param;
  }
  let obj = gs.currentLocation.objects.find(function(e){ return e.name.toLowerCase() === param;});
  if(obj !== undefined){
    var snd = new Audio("generic_sounds/comms.wav"); // buffers automatically when created
    snd.play();
    currentDialogMap = obj.dialog;
    process(obj.initialDialog);
    return "Establishing comm link...\nConnected..."
  }
  else{
    return "can't establish connection to " + param;
  }
}

function processAbout(param){
  if(param === undefined){
    return "You need to specify what you want to know about...";
  }
  var obj = gs.gameObjects.get(param);
  if(obj === undefined || obj ===null){
    return "I do not knaow about '"+ param+"'";
  }
  return gs.gameObjects.get(param).about;
}
function handleTodo(param){
  var i=0;
  var str="";
  if(param===undefined){
    str="TODO:\n\n";
    for(i=0;i<gs.activeQuests.length;i++){
      str +="------------------------------------------------------\n";
      str +=gs.activeQuests[i].name+"\n\n";
      str +=gs.activeQuests[i].description+"\n";
      str +="------------------------------------------------------\n";
    }
  } else {
    var found = gs.activeQuests.find(function(element) {
        if(element.name.toLowerCase() === param){
          return element
        }
      });
      if(found === undefined){
        return "Todo "+ param + " does not exist";
      } else {
        str = found.currentObjective.content;
      }
  }
  return str;
}
