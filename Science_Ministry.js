let ScienceMinistry = new SpaceObject("Science_Ministry",false);

ScienceMinistry.details = "The Science Ministry is located on Aeigia and has an open communication channel.";

ScienceMinistry.about = "The Science Ministry is one of the three ministries that governs Aegia. It controls all scientific endeavors undertaken by the planet. Most Aegians trust the work done by the Sceince Ministry though concerns have begun to arise over it's most ambitious project The Gate.";

let ScienceMinistry_1 = {
  tag:"SM_1",
  content:"This is Sidhartha hailing on the public channel anyone copy?",
  choices:[SM_1_1]
};

function SM_1_1(){
  return {option:"Continue", next:"SM_2"};
}

let ScienceMinistry_2 = {
  tag:"SM_2",
  content:"Copy Sidhartha, this is vice minister Chadli, what can I do for you?",
  choices:[SM_2_1,SM_2_2]
};

function SM_2_1(){
  return {option:"What's the latest news?",next:"SM_News"};
}

function SM_2_2(){
  return {option:"Trouble with Anti-G",next:null};//add in ANTI-G quest node if started
}


let SM_News = {
  tag:"SM_News",
  content:"Everything is revolving around The Gate these days, though there was some talk about a research ship that uncovered something new.",
  choices:[SM_News_Gate,SM_News_Research]
};

function SM_News_Gate(){
  return {option:"The Gate",next:"SM_Gate"};
}
function SM_News_Research(){
  if(gs.gameFlags.archimedes !== true)
    return {option:"Research Ship",next:"RS_1"};
  else
    return {option:"End",next:null};
}

let SM_Gate = {
  tag:"SM_Gate",
  content:"BlahBlahBlah",
  choices:[function(){return{option:"End",next:null};}]//add in the real option soon
};

let RS_1 = {
  tag:"RS_1",
  content:"The reasearch ship Archimedes was running some quantum phase experiements out in sector ??? and has reported an anomoly. For some reason they have been unable to send data back so we are not sure what they uncovered. Right now all the ministry ships are tied up working on the gate so we have no way of reaching them at the moment. Could you head out there and take a look and report back the findings?",
  choices:[RS_1_1,SM_2_1]
};
function RS_1_1(){
  return {option:"Sure, I can go check it out",next:"RS_2"};
}

let RS_2 = {
  tag:"RS_2",
  onProcess: function setArchimedes(){ gs.gameFlags.archimedes=true},
  choices:[SM_2_1,SM_END]
};

function SM_END(){
  return {option:"End",next:null};
}

var ScienceMinistry_Dialog = new Map();

addNode(ScienceMinistry_1,ScienceMinistry_Dialog);
addNode(ScienceMinistry_2,ScienceMinistry_Dialog);
addNode(SM_News,ScienceMinistry_Dialog);
addNode(SM_Gate,ScienceMinistry_Dialog);
addNode(RS_1,ScienceMinistry_Dialog);
addNode(RS_2,ScienceMinistry_Dialog);

ScienceMinistry.dialog = ScienceMinistry_Dialog;
