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
    var snd = new Audio("../generic_sounds/water/magnet_start.wav"); // buffers automatically when created
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
  function handleHello(param){
    if(param === undefined){
      return "can't establish connection to " + param;
    }
    let obj = gs.currentLocation.objects.find(function(e){ return e.name.toLowerCase() === param;});
    if(obj !== undefined){
      var snd = new Audio("../generic_sounds/comms.wav"); // buffers automatically when created
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