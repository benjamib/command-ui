//Contains the class definition for the Location class
class Location{
    constructor(name,x,y){
      //the name of the location
      this.name = name;
      //the curretn system that the location is part of
      this.system="Aegis";
      //the location to the north
      this.__north= "";
      //the location to the south
      this.__south = "";
      //the location to the east
      this.__east = "";
      //the location to the west
      this.__west = "";
      //what is found when you scan a location
      this.objects = [];
      //what can be seen in this location
      this.__look = "";
      //x-y pos
      this.pos = {
        "x":x,
        "y":y,
      };
      this.about = "" ;
    }
    get look(){
        return this.__look;
      }
      set look(newLook){
        this.__look = newLook;
      }
      lookNorth(){
        if(this.__north !== "")
          return this.__north.look;
        return "nothing to see here...";
      }
      lookSouth(){
        if(this.__south !== "")
          return this.__south.look;
        return "nothing to see here...";
        
      }
      lookEast(){
        if(this.__ease !== "")
          return this.__east.look;
        return "nothing to see here...";
      }
      lookWest(){
        if(this.__west !== "")
          return this.__west.look;
        return "nothing to see here...";
        
      }
      scan(){
        return this.objects;
      }
      addObject(newObj){
        this.objects.push(newObj);
      }
      set north(newLocation){
        this.__north = newLocation;
        if(newLocation.south ==="")
          newLocation.south = this;
      }
      get north(){
        return this.__north;
      }
      set south(newLocation){
        this.__south = newLocation;
        if(newLocation.north==="")
          newLocation.north = this;
      }
      get south(){
        return this.__south;
      }
      set east(newLocation){
        this.__east = newLocation;
        if(newLocation.west ==="")
          newLocation.west = this;
      }
      get east(){
        return this.__east;
      }
      set west(newLocation){
        this.__west = newLocation;
        if(newLocation.east==="")
          newLocation.east = this;
      }
      get west(){
        return this.__west;
      }
      
}
    