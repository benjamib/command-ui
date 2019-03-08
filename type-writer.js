var speed = 5;
function typeWriter(textToWrite,spd) {
	speed= spd;
	if(spd===undefined){
		speed=15;
	}
  i=0;
  if(textToWrite !== null && textToWrite !== undefined){
    txt = "\n\n" + textToWrite;
    type();
  }
}
function type(){
  var j = 0
  for(j;j<speed;j++){
	  if (i < txt.length)
	  {
  		document.getElementById("demo").innerHTML += txt.charAt(i);
  		document.getElementById("demo").scrollTop = document.getElementById("demo").scrollHeight;
  		i++;
	  } else break;
  }
  if (i < txt.length) {
	  setTimeout(type,1);
  }
}