class Quest{
    constructor()
    {
      this.name = "";
      this.description = "";
      this.objectives= new Map();
      this.currentObjective = "";
      this.complete = false;
    }
  }
  class objective {
    constructor(id)
    {
      this.id = id;
      this.content = "";
      this.complete = false;
    }
  }