function typeWriter(textToWrite) {

    i=0;
    document.getElementById("demo").innerHTML = "";
    
    if(textToWrite !== null && textToWrite !== undefined){
      txt = textToWrite;
      type();
    }
}
function type(){

  if (i < txt.length)
  {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(type, speed);
  }
  
}