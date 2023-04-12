// 1-Define a Book class with properties for title, author, and year.
// 2-Parse the JSON data into a JavaScript array of book objects using map function and  destructuring.
// 3-Use a static method on the Book class with json parameter to parse the JSON data and
// ({    "title": "The Hobbit",    "author": "J.R.R. Tolkien",    "year": 1937  }
// JSON.stringfy( {    "title": "The Hobbit",    "author": "J.R.R. Tolkien",    "year": 1937  });) we gonna pass something like this as a parameter to this static function)
// 4-Use a getter method on the Book class to retrieve the author name.
// 5-Use the sort() method with a custom comparison function to sort the array of Book objects by author name.
// 6-Convert the sorted list of books into JSON format.
// 7-Output the sorted list of books in JSON format.
// 8- create promise which will take a book object and will check the year is bigger then 1950

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    static parseJson(json) {
        const jsonparse = JSON.parse(json);
        return new Book(jsonparse.title, jsonparse.author, jsonparse.year);
    }

    get authorName() {
        return this.author;
    }
}

const data = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
];

const test = Book.parseJson(
    JSON.stringify({
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
    })
);

const books = data.map(({ title, author, year }) => {
    return new Book(title, author, year);
});

// console.log(books);
console.log(test);

const sorted = books.sort((a, b) => a.authorName.localeCompare(b.authorName));

const sortedJson = JSON.stringify(sorted);

console.log(sortedJson);

function checkYear(book) {
    return new Promise((resolve, reject) => {
        if (book.year > 1950) {
            resolve(`${book.title} was published after 1950.`);
        } else {
            reject(`${book.title} was published before 1950.`);
        }
    });
}

checkYear(books[0])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
