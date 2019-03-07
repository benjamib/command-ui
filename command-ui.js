var i = 0;
var txt = '';
var cmdHistory=[];
var cmdHistoryIndex=0;
/*var loc = Loc_Sector_1;
var lsArr = new Map();
*/

document.addEventListener("mouseup", handleEvent);
window.addEventListener("load", initGame);
function initGame()
{
    /*var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
   */
   var initText="";


	/*var initText="   SSSSSSSSSSSSSSS                AAA               MMMMMMMM               MMMMMMMM\n SS:::::::::::::::S              A:::A              M:::::::M             M:::::::M\nS:::::SSSSSS::::::S             A:::::A             M::::::::M           M::::::::M\nS:::::S     SSSSSSS            A:::::::A            M:::::::::M         M:::::::::M\nS:::::S                       A:::::::::A           M::::::::::M       M::::::::::M\nS:::::S                      A:::::A:::::A          M:::::::::::M     M:::::::::::M\n S::::SSSS                  A:::::A A:::::A         M:::::::M::::M   M::::M:::::::M\n  SS::::::SSSSS            A:::::A   A:::::A        M::::::M M::::M M::::M M::::::M\n    SSS::::::::SS         A:::::A     A:::::A       M::::::M  M::::M::::M  M::::::M\n       SSSSSS::::S       A:::::AAAAAAAAA:::::A      M::::::M   M:::::::M   M::::::M\n            S:::::S     A:::::::::::::::::::::A     M::::::M    M:::::M    M::::::M\n            S:::::S    A:::::AAAAAAAAAAAAA:::::A    M::::::M     MMMMM     M::::::M\nSSSSSSS     S:::::S   A:::::A             A:::::A   M::::::M               M::::::M\nS::::::SSSSSS:::::S  A:::::A               A:::::A  M::::::M               M::::::M\nS:::::::::::::::SS  A:::::A                 A:::::A M::::::M               M::::::M\n SSSSSSSSSSSSSSS   AAAAAAA                   AAAAAAAMMMMMMMM               MMMMMMMM\n";*/
	initText+="\nbooting SAM [Ship AutoMation]--------------------- done\nconnecting to ship main system-------------------- done\nlife support-------------------------------------- online\nadvanced diagnostics------------------------------ online\nsensors suite------------------------------------- online\nreactor core-------------------------------------- operational\nbooting nav system-------------------------------- done\nAll Systems @ 100% Begin Operation...";
    initText+="Hi! I am SAM, the Ship AutoMation system.\n";
    initText+="Say something funny and wittty that endears this character to the player...";
    typeWriter("rebooting system...",25);
    setTimeout(function () {
       typeWriter(initText,15);
    }, 1500);
    setTimeout(function () {
       typeWriter(SAM());
    }, 17000);
    setTimeout(function () {
       gs.init=true;
    }, 1);
    
}
function handleEvent()
{
    document.getElementById("command-line").focus();
}
function processInput()
{
    var key = event.keyCode;
    var cmd_obj = document.getElementById("command-line");
    if(key=='13' && gs.init===true)
    {
        
        
        var cmd = cmd_obj.value;
        if (cmd !== "")
        {
            typeWriter("root@SAM \n$ " + cmd,15);
            setTimeout(function () {
              outputResult(cmd,cmd_obj);
            }, 1000);
            
        }

    }
    if(key=='38')
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
function outputResult(cmd,cmd_obj){
  var ret_text = processCommand(cmd);
  typeWriter(ret_text);
  cmd_obj.value="";
  var myEvent = new CustomEvent(cmd.split(" ")[0],{detail:gs.currentLocation.name});
  // Dispatch the event.
  document.dispatchEvent(myEvent);
}
function processCommand(cmd)
{
  cmdHistory.push(cmd);
  cmdHistoryIndex=0;
  var cmdArray =  cmd.split(" ");
  if (cmdArray === null || cmdArray.length > 2)
  {
        typeWriter("command '" + cmd +"' is not recognized");
        return;
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
        case "SAM":
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
        default:
            return "command '" + cmd +"' is not recognized";
    }
}
function processCommandServer(cmd)
{
  cmdHistory.push(cmd);
  cmdHistoryIndex=0;
  cmd = cmd.toLowerCase();
  var cmdArray =  cmd.split(" ");
  if (cmdArray === null || cmdArray.length > 2)
  {
        typeWriter("command '" + cmd +"' is not recognized");
        return;
  }
  var url = '/'+ cmdArray[0] +'?param=' + cmdArray[1];
  fetch(url).then(function(response) {
    response.text().then(function(text) {
      typeWriter(JSON.parse(text));
	  });
  });
}
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
read = function(param){
  if(param === ""){
		return "Need to specify a log number";
	}
	return ReadLog(param);
};
where = function(){
  return GetLocation();
};
whoami = function(){
  return GetWhoami();
};
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

