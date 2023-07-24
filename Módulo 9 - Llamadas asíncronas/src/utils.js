const createCharacterRow = (character) => {
    const element = document.createElement("div");
    const avatar = createAvatar(character);
    element.appendChild(avatar);
    const link = createRowText(character);
    element.appendChild(link);
    element.className = "character-row";
    return element;
  };
  
  const createAvatar = (character) => {
    const element = document.createElement("img");
    element.width = 150;
    element.className = "thumbnail";
    element.src = character.image;
    return element;
  };
  
  const createRowText = (character) => {
    const element = document.createElement("span");
    element.append(character.name);
    return element;
  };
  
  const createAvatarDetail = (character) => {
    const element = document.createElement("img");
    element.width = 350;
    element.src = character.image;
    return element;
  };
  
  const showCharacter = (character) => {
    console.log("character", character);
    const characterDetail = document.getElementById("character-detail");
   
    characterDetail.innerHTML = "";
    characterDetail.appendChild(createAvatarDetail(character));
    characterDetail.appendChild(createParagraph("Name: " + character.name));
    characterDetail.appendChild(createParagraph("Status: " + character.status));
    characterDetail.appendChild(createParagraph("Species: " + character.species));
    // characterDetail.appendChild(createParagraph("Episode: " + character.episode));
    // characterDetail.appendChild(createParagraph("Location: " + character.location));
  };
  
  const createParagraph = (text) => {
    const element = document.createElement("p");
    element.append(text);
    return element;
  };
  
const createEpisodeElement = (episode) => {
    const element = document.createElement("div");
    element.className = "episodes";
    element.innerHTML = `
      <h3>${episode.name}</h3>
      <p><strong>Episode:</strong> ${episode.episode}</p>
      <p><strong>Air Date:</strong> ${episode.air_date}</p>
    `;
    return element;
  };
  
  const createLocationElement = (location) => {
    const element = document.createElement("div");
    element.className = "locations";
    element.innerHTML = `
      <h3>${location.name}</h3>
      <p><strong>Type:</strong> ${location.type}</p>
      <p><strong>Dimension:</strong> ${location.dimension}</p>
    `;
    return element;
  };
  
  export {
    createCharacterRow,
    createEpisodeElement,
    createLocationElement,
    showCharacter
  };
  