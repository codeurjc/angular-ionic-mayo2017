var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

let books = []
let id = 0;

function searchBook(id) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            return i;
        }
    }
    return undefined;
}

app.route('/books/')

    .get((req, res) => {
        res.json(books);
    })

    .post((req, res) => {
        let book = req.body;
        book.id = id;
        id++;
        books.push(book);
        res.json(book);
    })

app.route('/books/:id')

    .get((req, res) => {
        let rId = parseInt(req.params['id']);
        let pos = searchBook(rId);
        if (pos !== undefined) {
            res.json(books[pos]);
        } else {
            res.sendStatus(404);
        }
    })

    .put((req, res) => {
        let rId = parseInt(req.params['id']);
        let pos = searchBook(rId);
        if (pos !== undefined) {
            let newBook = req.body;
            newBook.id = rId;
            books[pos] = newBook;
            res.json(newBook);
        } else {
            res.sendStatus(404);
        }
    })

    .delete((req, res) => {

        let pos = searchBook(parseInt(req.params['id']));
        if (pos !== undefined) {
            let deletedBook = books[pos];
            books.splice(pos,1);
            res.json(deletedBook);
        } else {
            res.statusCode(404);
        }
    })

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
