const cluster = require("cluster");

if (cluster.isPrimary) {
    console.log(`This is the parent process with PID ${process.pid}`);

    const coresCount = require("os").availableParallelism();

    for (let i = 0; i < coresCount; i++) {
        const worker = cluster.fork();
        console.log(`The paprent process has spawned a new child process with pid ${worker.process.pid}`);
    }

    cluster.on("exit", (worker, exitCode, signal) => {
        console.log(`Worker ${worker.process.pid} ${signal || exitCode} died, restarting...`);
        cluster.fork();
    });

} else {
    require("./server.js");
     
}

