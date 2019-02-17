var SAM ={
    "about":"SAM is the shipboard AI, your digital wingman and partner in your adventure. SAM controls all of the shipboard systems through your commands. Type 'help SAM' to see a full list of what SAM can do.",
    "help": "command reference"

};
var ship = {
    "name" : "Sidhartha",
    "Status":{
    "Energy": 100,
    "Health": 100,
    "Sheilds":100,
    "Cargo_Cap" : 10,
    "Current_Cargo": 0
    },

    "about": "Your ship is a functional single operator cargo hauler. The design is an AX1-C, a highly modular craft that is configured in the 'C' cargo variant. It is not fancy but does have adequate basic systems and an AI. No one would ever say that it is a sexy ship, it is reliable and can be configured to the whims and means of the owner."
};


var Loc_Aegia = {
    "name":"Aegia",
    "look": {
        "around":"Aegia, the bustling center of the Aegis system. The planet is flecked with whisps of violet and teal clouds over land of deep green and wheat, and vast oceans of the deepest blue. AX1, a shipyard, is slightly to east of your view, humming with activity. Ferra, the Aegian moon, is just peeking over the horizon of Aegia, stone gray.",
        "north":"An empty section of the system moving towards the Aegis sun.",
        "east": "The crowning acheivement of Aegia, a massive jump gate is under contruction. It nearly dwarfs the moon Ferra with it's immense size.",
        "west":"empty space",
        "south":"a non-descript area of empty space"
    },

    /*"objects":[Obj_Aegia,Obj_AX1,Obj_Ferra,Obj_Aegia_Beacon],*/
    "move":{
        "north":"",
        "east":"",
        "west":"",
        "south":""
    }

};
var Loc_Sector_2 = {
    "name":"An unnammed region of the Aegis system",
    
    "look": {
        "around": "The yellow white brightness from the Aegis Star is mellower at this orbit. In the far disance galaxies can be seen pulsing with energy. There is nothing of immediate interest in this area, but it has an inviting tranquility.",
        "north":"north lies the vastness of space",
        "east": "An empty region of the Aegis system with the captured Comet Julian a glowing spec in the distance",
        "west":"A debris field from a cosmic collision of some kind",
        "south":"The beggining of the Aegis Belt"
    },
    "scan":{
        "around": "Nothing but cold dark unforgiving space"
    },
    "objects":[],
    
    "move":{
    "north":"",
    "east":"",
    "west":"",
    "south":""
    }

};

/*var  = {
    "name":"",
    "look": {
        "around":"",
        "north":"",
        "east": "",
        "west":"",
        "south":"",
    },

    "objects":[],
    
    "move": {
        "north":"",
        "east":"",
        "west":"",
        "south:""
    }
};*/

//let test = new system("test");
//let testLoc = new location("test_loc",test);
//alert(testLoc.name);

var Loc_Sector_1 = {
    "name":"Unammed region of the Aegis system.",
    "look": {
        "around" :"You are currently in an empty sector of the Aegis system. Outside is the vastness of space with brilliant stars in all directions.",
        "north":"Directly north is Aegia, the most heavily populated planet in the Aegis system. Orbiting Aegia are two satellites, AX1, a shipyard, and Ferra, a moon that houses the Aegian planetary administrative offices.",
        "east":"To the east is the captured Comet Julian.",
        "west":"To the west is empty space",
        "south":"South is the beginning edge of the asteroid belt that rings the Aiegis system, the Aiegis Belt.",
    },
    "scan":{
        "around": "Your sensors don't pick up anything of interest in the area"
    },
    "objects":[],
    "move":{
    "north":"",
    "east":"",
    "west":"",
    "south":""
    },
    "system": "Aegis"

};
Loc_Sector_1.move.north = Loc_Aegia;
//Loc_Sector_1.move.east = Loc_Julian;
Loc_Sector_1.move.west = Loc_Sector_2;
//Loc_Sector_1.move.south = Loc_Aegis_Belt_1;

/*var Sys_Aegis = {
    "name":"Aegis",
    "locations":[Loc_Sector_1,Loc_Aegia,Loc_Julian,Loc_Sector_2,Loc_Aegis_Belt_1]
};*/