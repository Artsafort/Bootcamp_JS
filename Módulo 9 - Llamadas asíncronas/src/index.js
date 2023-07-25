import "./styles.css";
import * as DataBusiness from "./data-business.js";
import * as Utils from "./utils.js";
import axios from "axios";

// Obtener y mostrar listado de personajes:
DataBusiness.getCharacters().then(datos => {
  const nodes = [];
  for (let characterCount of datos) {
    const node = Utils.createCharacterRow(characterCount);
    node.onclick = () => {
      // Se obtienen los datos del personaje: 
      DataBusiness.getCharacterById(characterCount.id).then(characterData => {

        // Como puede tener uno o varios episodios, se recorre el array de episodes, y se llama a la API 
        // axios.get(episodeUrl) con cada uno de ellos para obtener su nombre.
        // Pero, solo se mostrará el resultado por pantalla cuando se consigan los nombres de TODOS los episodios.
        
        let calls = []; // Aquí se guardarán las promesas para obtener el nombre de los episodios.
        let episodes = []; // Aquí se guardarán los nombres de los episodios cuando las promesas se hayan resuelto.
        characterData.episode.forEach(episodeUrl => {
          calls.push(
          axios.get(episodeUrl).then((response) => {
            // A continuación, esta promesa se ha resuelto, y, por tanto, se guarda el nombre en el array episodes.
            episodes.push(response.data.name + " ");
          })
          );
        });

        // Se utiliza Promise.all para agrupar todas las promesas del array: calls;
        // y, que el código que esta en .then() se ejecute solamente cuando todas las promesas se hayan resuelto.

        Promise.all(calls)
        .then(() => {
          // Este código solamente se ejecutará cuando todos los axios.get(episodeUrl) 
          // guardados en el array: calls (linea 25) se resuelvan. Es decir, que la API nos devuelva el resultado.
          characterData.episodeName = episodes;
          // Solo aquí estamos seguros de que tenemos todos los datos disponibles para mostrarlos en pantalla.
          Utils.showCharacter(characterData);
        });
      });
    };
    nodes.push(node);
  }
  const rootElement = document.getElementById("root");
  nodes.forEach(node => {
    rootElement.appendChild(node);
  });
});
