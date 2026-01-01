const EventEmitter = require("events")
"use restrict";
class EventEmit extends EventEmitter{
    #eventName;
    #dataEvent;
    #errorEvent; 
    constructor(eventName,dataEvent=null,errorEvent=null){
        super();
        this.#eventName = eventName;
        this.#dataEvent  = dataEvent;
        this.#errorEvent = errorEvent;
        this.#registerEvent();
    }
    #registerEvent(){
        this.on(this.#eventName,()=>console.log(`the event emit is ${this.#eventName}`))
    }
    fireEvent(){
        if(this.#eventName === "error"){
            this.emit("error", this.#errorEvent)
        }
        else if (this.#eventName === "data"){
            this.emit("data")
        }
    }
}

const eon1 = new EventEmit("error");
eon1.fireEvent()