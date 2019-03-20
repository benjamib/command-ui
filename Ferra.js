let Ferra = new Location("Ferra",3,3);

Ferra.look = "Looming on the Sidhartha's viewscreen is Ferra, the Aegian moon. Ferra is a mostly carbon gray rock pockmarked with meteor impact sites. The surface glitters with the lights from the Service Ministry that is head quartered on the moon. To the east is the Service Ministry Fleet, warships gleaming in the light given off by the system's star Aegis. A steady stream of ships enters and leaves the airspace around Ferra, shuttling various cargo here and there.";

Ferra.about = "Ferra is home to the Service Ministry, which governs all things on Aegia not related to scientific endeavors, or matters of commerce. This includes the military as well as all of the Aegian social services. Ferra itself is an unreamrkable rock floating near the vibrant planet of Aegia.";

let ServiceMinistry = new SpaceObject("Service Ministry",false);

ServiceMinistry.details = "The Service Ministry is located on Ferra and has an open public communication channel";

ServiceMinistry.about = "The Service Ministry is one of the three ministries that governs Aegia. It controls the military as well as the social services that Aegians enjoy. It is the most beuracratic of the three ministries. It is also your current employer. You have worked for the Service Ministry since you were old enough to fly. Currently you work as cargo hauler, hauling goods to and from Ferra and completing the odd assigned mission here and there.";

let Serv_1 = {
  tag:"Serv_1",
  content:"This is the Service Ministry public channel, Commandant Markus, what is your inquiry?",
  choices:[gotoNews,gotoOrders,gotoEnd]
};

function gotoEnd(){
  return {option:"End",next:null};
}
function gotoNews(){
  return{option:"News",next:"Serv_news"};
}
function gotoOrders(){
  if(gs.gameFlags.lostorders!== true){
    return {option:"Current Orders",next:"Serv_ord"};
  }
  else
    return null;
}
let Serv_News ={
  tag:"Serv_news",
  content:"The Science Ministry has been up in arms over a bunch of anarchists holed up out on Station Zero Six Seven. Seem pretty harmless to me, but you know how it is around her, when SciMin says jump we say 'How High?'",
  choices:[gotoOrders,gotoEnd]
};

let Serv_ord ={
  tag:"Serv_ord",
  content:"Let me see what I can find for you here commander. Hmmm... interesting. Last entry was that you recieved a new set of orders a few days ago but I don't have access to any details but it does indicate you acceoted them, might want to examine the ship logs or you can check in with your CO at the fleet HQ. ",
  onProcess:function(){ gs.gameFlags.lostorders=true;},
  choices:[gotoNews,gotoEnd]
};

ServiceMinistry.initialDialog = "Serv_1";
var ServiceMinistry_Dialog = new Map();

addNode(Serv_1,ServiceMinistry_Dialog);
addNode(Serv_News,ServiceMinistry_Dialog);
addNode(Serv_ord,ServiceMinistry_Dialog);

ServiceMinistry.dialog = ServiceMinistry_Dialog;


let Fleet = new SpaceObject("Fleet",false);

Fleet.details = "The Service Ministry Fleet is in orbit around Ferra. You have an open comm link to your CO.";

Fleet.about = "The Service Ministry Fleet is not the most powerful fighting force assembled in terms of pure size and firepower, but it has some of the most advanced tech in the known universe. The ships of the fleet when in from missions maintain orbit around Ferra. Currently most of the fleet is being utilized for the purposes of aiding construction of The Gate and only a small presence is currently in orbit. The command ship Hercules houses fleet command including your current CO Admiral Janitsky.";

let hailfleet= {
  tag:"Hail_Fleet",
  content:"Fleet command this is Commander Scout Jones, Admiral Janitsky do you copy?",
  choices: [gotoFleet1,gotoEnd]
};
let Fleet_1 = {
  tag:"Fleet_1",
  content:"Commander Jones! We were worried about you. Our sensors picked up an energy spike in the vicinity of your last reported location, and then your ship stopped broadcasting. What happened out there?",
  choices:[gotoReply,gotoEnd]
};

function gotoFleet1(){
  if(gs.gameFlags.fleet!== true){
    gs.gameFlags.fleet = true;
    return {option:"Next",next:"Fleet_1"};
  }
  else{
    return null;
  }
}
function gotoEnd(){
  return {option:"End",next:null};
}

function gotoReply(){
  return {option:"Next",next:"reply"};
}
let Fleet_reply = {
  tag:"reply",
  content:"Not sure Admiral sir, still trying to piece it together. I lost conciousness and came to as the ship systems were rebooting. Some of the logs were corrupted incluing the one containing my orders.",
  choices:[gotoOrder,gotoEnd]
};

function gotoOrder(){
  return {option:"What are my current orders?",next:"orders"};
}

let fleetOrders = {
  tag:"orders",
  content:"Commander Jones, you were commissioned by the Science Ministry to deliver some minning equipment to a contractor working at Halley's mine, not sure why the rendevous was out in sector 8,4. Argh, that Gate project can't end soon enough, tired of sending out our pilots on meaningless cargo runs, we are elite combat pilots, not errand boys.",
  choices:[gotoEnd]
};

Fleet.initialDialog = "Hail_Fleet";
var Fleet_Dialog = new Map();

addNode(hailfleet,Fleet_Dialog);
addNode(Fleet_1,Fleet_Dialog);
addNode(Fleet_reply,Fleet_Dialog);
addNode(fleetOrders,Fleet_Dialog);
Fleet.dialog = Fleet_Dialog;