

var currentDialogMap = new Map();



function process(tag){
  var node = currentDialogMap.get(tag);
  
  var dlg = document.getElementById("dialog")
  if(!dlg.open){
    dlg.showModal();
  }
  if(node !== null && node!== undefined)
  {
      if(node.onProcess !== undefined)
        node.onProcess();
      var content = document.querySelector('#content');
      content.innerHTML = node.content;
      var it = "";
      var btn = document.querySelector('.btn-group');
      btn.innerHTML = "";
      
      for(it=0;it<node.choices.length;it++){
        var choice = node.choices[it]();
        if(choice !== null)
          btn.innerHTML = btn.innerHTML + "<button id='"+it+"' onclick='process(&quot;"+choice.next+"&quot;)'>" + choice.option + "</button>";
      }
  } else {
    closeDialog();
  }
}
function closeDialog(){
  var dlg = document.getElementById("dialog")
  if(dlg.open){
    dlg.close();
  }
  typeWriter("Comms channel disconnected...");
  document.getElementById("command-line").focus();
  return;
}

function addNode(node,dialog_map){
  dialog_map.set(node.tag,node);
}
