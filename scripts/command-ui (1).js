var i = 0;
var txt = '';
var speed = 40;
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
    }*/
   
    var initText = "booting SAM [Ship AutoMation]----------------------- done\nconnecting to ship main system---------------------- done\nlife support---------------------------------------- online\nadvanced diagnostics-------------------------------- online\nsensors suite--------------------------------------- online\nreactor core---------------------------------------- operational\nbooting nav system---------------------------------- done\nAll Systems 100% Begin Operation...";
    initText+="Hi! I am SAM, the Ship AutoMation system.\n";
    initText+="SAy something funny and wittty that endears this character to the player...";
    typeWriter("reboot system...")
    setTimeout(function () {
       typeWriter(initText);
    }, 5000);
    
}
function handleEvent()
{
    document.getElementById("command-line").focus();
}

function typeWriter(textToWrite) {

    i=0;
    document.getElementById("demo").innerHTML = "";
    txt = textToWrite;
    type();
}
function type(){

  if (i < txt.length)
  {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(type, speed);
  }
  
}
function processInput()
{
    var key = event.keyCode;
    var cmd_obj = document.getElementById("command-line");
    if(key=='13')
    {
        
        
        var cmd = cmd_obj.value;
        if (cmd !== "")
        {
            
            var txt = processCommand(cmd);
            cmd_obj.value="";
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
function processCommand(cmd)
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
    switch(cmdArray[0])
    {
        case "move":
            return processMove(cmdArray[1]);
        case "look":
            return processLook(cmdArray[1]);
        case "scan":
            return processScan(cmdArray[1]);
        case "status":
            return processStatus(cmdArray[1]);
        case "about":
            return processAbout(cmdArray[1]);
        case "echo":
            return processEcho(cmdArray[1]);
        case "clear":
            return "";
        case "help":
            return processHelp();
        case "ping":
            return "pong!";
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
  if(direction === "around"){
    return CurrentLocation().look;
  }
  else if(direction === "north"){
    return CurrentLocation().lookNorth();
  }
  else if(direction === "south"){
    return CurrentLocation().lookSouth();
  }
  else if(direction == "east"){
    return CurrentLocation().lookEast();
  }
  else if(direction === "west"){
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
    return "I do not know how to move " + param;
  }
}