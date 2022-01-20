
function fetchBooks() {
  
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then((resp) => resp.json())
  .then((potato) => renderBooks(potato));
  
  // console.log(fetchBooks);
  // console.log(books); 
  // renderBooks(Object.title)
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
  
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});





/*function fetchBooks("https://anapioficeandfire.com/api/books") {



  // To pass the tests, don't forget to return your fetch!
  .then((resp) => resp.json())
  .then((json) => console.log(json));}
  

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
*/