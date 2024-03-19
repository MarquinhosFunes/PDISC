const os = require("node:os");

console.log("Espacio libre de memoria: " + os.freemem() + "bytes");

const vec = [];
for (let i = 0; i < 1000000; i++) {
  vec.push(i);
}

console.log("Memoria libre despues de crear el vector:" + os.freemem());
