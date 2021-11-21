class Dictionary {
    constructor() {
        this.distionary = {}
    }
    add(key, value) {
        this.distionary[key] = value;
    }
    get(key) {
        return this.distionary[key];
    }
}