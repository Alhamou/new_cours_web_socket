class Namespace {
    constructor(id, img, nsTitle, endpoint){
        this.id = id;
        this.img = img;
        this.nsTitle = nsTitle;
        this.endpoint = endpoint;
        this.rooms = [];
    }

    addRoom(nsOpject){
        this.rooms.push(nsOpject);
    }
}

module.exports = Namespace;