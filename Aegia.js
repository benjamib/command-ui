let Aegia = new Location("Aegia",3,4);

Aegia.look = "You enter sector 3,4 and see looming on the screens is Aegia, the bustling center of the Aegis system. The planet is flecked with whisps of violet and teal clouds over land of deep green and wheat, and vast oceans of the deepest blue. A steady stream of ship traffic is shuttling to and from the surface. The floating dockyards are teeming with activity, signs of commerce and wealth flashing in all directions."

Aegia.about = "Aegia is a prosperous planet, a trade hub in this corner of the galaxy. The planet has abundant resources allowing it to suppoty a large realtively peaceful and content population. Aegians are a busy people on the whole, rushing from venture to venture, maximizing their time, focused in their pursuits. Aegia is your home planet, the only planet you have ever really known. Sure, your service has sent you far and wide across the galaxy, but never for long in any single place. \nAegia has known peace and prosperity for as long as anyone can remember. This prosperity has lead to the tackling of ambitious projects, the largest shipyard known to man, the first comet mine, and much more. The latest project is the most ambitious of them all, The Gate. The Gate is a joint venture between the science ministry and private business to allow faster than light travel.\n Aegia is goverened by three ministries, The Science Ministry, The Ministry of Commerce, and The Service Ministry. The ministries are composed of elected leaders and an army of bureaucrats that run the day to day business.";


let Aegia_Obj = new SpaceObject("News_Feed",false);

Aegia_Obj.details = "Aegia Public News Feed";

Aegia_Obj.about = "Public news feed from the Aegia press corps. Contains the latet new on Aegia and the rest of the Aegis system.";

Aegia_Obj.initialDialog = "AEGIA_FEED";

let AEGIA_FEED = {
  tag:"AEGIA_FEED",
  content:"Rumors have been surfacing of strong arm tactics used by the Science Ministry to silence any opposition to The Gate. Watch dog groups are worried that there have been abuses of power and corruption that need to be investigated.",
  choices:[function(){return{option:"Next Story",next:"AEGIA_FEED2"};},function(){return{option:"End",next:null};}]
};

let AEGIA_FEED2 = {
  tag:"AEGIA_FEED2",
  content:"The Service Ministry has opened an investigation into the group inhabiting Station Zero Six Seven. The group has been suspected of planning and carrying out terrorist acts against The Gate and Science Ministry personnel.",
  choices:[function(){return{option:"End",next:null};}]
};

var Aegia_Dialog = new Map();

addNode(AEGIA_FEED,Aegia_Dialog);
addNode(AEGIA_FEED2,Aegia_Dialog);

Aegia_Obj.dialog = Aegia_Dialog;
Aegia.addObject(Aegia_Obj);
Aegia.addObject(ScienceMinistry);
let gs = new GameState(Aegia,[],{});
gs.addGameObject(Aegia.name,Aegia);
gs.addGameObject(ScienceMinistry.name,ScienceMinistry);
gs.addGameObject(Aegia_Obj.name,Aegia_Obj);

