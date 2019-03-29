let Aegia = new Location("Aegia",3,4);

Aegia.look = "You enter sector 3,4 and see looming on the screens is Aegia, the bustling center of the Aegis system. The planet is flecked with whisps of violet and teal clouds over land of deep green and wheat, and vast oceans of the deepest blue. A steady stream of ship traffic is shuttling to and from the surface. The floating dockyards are teeming with activity, signs of commerce and wealth flashing in all directions."

Aegia.about = "Aegia is a prosperous planet, a trade hub in this corner of the galaxy. The planet has abundant resources allowing it to suppoty a large realtively peaceful and content population. Aegians are a busy people on the whole, rushing from venture to venture, maximizing their time, focused in their pursuits. Aegia is your home planet, the only planet you have ever really known. Sure, your service has sent you far and wide across the galaxy, but never for long in any single place. \nAegia has known peace and prosperity for as long as anyone can remember. This prosperity has lead to the tackling of ambitious projects, the largest shipyard known to man, the first comet mine, and much more. The latest project is the most ambitious of them all, The Gate. The Gate is a joint venture between the science ministry and private business to allow faster than light travel.\n Aegia is goverened by three ministries, The Science Ministry, The Ministry of Commerce, and The Service Ministry. The ministries are composed of elected leaders and an army of bureaucrats that run the day to day business.";


let Aegia_Obj = new SpaceObject("News Feed",false);

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
gs.addGameObject(Ferra.name,Ferra);
gs.addGameObject(ServiceMinistry.name,ServiceMinistry);
gs.addGameObject(Fleet.name,Fleet);
gs.addGameObject(_4_4.name,_4_4);
gs.addGameObject(_5_4.name,_5_4);
gs.addGameObject(_5_3.name,_5_3);
gs.addGameObject(_5_2.name,_5_2);
gs.addGameObject(_5_1.name,_5_1);
gs.addGameObject(_4_1.name,_4_1);
gs.addGameObject(_3_4.name,_3_4);
gs.addGameObject(_3_1.name,_3_1);
gs.addGameObject(_3_5.name,_3_5);
gs.addGameObject(mining_ship.name,mining_ship);
gs.addGameObject(_2_5.name,_2_5);
gs.addGameObject(black_market.name,black_market);
gs.addGameObject(smuggler.name,smuggler);

gs.addGameObject(_1_6.name,_1_6);
gs.addGameObject(_1_7.name,_1_7);
gs.addGameObject(_1_8.name,_1_8);

Ferra.addObject(ServiceMinistry);
Ferra.addObject(Fleet);

gs.addGameObject(AX1.name,AX1);
Aegia.west = AX1;
gs.addGameObject(Gate.name,Gate);
Ferra.west = Gate;
AX1.north = Gate;
Aegia.north = Ferra;

Aegia.south = _4_4;
_4_4.east = _5_4;
_5_4.north = _5_3;
Aegia.east = _5_4;
_5_3.north = _5_2;
_5_2.north = _5_1;
_5_2.west = Ferra;
_5_1.west = _4_1;
_4_1.west = _3_1;
_4_1.south = Ferra;
_3_4.east = _4_4;
_3_4.north = AX1;
_3_1.south = Gate;
_4_4.south = mining_ship;
comet.west = mining_ship;
comet.north = _5_4;
mining_ship.west = _3_5;
_3_5.north = _3_4;
_3_5.west = _2_5;
_2_5.west = black_market;
smuggler.south = _1_2;
smuggler.east = _2_1;
_2_1.east = _3_1;
_1_2.south = _1_3;
_1_3.south = _1_4;
_1_4.south = black_market;
black_market.south = _1_6;
_1_6.south = _1_7;
_1_7.south = _1_8;
