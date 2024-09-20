const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;

const lastModified = document.lastModified;
const modified = document.querySelector("#lastModified");
modified.innerHTML = `Last modified: ${lastModified}`;
