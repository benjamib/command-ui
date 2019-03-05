class GameState{
  constructor(location,quests,flags){
    this.currentLocation = location;
    this.activeQuests = quests;
    this.gameFlags = flags;
    this.SAM ={
      "about":"SAM is the shipboard AI, your digital wingman and partner in your adventure. SAM controls all of the shipboard systems through your commands. Type 'help SAM' to see a full list of what SAM can do.",
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