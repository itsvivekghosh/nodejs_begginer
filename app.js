const EventEmitter = require("events");
const eventEmmiter = new EventEmitter();

eventEmmiter.on("tutorial", () => {
  console.log("Tutorial Event has occurred");
});

eventEmmiter.emit("tutorial");
