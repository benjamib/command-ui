class GameState{
  constructor(location,quests,flags){
    this.currentLocation = location;
    this.activeQuests = quests;
    this.gameFlags = flags;
    this.SAM ={
      "about":"   _____ ___    __  ___\n  / ___//   |  /  |/  / \n  \\__ \\/ /| | / /|_/ / \n ___/ / ___ |/ /  / /  \n/____/_/  |_/_/  /_/   \n\nSAM Copyright AX1 Inc. 2354\nVersion 0.11\nCommands:\n\tSAM--------- Dispalys the command reference\n\tlook-------- returns details about the area surrounding the ship\n\tlook [dir]-- returns details about the area in the specified direction from the ship\n\tmove [dir]-- moves the ship in the specified direction\n\twhoami------ returns information on the user of the system\n\twhereami---- returns information about the ships current location\n\tlogs-------- returns a list of the ship log entries\n\tread [#]---- reads the specified log\n\thello [str]- establishes communications with [str]\n\tship-------- displays details about the ship",
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