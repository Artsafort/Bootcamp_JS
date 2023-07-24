import "./styles.css";
import * as DataBusiness from "./data-business.js";
import * as Utils from "./utils.js";

// Obtener y mostrar listado de personajes

DataBusiness.getCharacters().then(datos => {
  const nodes = [];
  for (let characterCount of datos) {
    const node = Utils.createCharacterRow(characterCount);
    node.onclick = () => {
      DataBusiness.getCharacterById(characterCount.id).then(characterData => {
        Utils.showCharacter(characterData);
      });
    };
    nodes.push(node);
  }

  const rootElement = document.getElementById("root");
  nodes.forEach(node => {
    rootElement.appendChild(node);
  });
});

// Obtener y mostrar listado de episodios

DataBusiness.getEpisodes().then(episodes => {
    const episodesElement = document.getElementById("episodes");
    for (const episode of episodes) {
      const episodeNode = Utils.createEpisodeElement(episode);
      episodesElement.appendChild(episodeNode);
    }
  });
  
  // Obtener y mostrar listado de localizaciones
  
  DataBusiness.getLocations().then(locations => {
    const locationsElement = document.getElementById("locations");
    for (const location of locations) {
      const locationNode = Utils.createLocationElement(location);
      locationsElement.appendChild(locationNode);
    }
  });
  
