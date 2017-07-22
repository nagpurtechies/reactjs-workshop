/* global fetch */

const baseUrl = 'https://swapi.co/api/people/?format=json';

const loadCharacters = () => fetch(baseUrl)
    .then(response => response.json());

export default loadCharacters;
