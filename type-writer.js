var speed = 25;
function typeWriter(textToWrite,spd) {
	speed= spd;
	if(spd===undefined)
		speed=15;
    i=0;
    //document.getElementById("demo").innerHTML = "";
    
    if(textToWrite !== null && textToWrite !== undefined){
      txt = "\n\n" + textToWrite;
      type();
    }
}
function type(){
  var j = 0
  for(j;j<20;j++){
	  if (i < txt.length)
	  {
		document.getElementById("demo").innerHTML += txt.charAt(i);
		//document.getElementById("demo").insertAdjacentHTML("beforeend",getRandomColorChar(txt.charAt(i)));
		i++;
		document.getElementById("demo").scrollTop = document.getElementById("demo").scrollHeight;
		
	  } else break;
  }
  if (i < txt.length)
	setTimeout(type,1);
  
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getRandomColorChar(char){
  return "<span style='color: rgb("+getRandomInt(255)+","+getRandomInt(255)+","+getRandomInt(255)+");'>"+ char +"</span>";
}
