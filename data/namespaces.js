const Namespace = require('../classes/Namespace');
const Room = require('../classes/Romm');

const wiki = new Namespace(0,'https://img.icons8.com/dusk/100/000000/google-sites.png', 'Wiki', '/wiki');
const apple = new Namespace(1,'https://img.icons8.com/dusk/100/000000/mac-os.png', 'apple', '/apple');
const android = new Namespace(2,'https://img.icons8.com/dusk/100/000000/android.png', 'android', '/android');


wiki.addRoom(new Room(0,'All Peapul','/wiki'));
wiki.addRoom(new Room(1,'All Tier','/wiki'));
wiki.addRoom(new Room(2,'All hummen','/wiki'));

apple.addRoom(new Room(0,'All Peap','/apple'));
apple.addRoom(new Room(1,'All Tier','/apple'));
apple.addRoom(new Room(2,'All hum','/apple'));

android.addRoom(new Room(0,'All Peap','/android'));
android.addRoom(new Room(1,'All Tier','/android'));
android.addRoom(new Room(2,'All hum','/android'));


module.exports = [wiki, apple, android];