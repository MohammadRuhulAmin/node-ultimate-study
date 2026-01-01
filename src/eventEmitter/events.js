const EventEmitter = require("node:events")
"use strict";

class EventEmit extends EventEmitter{
    #eventName
    #processType
    #certificate
    constructor(eventName, processType, certificate){
        super();
        this.#processType = processType;
        this.#certificate = certificate;
        this.#eventName = eventName;
        this.#registerEvent();
    }
    #registerEvent(){
        this.on(this.#eventName, ()=>this.#handleEvent())
    }
    #handleEvent(){
        console.log(`Process Type: ${this.#processType} \nCertificate: ${this.#certificate}`)
    }
    fireEvent(){
        this.emit(this.#eventName)
    }
}

const eon1 = new EventEmit("trigger-x", "my-x", "intern")
eon1.fireEvent()