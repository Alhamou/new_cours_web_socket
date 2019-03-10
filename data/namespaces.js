const Namespace = require('../classes/Namespace');
const Room = require('../classes/Romm');

const wiki = new Namespace(0,'https://img.icons8.com/dusk/100/000000/google-sites.png', 'Wiki', '/wiki');
const apple = new Namespace(1,'https://img.icons8.com/dusk/100/000000/mac-os.png', 'apple', '/apple');
const android = new Namespace(2,'https://img.icons8.com/dusk/100/000000/android.png', 'android', '/android');


wiki.addRoom(new Room(0,'w comedy','/wiki'));
wiki.addRoom(new Room(1,'w fantastic','/wiki',true));
wiki.addRoom(new Room(2,'w horror','/wiki'));
wiki.addRoom(new Room(3,'w action','/wiki',true));


apple.addRoom(new Room(0,'a comedy','/apple'));
apple.addRoom(new Room(1,'a fantastic','/apple'));
apple.addRoom(new Room(2,'a horror','/apple',true));
apple.addRoom(new Room(3,'a action','/apple'));
apple.addRoom(new Room(4,'a history','/apple'));

android.addRoom(new Room(0,'d comedy','/android'));
android.addRoom(new Room(1,'d fantastic','/android'));
android.addRoom(new Room(2,'d horror','/android',true));
android.addRoom(new Room(3,'d action','/android'));
android.addRoom(new Room(4,'d history','/android',true));
android.addRoom(new Room(5,'d fmaile','/android'));

module.exports = [wiki, apple, android];