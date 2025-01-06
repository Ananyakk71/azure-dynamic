import { loadHeadContent } from './header.js';
import { loadMainSection } from './mainSection.js';
import { loadDropContent } from './drop.js';

fetch("data.json")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    loadHeadContent(data);

    loadMainSection(data);

    loadDropContent(data);
})
.catch(error => console.error("Error loading data:", error));
