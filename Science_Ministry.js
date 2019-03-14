let ScienceMinistry = new SpaceObject("Science Ministry",false);

ScienceMinistry.details = "The Science Ministry is located on Aeigia and has an open communication channel.";

ScienceMinistry.about = "The Science Ministry is one of the three ministries that governs Aegia. It controls all scientific endeavors undertaken by the planet. Most Aegians trust the work done by the Sceince Ministry though concerns have begun to arise over it's most ambitious project The Gate.";

ScienceMinistry.initialDialog = "SM_1";

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
  content:"Copy Sidhartha, this is Vice Minister Chadli, what can I do for you?",
  choices:[SM_2_1,SM_2_2,SM_END]
};

function SM_2_1(){
  return {option:"What's the latest news?",next:"SM_News"};
}

function SM_2_2(){
  if(gs.gameFlags.ANTIG !== true){
    return null;
  }
  return {option:"Trouble with Anti-G",next:null};//add in ANTI-G quest node if started
}


let SM_News = {
  tag:"SM_News",
  content:"Everything is revolving around The Gate these days, though there was some talk about a research ship that uncovered something new.",
  choices:[SM_News_Gate,SM_News_Research,SM_END]
};

function SM_News_Gate(){
  return {option:"The Gate",next:"SM_Gate"};
}
function SM_News_Research(){
  if(gs.gameFlags.archimedes !== true){
    return {option:"Research Ship",next:"RS_1"};
  }
  else
    return null;
}

let SM_Gate = {
  tag:"SM_Gate",
  content:"The Gate is close to completion. The day it comes online will be a great day in the history of Aegia. Imagine the possibilities of near instantaneous travel to almost anywhere in the galaxy? I heard that there is a certain group out in Station Zero Six Seven that keep spreading lies about the danger of the technology behind The Gate poses, utter rubbish. ",
  choices:[SM_News_Research,SM_END]//add in the real option soon
};

let RS_1 = {
  tag:"RS_1",
  content:"The reasearch ship Archimedes was running some quantum phase experiements out in sector ??? and has reported an anomoly. For some reason they have been unable to send data back so we are not sure what they uncovered. Right now all the ministry ships are tied up working on the gate so we have no way of reaching them at the moment. Could you head out there and take a look and report back the findings?",
  choices:[RS_1_1,SM_2_1,SM_END]
};
function RS_1_1(){
  return {option:"Sure, I can go check it out",next:"RS_2"};
}

let RS_2 = {
  tag:"RS_2",
  content:"Thanks! The Science Ministry will be greatful for your service",
  onProcess: function(){ gs.gameFlags.archimedes=true;gs.activeQuests.push(CollectResearch);},
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

let Research_1 = new objective(1);
Research_1.content = "TRavel to sector XXX and collect the data on the anomoly from Archemidis";
let Research_2 = new objective(2);
Research_2.content = "Return data from Archemidis to the Science Ministry";
let CollectResearch = new Quest();
CollectResearch.name = "The Archemidis";
CollectResearch.description = "After talking to Vice Minister Chadli at the Science Ministry, I agreed to Collect informaiton from the research ship archemidis and return it to the Science Ministry on Aegia";

CollectResearch.objectives.set(Research_1.id,Research_1);
CollectResearch.objectives.set(Research_2.id,Research_2);

CollectResearch.currentObjective = Research_1;


