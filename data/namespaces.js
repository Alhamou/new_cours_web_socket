const Namespace = require('../classes/Namespace');
const Room = require('../classes/Romm');

const wiki = new Namespace(0,'https://img.icons8.com/dusk/100/000000/google-sites.png', 'Wiki', '/wiki');
const apple = new Namespace(1,'https://img.icons8.com/dusk/100/000000/mac-os.png', 'apple', '/apple');
const android = new Namespace(2,'https://img.icons8.com/dusk/100/000000/android.png', 'android', '/android');


wiki.addRoom(new Room(0,'comedy','/wiki'));
wiki.addRoom(new Room(1,'fantastic','/wiki',true));
wiki.addRoom(new Room(2,'horror','/wiki'));
wiki.addRoom(new Room(3,'action','/wiki',true));


apple.addRoom(new Room(0,'All Peap','/apple'));
apple.addRoom(new Room(1,'All apple','/apple'));
apple.addRoom(new Room(2,'All hum','/apple',true));
apple.addRoom(new Room(3,'All apple','/apple'));
apple.addRoom(new Room(4,'All apple','/apple'));

android.addRoom(new Room(0,'All Peap','/android'));
android.addRoom(new Room(1,'All android','/android'));
android.addRoom(new Room(2,'All hum','/android',true));
android.addRoom(new Room(3,'All Peap','/android'));
android.addRoom(new Room(4,'All android','/android',true));
android.addRoom(new Room(5,'All hum','/android'));

module.exports = [wiki, apple, android];