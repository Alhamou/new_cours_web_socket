class Room {
    constructor(id, roomTitle, endpoint, privat = false){
        this.id = id;
        this.roomTitle = roomTitle;
        this.endpoint = endpoint;
        this.history = [];
        this.private = privat;
    }

    addHistory(romOpject){
        this.history.push(romOpject);
    }
}

module.exports = Room;