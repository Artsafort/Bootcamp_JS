import axios from "axios";

function getCharacters() {
  return axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      return response.data.results; // Seleccionamos solo los resultados que contienen los personajes
    });
}

function getCharacterById(id) {
  return axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
      return response.data;
    });
}

function getEpisodes() {
  return axios
    .get("https://rickandmortyapi.com/api/episode/")
    .then(response => {
        console.log(response);
      return response.data.results;
    });
}

function getEpisodeById(id) {
  return axios
    .get(`https://rickandmortyapi.com/api/episode/${id}`)
    .then(response => {
        console.log(response);
      return response.data;
    });
}

function getLocations() {
  return axios
    .get("https://rickandmortyapi.com/api/location/")
    .then(response => {
      return response.data.results;
    });
}

function getLocationById(id) {
  return axios
    .get(`https://rickandmortyapi.com/api/location/${id}`)
    .then(response => {
      return response.data;
    });
}

export { getCharacters, getCharacterById, getEpisodes, getEpisodeById, getLocations, getLocationById };
