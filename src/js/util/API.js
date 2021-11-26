// Required module
import axios from "axios";
const BASE_URL = "http://quicklit-env.eba-99zv9awt.us-east-1.elasticbeanstalk.com"

export default {
    // Retrieves Google books
    googleBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
    // Saves book to the DB
    saveBook: function(id) {
        return axios.post(BASE_URL + "/bookshelf/add/" + id);
    },
    // Gets saved books from DB
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Gets book with the given ID
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes book with the given ID
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};
