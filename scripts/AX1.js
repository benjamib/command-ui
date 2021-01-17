let AX1 = new Location("AX1 Shipyard",2,4);
AX1.look = "The AX1 Shipyard, the largest commercial shipyard in the entire galaxy. This is where your current ship the Sidhartha was built as well as the vast majority of ships in the galaxy.\n";
AX1.about="The AX1 Shipyard is a hive of activity, with ships moving in and out at a constant rate. All of your needs regarding your ship can be taken care of here at the shipyard.";

let ShipyardServices = new SpaceObject("Services",false);

ShipyardServices.details = "Services for your ship";

ShipyardServices.about = "The place to buy supplies or fix your ship.";

function end(){
    return {option:"End",next:null};
  }
  let ShipyardServices_D0 = {
    tag:"ShipyardServices_D0",
    content:"@Sidhartha: This is the Sidhartha Commander Scout Jones, docking for services",
    choices:[function(){return{option:"Continue",next:"ShipyardServices_D1"};},]
  };

  let ShipyardServices_D1 = {
    tag:"ShipyardServices_D1",
    content:"@Ship Master: This is Ship Master Dowds, what can I do for you Commander Jones?",
    choices:[function(){return{option:"Repair Ship Logs",next:"ShipyardServices_RepairLogs"};},end]
  };

  let ShipyardServices_RepairLogs = {
    tag:"ShipyardServices_RepairLogs",
    content:"@Sidhartha: I have some corrupted ship logs that I would love some help with.//n@Ship Master: No problem Commander, I will have those recovered for you ASAP...",
    choices:[end]
  };

  //initial dialog function
  ShipyardServices.initialDialog = "ShipyardServices_D0";

//dialog map an initialization
var AX1_Dialog = new Map();
addNode(ShipyardServices_D0,AX1_Dialog);
addNode(ShipyardServices_D1,AX1_Dialog);
addNode(ShipyardServices_RepairLogs,AX1_Dialog);
ShipyardServices.dialog = AX1_Dialog;

//adding the Shipyard Services to the AX1 location
AX1.addObject(ShipyardServices);
