const cpeak = require("cpeak");

const PORT = 5090;
const server = new cpeak();

server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});

server.route("get", "/", (request, response) => {
   response.json({message: "This is some text."});
});

server.route("get", "/heavy", (request, response) => {
    for (let i = 0; i < 100000000; i++) {}
    response.json({message: "Operation is now done!"})
});
































