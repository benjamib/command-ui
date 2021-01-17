var i = 0;
var txt = '';
var cmdHistory=[];
var cmdHistoryIndex=0;
var music = null;
var musicIndex=Math.floor(Math.random() * Math.floor(6));
var musicArr=["generic_sounds/music/start_theme.ogg","generic_sounds/music/Szymon Matuszewski - Space Chase.mp3","generic_sounds/music/Blue Space v0_8.mp3","generic_sounds/music/ville_seppanen-1_g.mp3","generic_sounds/music/Szymon Matuszewski - Space walk.mp3","generic_sounds/music/8-bit space.wav","generic_sounds/music/Szymon Matuszewski - Space Forest.mp3"];

document.addEventListener("mouseup", handleEvent);
window.addEventListener("load", initGame);


//game initialization function sets focus on the command line and outputs the initial text to the screen
function initGame()
{
    document.getElementById("command-line").focus();
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
   
  var snd = new Audio("../generic_sounds/acid5.wav"); // buffers automatically when created
  snd.play();
  var initText="";
  //the initial text that makes it seem like the ship returned from an error state
  typeWriter("!@#$!@#$WDFGSDFG#!$#@@RGB@$@$%@$%B@$B\n%$%TGWERG#^)#$*)#$()\nC!JC)!@#(RN@!C#!#$NV!@#?>\n@#<C!@#R!@#KR@!#:LCK!@#R!)@#RC!@#L:M!@#R:CL!K@#RC!)@#(R!@)#RCI!@#LRJ:!L@#RC:!L@\n#KRC)(!@#R)I:!@L#KRC!L:@#KRC!@LDJF:LVXZCVIQEFOI#)!@#${)#$@((@#$*%@#($%*@#($%*@#($%*#KJQK:J#$J@#$%OU#@$%OU#$}}#$@#$%UPI@#$%PIU@#$%PIU@#$%UUGJGWJEIFGP&^&^&@KJ$:J#$%:KJWFG(*@#:LJADLNBWROITK:N!@#R:OJFEGJJJJEEEXEXE (#$@#*$%P#@$% !@#$!@#$WDFGSDFG#!$#@@RGB@$@$%@$%B@$B\n%$%TGWERG#^)#$*)#$()\nC!JC)!@#(RN@!C#!#$NV!@#?>\n@#<C!@#R!@#KR@!#:LCK!@#R!)@#RC!@#L:M!@#R:CL!K@#RC!)@#(R!@)#RCI!@#LRJ:!L@#RC:!L@\n#KRC)(!@#R)I:!@L#KRC!L:@#KRC!@LDJF:LVXZCVIQEFOI#)!@#${)#$@((@#$*%@#($%*@#($%*@#($%*#KJQK:J#$J@#$%OU#@$%OU#$}}#$@#$%UPI@#$%\n.................................\n\nrebooting system...",25);
  setTimeout(function () {
    var dlg = document.getElementById("error")
    if(dlg.open){
      dlg.close();
    }
    snd = new Audio("../generic_sounds/flagreturn.wav"); // buffers automatically when created
    snd.play();
    typeWriter(SAM());
  }, 2500);
  //waits for the appropriate time to start the music, the built in delay is to make sure that we can get focus for CHROME
  setTimeout(function () {
    gs.init=true;
    music = new Audio("../"+musicArr[musicIndex]); // buffers automatically when created
    music.play();
    music.addEventListener('ended',function(){
      musicIndex = musicIndex+1;
      musicIndex = musicIndex%7;
      music.src = musicArr[musicIndex];
      music.pause();
      music.load();
      music.play();
    });
  }, 2500);
    
}
//event handler for the mouse click event
function handleEvent()
{
    document.getElementById("command-line").focus();
}
//this handles the player input command
function processInput()
{
    var key = event.keyCode;//the key the player pressed
    var cmd_obj = document.getElementById("command-line");
    if(key=='13' && gs.init===true)//if the game is initialized and the enter key is pressed 
    {
        
        snd = new Audio("../generic_sounds/itempick1.wav"); // buffers automatically when created
        snd.play();//play the sound 
        var cmd = cmd_obj.value;
        if (cmd !== "")
        {
            typeWriter("root@SAM \n$ " + cmd,15);
            setTimeout(function () {
              outputResult(cmd,cmd_obj);
            }, 500);
            
        }

    }
    if(key=='38')//handles the "up arrow" to retreive a command from the command history
    {
        if(cmdHistory[cmdHistoryIndex]!==undefined)
            {
                cmd_obj.value=cmdHistory[cmdHistory.length-cmdHistoryIndex-1];
                cmdHistoryIndex++;
            }

    }
    else
        cmdHistoryIndex=0;
    

}
//outputs the result of the players command
function outputResult(cmd,cmd_obj){
  var ret_text = processCommand(cmd);
  typeWriter(ret_text);
  cmd_obj.value="";
}
//the main command handler function that takes in the player entered text, parses and then executes the command
function processCommand(cmd)
{
  cmdHistory.push(cmd);
  cmdHistoryIndex=0;
  cmd = cmd.toLowerCase();
  if (cmd === null || cmd === undefined)
  {
        typeWriter("command '" + cmd +"' is not recognized");
        return;
  }
  var cmdArray =[];
  var index = cmd.indexOf(" ");
  if(index ===-1){
    cmdArray[0] = cmd;
  }else{
    cmdArray[0] = cmd.substring(0,index);
    cmdArray[1] = cmd.substring(index+1);
  }
  
    switch(cmdArray[0])
    {
        case "move":
            return handleMove(cmdArray[1]);
        case "look":
            return handleLook(cmdArray[1]);
        case "scan":
            return processScan(cmdArray[1]);
        case "echo":
            return processEcho(cmdArray[1]);
        case "clear":
            return "";
        case "ping":
            return "pong!";
        case "read":
            return read(cmdArray[1]);
        case "where":
            return where();
        case "whereami":
            return where();
        case "whoami":
            return whoami();
        case "sam":
            return SAM();
        case "help":
            return SAM();
        case "ship":
            return ship();
        case "logs":
            return DisplayLogs();
        case "hello":
            return hello(cmdArray[1]);
        case "map":
            return map();
        case "get":
            return processGet(cmdArray[1]);
        case "cargo":
            return processCargo(cmdArray[1]);
        case "remove":
            return processRemove(cmdArray[1]);
        case "about":
            return processAbout(cmdArray[1]);
        case "n":
            return handleMove("north");
        case "s":
            return handleMove("south");
        case "e":
            return handleMove("east");
        case "w":
            return handleMove("west");
        case "todo":
            return handleTodo(cmdArray[1]);
        default:
            return "command '" + cmd +"' is not recognized";
    }
}
//takes in a cardinal direction and processes the command to look at what is in that direction
function handleLook(direction)
{
  var param = "around";
  if(direction !== undefined){
		param = direction;
	}
  if(param === "around"){
    return CurrentLocation().look;
  }
  else if(param === "north"){
    return CurrentLocation().lookNorth();
  }
  else if(param === "south"){
    return CurrentLocation().lookSouth();
  }
  else if(param == "east"){
    return CurrentLocation().lookEast();
  }
  else if(param === "west"){
    return CurrentLocation().lookWest();
  }
  else{
    return "I do not know how to look at " + direction;
  }
}
//takes in a cardinal diretion and moves th eplayer in that direction if possible
function handleMove(direction){
  if(direction === "north"){
    return MoveNorth();
  }
  else if(direction === "south"){
    return MoveSouth();
  }
  else if(direction == "east"){
    return MoveEast();
  }
  else if(direction === "west"){
    return MoveWest();
  }
  else{
    return "I do not know how to move " + direction;
  }
}
//handle the read command, takes in the log index and prints the log contents
read = function(param){
  if(param === ""){
		return "Need to specify a log number";
	}
	return ReadLog(param);
};
//handles the where command that returns the location of your ship
where = function(){
  return GetLocation();
};
//returns the information about the player
whoami = function(){
  return GetWhoami();
};
//returns the command index 
SAM = function(){
  return GetAboutSAM();
};
help = function(){
  return GetHelp();
};
ship = function(){
  return GetShip();
};
log = function(){
  return DisplayLogs();
};
hello =function(param){
  return handleHello(param);
}

let gs = new GameState(Aegia,[],{});
gs.addGameObject(Aegia.name,Aegia);
gs.addGameObject(ScienceMinistry.name,ScienceMinistry);
gs.addGameObject(NewsFeed.name,NewsFeed);
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

