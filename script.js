let booklist = [];

const addBook = (event) => {
    event.preventDefault();

    let title = document.getElementById('title').value;  
    let author = document.getElementById('author').value;  
    let pages = parseInt(document.getElementById('pages').value);
    let genre = document.getElementById('genre').value;
    if (title && author && pages && genre) {
        let book = {
            id: Math.random().toString(),
            title: title,
            author: author,
            pages: pages,
            genre: genre
        };
        console.log("Adding Book to Library"); 
        booklist.push(book);
        showBooks();
    } else {
        console.log("Empty Field!!"); 
        alert('Please fill in all fields');
    }
}

const deleteBook = (bookid) =>{
 const Bookafterdeletion = booklist.filter(book => book.id !== bookid);
 booklist = [...Bookafterdeletion];
 console.log("Book with id", {bookid}, "Deleted");
 showBooks(Bookafterdeletion); 
}

const searchBooks = (event) => {
    event.preventDefault();
    const searchTitle = document.getElementById('search-by-title').value.toLowerCase();
    const searchResult = booklist.filter(book => book.title.toLowerCase().includes(searchTitle));
    showBooks(searchResult);
}

const showBooks = (books = booklist) => {
    const booksContainer = document.getElementById('books');
    booksContainer.innerHTML = ''; 

  books.forEach(book => {
        const bookmain = document.createElement('div');
        bookmain.classList.add('book');
        bookmain.innerHTML = `
        <h2 class="book-title">${book.title}</h2>
        <h3 class="book-author">by ${book.author}</h3>
        <p class="book-pages">Pages: ${book.pages}</p>
        <p class="book-genre">Genre: ${book.genre}</p>
        <button onclick='deleteBook("${book.id}")' class="delBtn">Delete</button>
        `;

        booksContainer.appendChild(bookmain);
    });

    console.log("Book List",booklist);
}
