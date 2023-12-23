async function getRickAndMortyCharacters() {
  const characterNames = ["Rick Sanchez", "Morty Smith", "Summer Smith", "Beth Smith", "Jerry Smith"];
  const apiUrl = "https://rickandmortyapi.com/api/character/";

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const charactersData = [];

      const filteredCharacters = data.results.filter(character =>
        characterNames.includes(character.name)
      );

      filteredCharacters.forEach(character => {
        charactersData.push({
          nome: character.name,
          genero: character.gender === "Male" ? "Homem" : "Mulher",
          avatar: character.image,
          especie: character.species,
        });
      });

      return charactersData;
    }
}


module.exports = getRickAndMortyCharacters;
