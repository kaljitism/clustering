const cluster = require("cluster");

console.log("-----");

if (cluster.isPrimary) {
    console.log("This is the parent process");
    cluster.fork();
   
} else {
    console.log("This is the child process");
}

