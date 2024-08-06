const cluster = require("cluster");

console.log("-----");

if (cluster.isPrimary) {
    console.log("This is the parent proces`s");
    cluster.fork();
   
} else {
    console.log("This is the child process");
}

