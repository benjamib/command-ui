let Aegia = new Location("Aegia",3,4);

Aegia.look = "You enter sector 3,4 and see looming on the screens is Aegia, the bustling center of the Aegis system. The planet is flecked with whisps of violet and teal clouds over land of deep green and wheat, and vast oceans of the deepest blue. A steady stream of ship traffic is shuttling to and from the surface. The floating dockyards are teeming with activity, signs of commerce and wealth flashing in all directions."

Aegia.about = "Aegia is a prosperous planet, a trade hub in this corner of the galaxy. The planet has abundant resources allowing it to suppoty a large realtively peaceful and content population. Aegians are a busy people on the whole, rushing from venture to venture, maximizing their time, focused in their pursuits. Aegia is your home planet, the only planet you have ever really known. Sure, your service has sent you far and wide across the galaxy, but never for long in any single place. \nAegia has known peace and prosperity for as long as anyone can remember. This prosperity has lead to the tackling of ambitious projects, the largest shipyard known to man, the first comet mine, and much more. The latest project is the most ambitious of them all, The Gate. The Gate is a joint venture between the science ministry and private business to allow faster than light travel.\n Aegia is goverened by three ministries, The Science Ministry, The Ministry of Commerce, and The Service Ministry. The ministries are composed of elected leaders and an army of bureaucrats that run the day to day business.";




Aegia.addObject(ScienceMinistry);
let gs = new GameState(Aegia,[],{});
gs.addGameObject(Aegia.name,Aegia);
gs.addGameObject(ScienceMinistry.name,ScienceMinistry);


