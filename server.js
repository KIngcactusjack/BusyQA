// const http = require('http');
// const port = 3000;
// const requestHandler = (request, response) => {
//     console.log("New request came from" + request.url);
//     response.end("Your Server is in good health: ");
// }

// const server = http.createServer(requestHandler);
// server.listen(port, () => {
//     console.log("Listing on port: " + port);
// })
//************ Express.JS  ************ */

const express = require('express');

const app = express();
const port = 3000;

const body_parser = require('body-parser');
const { response } = require('express');

app.use(body_parser.urlencoded({ extended: true }));

var quotes = [
    {
        id: 1,
        quote: "The best is yet to come",
        author: "Unknown",
        year: 2000
    },
    {
        id: 2,
        quote: "This is a quote",
        author: "First Last",
        year: 1930
    },
    {
        id: 3,
        quote: "This is another quote",
        author: "First2 Last2",
        year: 1910
    }
];

app.get('/getAllQuotes', (request, response) => {
    // response.send('Hi, your express server is doing good!');
    response.json(quotes);
});

app.get('/quotes', (request, response) => {
    console.log('All quote from year ' + request.query.year);
    response.json(quotes.filter(q => q.year == request.query.year));
});

app.get('/quotes/:id', (request, response) => {
    console.log('All quote by ID: ' + request.params.id);
    response.json(quotes.filter(q => q.id == request.params.id));
});

app.post('/quote', (request, response) => {
    console.log('inserting a new quote by ID: ' + request.body.id);
    quotes.push({ id: request.body.id, quote: request.body.quote, author: request.body.author, year: request.body.year });
    response.json('New response added');
});

app.put('/quoteUpdate/:id', (request, response) => {
    console.log("Updating a quote with ID: " + request.params.id);
    let quote = quotes.filter(q => q.id == request.params.id);
    quote[0].quote = request.body.quote;
    quote[0].author = request.body.author;
    quote[0].year = request.body.year;

    response.json('Quote with id: ' + request.params.id + ' Updated to: ID: ' + quote[0].id + ', Quote: ' + quote[0].quote + ', Author: ' + quote[0].author + ', Year: ' + quote[0].year);

});

app.delete('/quote/:id', (request, response) => {
    console.log("Deleting a quote by ID" + request.params.id);
    let quote = quotes.filter(q => q.id == request.params.id);
    quote.splice(0, 1);
    response.json('Quote Deleted');

})

app.listen(port, () => {
    console.log("Listing through express on port: " + port);

});

