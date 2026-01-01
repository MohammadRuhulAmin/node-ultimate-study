const EventEmitter = require("events")
"use strict";

class EventEmit extends EventEmitter{
    #eventName
    constructor(eventName){
        super();
        this.#eventName = eventName;
        this.#registerEvent();
    }
    #registerEvent(){
        this.on(this.#eventName, this.#handleEvent.bind(this))
    }
    #handleEvent(){
        console.log("process has been called..")
    }
    fireEvent(){
        this.emit(this.#eventName)
    }
}

const eon1 = new EventEmit("trigger-x")
eon1.fireEvent()