class GameState{
  constructor(location,quests,flags){
    this.currentLocation = location;
    this.activeQuests = quests;
    this.gameFlags = flags;
    this.init=false;
    this.SAM ={
      "about":"   _____ ___    __  ___\n  / ___//   |  /  |/  / \n  \\__ \\/ /| | / /|_/ / \n ___/ / ___ |/ /  / /  \n/____/_/  |_/_/  /_/   \n\nSAM Copyright AX1 Inc. 2354\tVersion 0.11\nCommands:\n\tSAM--------- Dispalys the command reference\n\tlook-------- returns details about the area surrounding the ship\n\tlook [dir]-- returns details about the area in the specified direction from the ship\n\tmove [dir]-- moves the ship in the specified direction\n\twhoami------ returns information on the user of the system\n\twhereami---- returns information about the ships current location\n\tlogs-------- returns a list of the ship log entries\n\tread [#]---- reads the specified log\n\thello [str]- establishes communications with [str]\n\tship-------- displays details about the ship\n\tscan-------- scans the location with the ship sensors to see if there are any objects of\n\t             interest nearby\n\tscan [obj]-- scans an object in the location for more details\n\tcargo------- returns a list of the objects in the ships cargo\n\tcargo [obj]- returns details about an object in the cargo\n\tget [obj]--- attempts to add an object to the ships cargo\n\tremove [obj] removes obj from the ship's cargo\n\tmap--------- shows a map of your surroundings",
      "help": "command reference"
    };
    this.ship = {
      "name" : "Sidhartha",
      "Status":{
      "Energy": 100,
      "Health": 100,
      "Sheilds":100,
      "Cargo_Cap" : 10,
      "Current_Cargo": 0
      },
      "cargo" : [],
      "type" : "AX1-C",
      "about": "Your ship is a functional single operator cargo hauler. The design is an AX1-C, a highly modular craft that is configured in the 'C' cargo variant. It is not fancy but does have adequate basic systems and an AI. No one would ever say that it is a sexy ship, perfect for hauling cargo, or making it appear like you are."
    };
  }
  addCargo(obj){
    if(this.Current_Cargo >= gs.ship.Cargo_Cap){
      return "You do not have room for " + param + " in the cargo bay";
    } else{
      this.ship.Current_Cargo++;
      this.ship.cargo.push(obj);
    }
    return "Sending out retrieval drone...\n................................\n................................\n................................\n................................\nadded " + obj.name + " to the ships cargo";
  }
  getCargo(obj){
    if(obj === undefined){
      return this.displayAllCargo();
    }
    else{
      var found = gs.ship.cargo.find(function(element) {
        if(element.name === obj){
          return element
        }
      });
      if(found === undefined){
        return "There is no " + obj + " in the cargo";
      } else {
        return found.details;
      }
    }
  }
  displayAllCargo(){
    var str = "";
    var it=0;
    str += "Cargo:\n";
    if(this.ship.cargo.length === 0){
      str+= "\tEmpty";
      return str;
    }
    for(it;it<this.ship.cargo.length;it++){
      //str+="\t"+(it+1) + ": " + this.ship.cargo[it].name + "\n";
      str+="\t+------------------+\n";
      str+="\t|   Cargo Slot "+(it+1)+"   |\n";
      str+="\t+------------------+\n";
      str+="\t|  "+this.ship.cargo[it].name;
      for(i=0;i<16-this.ship.cargo[it].name.length;i++)
      str+=" ";
      str+="|\n";
      str+="\t+------------------+\n\n\n";
    }
    return str;
  }
  removeCargo(obj){
    if(obj === undefined){
      return "no object specified to remove, please specifiy an item in the cargo to remove";
    }
    else{
      var found = gs.ship.cargo.find(function(element) {
        if(element.name === obj){
          return element
        }
      });
      if(found === undefined){
        return "There is no " + obj + " in the cargo";
      } else {
        var it;
        for(it=0;it<this.ship.cargo.length;it++){
          if(this.ship.cargo[it].name === obj){
            this.ship.cargo.splice(it,1);
            return obj + " removed from the cargo";
          }
        }
      }
    }
  }
}
class Quest{
  constructor()
  {
    this.name = "";
    this.description = "";
    this.objectives= new Map();
    this.currentObjective = "";
    this.complete = false;
  }
}
class objective {
  constructor(id)
  {
    this.id = id;
    this.content = "";
    this.complete = false;
  }
}
