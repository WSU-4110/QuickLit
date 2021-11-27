// Required module
import axios from "axios";
import { API_GATEWAY_ENDPOINT } from "./Constants";
export default {
    
    googleBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },

    googleBooksIDSearch: function(id) {
        return axios.get("https://www.googleapis.com/books/v1/volumes/" + id)
    },
    
    saveBookID: function(id) {
        return axios.post(BASE_URL + "/bookshelf/add/" + id);
    },

    getBookshelfIDs: function() {
        return authenticatedHttpGet(API_GATEWAY_ENDPOINT + "/bookshelf")
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};  
