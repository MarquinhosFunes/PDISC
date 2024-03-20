const http = require("node:http");
const fs = require("node:fs");

const mime = {
  html: "text/html",
};

const servidor = http.createServer((pedido, respuesta) => {
  const url = new URL("http://localhost:8888" + pedido.url);
  let camino = "public" + url.pathname;
  if (camino == "public/") camino = "public/index.html";
  encaminar(pedido, respuesta, camino);
});

servidor.listen(8888);

function encaminar(pedido, respuesta, camino) {
  console.log(camino);
  if (camino === "public/recuperarnombre") {
    recuperar(pedido, respuesta);
  } else {
    fs.stat(camino, (error) => {
      if (!error) {
        fs.readFile(camino, (error, contenido) => {
          if (error) {
            respuesta.writeHead(500, { "Content-Type": "text/plain" });
            respuesta.write("Error interno");
            respuesta.end();
          } else {
            respuesta.writeHead(200, { "Content-Type": "text/html" });
            respuesta.write(contenido);
            respuesta.end();
          }
        });
      } else {
        respuesta.writeHead(404, { "Content-Type": "text/html" });
        respuesta.write(
          "<!doctype html><html><head></head><body>Recurso inexistente</body></html>"
        );
        respuesta.end();
      }
    });
  }
}

function recuperar(pedido, respuesta) {
  let info = "";
  pedido.on("data", (datosparciales) => {
    info += datosparciales;
  });
  pedido.on("end", () => {
    const formulario = new URLSearchParams(info);
    const nombre = formulario.get("nombre");
    const esElegante = esEleganteVerif(nombre);
    respuesta.writeHead(200, { "Content-Type": "text/plain" });
    respuesta.end(esElegante.toString());
    console.log(formulario);
    console.log(esElegante);
  });
}

function esEleganteVerif(nombre) {
  return nombre.startsWith("a") && nombre.endsWith("a");
}
