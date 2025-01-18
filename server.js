const http = require("http");

const server = http.createServer( (req,res) => {
    res.end("Welcome to my NodeJS journey");
})

server.listen(7070);

