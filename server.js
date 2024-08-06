const cpeak = require("cpeak");

const PORT = 5090;
const server = new cpeak();

server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});

server.route("get", "/", (request, response) => {
   response.json({message: "This is some text."});
   process.send({action: "request"});
});

server.route("get", "/heavy", (request, response) => {
    for (let i = 0; i < 100000000; i++) {}
    response.json({message: "Operation is now done!"});
    process.send({action: "request"});

});

process.send("Hello");

process.on("message", (message, sendHandle) => {
    console.log(`Worker ${process.pid} received this message from parent: ${message}`)
});































