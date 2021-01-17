class Log {
    constructor(title,date,corrupted){
      this.title = title;
      this.date = date;
      this.content="";
      this.read = false;
      if(corrupted === null) corrupted = false;
      this.corrupted = corrupted;
      this.OnRead = null;
    }
    ReadLog()
    {
      var str="";
      if(!this.corrupted){
        this.read = true;
        for(i=0;i<80;i++)
          str+="=";
        str+= "\n\nTitle: " + this.title + "\nDate: " + this.date + "\n\n" + this.content+"\n\n";
        for(i=0;i<80;i++)
          str+="=";
        if(this.OnRead !== null){
          this.OnRead();
        }
        return str;
      }
      else{
        if(this.OnRead !== null){
          this.OnRead();
        }
        return "Cannot read contents of this log, the contents are corrupted... ";
      }
    }
}
  