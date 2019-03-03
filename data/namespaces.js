const Namespace = require('../classes/Namespace');
const Room = require('../classes/Romm');

const wiki = new Namespace(0,'https://img.icons8.com/metro/26/000000/wikipedia.png', 'Wiki', '/wiki');
const apple = new Namespace(1,'bbbb.png', 'apple', '/apple');
const android = new Namespace(2,'dddd.png', 'android', '/android');


wiki.addRoom(new Room(0,'All Peapul','/wiki'));
wiki.addRoom(new Room(1,'All Tier','/wiki'));
wiki.addRoom(new Room(2,'All hummen','/wiki'));

apple.addRoom(new Room(0,'All Peap','/apple'));
apple.addRoom(new Room(1,'All Tier','/apple'));
apple.addRoom(new Room(2,'All hum','/apple'));


module.exports = [wiki, apple];