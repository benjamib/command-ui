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


