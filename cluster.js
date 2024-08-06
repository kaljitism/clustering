const cluster = require("cluster");

if (cluster.isPrimary) {
    let requestCount = 0;

    setInterval(() => {
       console.log(`Total number of requests: ${requestCount}`);
    }, 5000);

    console.log(`This is the parent process with PID ${process.pid}`);

    const coresCount = require("os").availableParallelism();

    for (let i = 0; i < coresCount; i++) {
        const worker = cluster.fork();
        console.log(`The paprent process has spawned a new child process with pid ${worker.process.pid}`);
        worker.send("hello, a message");
    }

    cluster.on("message", (worker, message) => {
       if (message.action && message.action === "request") {
           requestCount++;
       }
    });

    cluster.on("exit", (worker, exitCode, signal) => {
        console.log(`Worker ${worker.process.pid} ${signal || exitCode} died, restarting...`);
        cluster.fork();
    });

    cluster.on("fork", (worker) => {
       console.log("forked");
    });

    cluster.on("listening", (worker, address) => {
        console.log("Listening");
    });

} else {
    require("./server.js");
     
}

