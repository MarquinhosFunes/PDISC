const os = require("node:os")

console.log("Sistema Operativo:" + os.platform())
console.log("Version del SO;" + os.release())
console.log("Memoria total:" + os.totalmem() + "bytes")
console.log("Memoria libre:" + os.freemem() + "bytes")
console.log("Arquitectura CPU:" + os.arch())
console.log("Numero de procesadores logicos:" + os.cpus().length)
os.cpus().forEach(cpu => {
    console.log("Nombre:" + cpu.model)
    console.log("Nucleos:" + cpu.cores)
})