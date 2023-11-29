// Create a link element
var linkElement = document.createElement('link');

// Set attributes for the link element
linkElement.rel = 'stylesheet';
linkElement.type = 'text/css';
linkElement.href = 'https://raw.githubusercontent.com/kparrish92/guf_xaringan/main/css/guf.css';

// Append the link element to the document's head
document.head.appendChild(linkElement);
