//This file contains all of the information about the Aegia location including dialog associated with this location
//Aegia is the only planet in the Aegian system and has the entire planet boud population of the system located at 3,4 on the map
//creates a location named Aegia at 3,4
let Aegia = new Location("Aegia",3,4);

//text that displays when you look at location 3,4 
Aegia.look = "Looming large on the screens is Aegia, the bustling center of the Aegis system. The planet is flecked with whisps of violet and teal clouds over land of deep green and wheat, and vast oceans of the deepest blue. A steady stream of ship traffic is shuttling to and from the surface. The floating dockyards are teeming with activity, signs of commerce and wealth flashing in all directions."

//text that appears when you about aegia
Aegia.about = "Aegia is a prosperous planet, a trade hub in this corner of the galaxy. The planet has abundant resources allowing it to support a large realtively peaceful and content population. Aegians are a busy people on the whole, rushing from venture to venture, maximizing their time, focused in their pursuits. Aegia is your home planet, the only planet you have ever really known. Sure, your service has sent you far and wide across the galaxy, but never for long in any single place. \nAegia has known peace and prosperity for as long as anyone can remember. This prosperity has lead to the tackling of ambitious projects, the largest shipyard known to man, the first comet mine, and much more. The latest project is the most ambitious of them all, The Gate. The Gate is a joint venture between the science ministry and private business to allow faster than light travel.\n Aegia is goverened by three ministries, The Science Ministry, The Ministry of Commerce, and The Service Ministry. The ministries are composed of elected leaders and an army of bureaucrats that run the day to day business.";

//there is a news feed SpaceObject associated with Aegia
let NewsFeed = new SpaceObject("News Feed",false);

NewsFeed.details = "Aegia Public News Feed";

NewsFeed.about = "Public news feed from the Aegia press corps. Contains the latet new on Aegia and the rest of the Aegis system.";


//initial dialog function for the newsfeed
NewsFeed.initialDialog = "AEGIA_FEED";

//dialog functions for the news feed
//end option
function end(){
  return {option:"End",next:null};
}
let AEGIA_FEED = {
  tag:"AEGIA_FEED",
  content:"Rumors have been surfacing of strong arm tactics used by the Science Ministry to silence any opposition to The Gate. Watch dog groups are worried that there have been abuses of power and corruption that need to be investigated.",
  choices:[function(){return{option:"Next Story",next:"AEGIA_FEED2"};},end]
};

let AEGIA_FEED2 = {
  tag:"AEGIA_FEED2",
  content:"The Service Ministry has opened an investigation into the group inhabiting Station Zero Six Seven. The group has been suspected of planning and carrying out terrorist acts against The Gate and Science Ministry personnel.",
  choices:[function(){return{option:"Next Story",next:"AEGIA_FEED3"};},end]
};

let AEGIA_FEED3 = {
  tag:"AEGIA_FEED3",
  content:"Be a part of human history and join GateCorp on the first jump. Slots are going fast so order today!",
  choices:[function(){return {option:"Next Story",next:"AEGIA_FEED4"};},end]
};

let AEGIA_FEED4 = {
  tag:"AEGIA_FEED4",
  content:"Reports out of the Science Ministry indicate that there is a shortage of raw materials needed in Gate construction. Sources within the Science Ministry say that shortages will lead to small project delays as alternative materials are identified and sourced",
  choices:[function(){return {option:"Next Story",next:"AEGIA_FEED5"};},end]
};

let AEGIA_FEED5 = {
  tag:"AEGIA_FEED5",
  content:"The Aegian sensor array picked up a strange energy disturbance in sector 7,2. Authorities advise caution to any ship traffic heading near that sector until a full investigation of the disturbance can be concluded.",
  choices:[end]
};


//dialog map an initialization for the news feed
var Aegia_Dialog = new Map();
addNode(AEGIA_FEED,Aegia_Dialog);
addNode(AEGIA_FEED2,Aegia_Dialog);
addNode(AEGIA_FEED3,Aegia_Dialog);
addNode(AEGIA_FEED4,Aegia_Dialog);
addNode(AEGIA_FEED5,Aegia_Dialog);
NewsFeed.dialog = Aegia_Dialog;

//adding the newsfeed to the Aegia location
Aegia.addObject(NewsFeed);
Aegia.addObject(ScienceMinistry);





