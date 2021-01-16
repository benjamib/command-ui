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

