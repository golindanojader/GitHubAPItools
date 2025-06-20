const fetch = require("node-fetch"); // Asegúrate de usar node-fetch@2

fetch("https://raw.githubusercontent.com/golindanojader/automaticCP/main/request.txt")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text(); // No es JSON, es texto plano
  })
  .then(code => {
    console.log("Contenido del archivo index.cjs:\n", code);
  })
  .catch(error => {
    console.error("Error al cargar el archivo:", error.message);
  });