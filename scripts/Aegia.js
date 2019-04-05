let Aegia = new Location("Aegia",3,4);

Aegia.look = "You enter sector 3,4 and see looming on the screens is Aegia, the bustling center of the Aegis system. The planet is flecked with whisps of violet and teal clouds over land of deep green and wheat, and vast oceans of the deepest blue. A steady stream of ship traffic is shuttling to and from the surface. The floating dockyards are teeming with activity, signs of commerce and wealth flashing in all directions."

Aegia.about = "Aegia is a prosperous planet, a trade hub in this corner of the galaxy. The planet has abundant resources allowing it to suppoty a large realtively peaceful and content population. Aegians are a busy people on the whole, rushing from venture to venture, maximizing their time, focused in their pursuits. Aegia is your home planet, the only planet you have ever really known. Sure, your service has sent you far and wide across the galaxy, but never for long in any single place. \nAegia has known peace and prosperity for as long as anyone can remember. This prosperity has lead to the tackling of ambitious projects, the largest shipyard known to man, the first comet mine, and much more. The latest project is the most ambitious of them all, The Gate. The Gate is a joint venture between the science ministry and private business to allow faster than light travel.\n Aegia is goverened by three ministries, The Science Ministry, The Ministry of Commerce, and The Service Ministry. The ministries are composed of elected leaders and an army of bureaucrats that run the day to day business.";


let Aegia_Obj = new SpaceObject("News Feed",false);

Aegia_Obj.details = "Aegia Public News Feed";

Aegia_Obj.about = "Public news feed from the Aegia press corps. Contains the latet new on Aegia and the rest of the Aegis system.";

Aegia_Obj.initialDialog = "AEGIA_FEED";

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



var Aegia_Dialog = new Map();

addNode(AEGIA_FEED,Aegia_Dialog);
addNode(AEGIA_FEED2,Aegia_Dialog);
addNode(AEGIA_FEED3,Aegia_Dialog);
addNode(AEGIA_FEED4,Aegia_Dialog);
addNode(AEGIA_FEED5,Aegia_Dialog);

Aegia_Obj.dialog = Aegia_Dialog;
Aegia.addObject(Aegia_Obj);
Aegia.addObject(ScienceMinistry);
let gs = new GameState(station_zero_six_seven,[],{});
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

gs.addGameObject(_2_8.name,_2_8);
_2_8.west = _1_8;
gs.addGameObject(_3_8.name,_3_8);
_3_8.west = _2_8;
gs.addGameObject(research_ship.name,research_ship);
_3_8.north = research_ship;
research_ship.north = _3_6;
research_ship.west = _2_7;

gs.addGameObject(_5_8.name,_5_8);
_5_8.west = black_hole;

gs.addGameObject(_6_8.name,_6_8);
_6_8.west = _5_8;

gs.addGameObject(_7_8.name,_7_8);
_7_8.west = _6_8;

gs.addGameObject(_8_8.name,_8_8);
_8_8.west = _7_8;

gs.addGameObject(_8_7.name,_8_7);
_8_7.south = _8_8;

gs.addGameObject(station_zero_six_seven.name,station_zero_six_seven);
_8_7.west = station_zero_six_seven;
_7_8.north = station_zero_six_seven;

gs.addGameObject(_6_7.name,_6_7);
_6_7.south = _6_8;
_6_7_north = _6_6;
_6_7.east = station_zero_six_seven;
_6_7.west = _5_7;
gs.addGameObject(_5_7.name,_5_7);
_5_7.west = _4_7;
_5_7.south = _5_8;
_5_7.north = _5_6;

gs.addGameObject(_4_7.name,_4_7);
_4_7.west = research_ship;
_4_7.south = black_hole;
_4_7.north = _4_6;
_4_6.north = mining_ship;

gs.addGameObject(_2_7.name,_2_7);
_2_7.west = _1_7;
_2_7.south = _2_8;
_2_7.north = _2_6;

gs.addGameObject(_8_6.name,_8_6);
_8_6.west = _7_6;
_8_6.south = _8_7;
_8_6.north = _8_5;

gs.addGameObject(_7_6.name,_7_6);
_7_6.west = _6_6;
_7_6.south = station_zero_six_seven;
_7_6.north = _7_5;

gs.addGameObject(_6_6.name,_6_6);
_6_6.west = _5_6;
_6_6.south = _6_7;
_6_6.north = _6_5;

gs.addGameObject(_5_6.name,_5_6);
_5_6.west = _4_6;
_5_6.south = _5_7;
_5_6.north = comet;

gs.addGameObject(_4_6.name,_4_6);
_6_6.west = _3_6;
_6_6.south = _4_7;
_6_6.north = mining_ship;

gs.addGameObject(_3_6.name,_3_6);
_3_6.west = _2_6;
_3_6.south = research_ship;
_3_6.north = _3_5;

gs.addGameObject(_2_6.name,_2_6);
_2_6.west = _1_6;
_2_6.south = _2_7;
_2_6.north = _2_5;



gs.addGameObject(black_hole.name,black_hole);
_3_8.east = black_hole;

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
_5_3.ease = _6_3;
Aegia.east = _5_3;
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
comet.east = _6_5;
_6_5.east = _7_5;
_7_5.east = _8_5;
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

gs.addGameObject(_6_5.name,_6_5);
gs.addGameObject(_7_5.name,_7_5);
gs.addGameObject(_8_5.name,_8_5);
gs.addGameObject(_8_3.name,_8_3);
gs.addGameObject(_8_2.name,_8_2);
gs.addGameObject(_8_1.name,_8_1);
gs.addGameObject(old_republic.name,old_republic);

_8_5.north = old_republic;
old_republic.north = _8_3;
_8_3.north = _8_2;
_8_2.north = _8_1;

_8_1.west = _7_1;
_8_2.west = rendevous;
_8_3.west = _7_3;
old_republic.west = _7_4;
_8_5.west = _7_5;

gs.addGameObject(_7_3.name,_7_3);
gs.addGameObject(rendevous.name,rendevous);
gs.addGameObject(_7_1.name,_7_1);
gs.addGameObject(_7_4.name,_7_4);

gs.addGameObject(_6_1.name,_6_1);
gs.addGameObject(_6_2.name,_6_2);
gs.addGameObject(_6_3.name,_6_3);
gs.addGameObject(_6_4.name,_6_4);

_6_1.east = _7_1;
_6_1.west = _5_1;
_6_1.south = _6_2;

_6_2.east = rendevous;
_6_2.west = _5_2;
_6_2.south = _6_3;

_6_3.east = _7_3;
_6_3.west = _5_3;
_6_3.south = _6_4;

_6_4.east = _7_4;
_6_4.west = _5_4;
_6_4.south = _6_5;
_7_5.north = _7_4;
_7_5.east = _8_5;
_7_5.west = _6_5;
_7_4.north = _7_3;
_7_3.north = rendevous;
rendevous.north = _7_1;


