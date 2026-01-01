const EventEmitter = require("events");

class ProcessEmitter extends EventEmitter {
    #eventName = "process";
    constructor() {
        super();
    
    }
    #registerEvents() {
        this.on(this.#eventName, this.#handleProcess.bind(this));
    }

    #handleProcess() {
        console.log("Emitter Processing...");
    }

    start() {
        this.emit(this.#eventName);
    }
}

// usage
const emitter = new ProcessEmitter();
emitter.start();     
