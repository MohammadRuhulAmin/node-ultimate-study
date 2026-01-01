const EventEmitter = require("events");
class ProcessEmitter extends EventEmitter{
    constructor(){
        super();
        this.registerEvents();
    }
    registerEvents(){
        this.on("process", this.handleProcess)
    }

    handleProcess(){
        console.log("Emitter Processing...")
    }
    start(){
        this.emit("process")
    }
}

const emitter = new ProcessEmitter();
if (true){
    emitter.start()
}