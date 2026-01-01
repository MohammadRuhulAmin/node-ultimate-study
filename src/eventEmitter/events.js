const EventEmitter = require("events")

class EventEmit extends EventEmitter{
    #eventName = "trigger"
    constructor(){
        super();
        this.#registerEvent();
    }
    #registerEvent(){
        this.on(this.#eventName,this.#handlerFunction.bind(this))
    }
    #handlerFunction(){
        for(let i = 1;i<5;i++){
            console.log(`processing..${i}`)
        }
    }
    fireEvent(){
        this.emit(this.#eventName)
    }

}

const eon = new EventEmit()
eon.fireEvent()