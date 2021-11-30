import axios from "axios";
import { authenticatedHttpGet, authenticatedHttpPost } from "../api/Client";
import { BACKEND_BASE_URL } from "./Constants";

export default {
    
    googleBooks: function(query: any) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },

    googleBooksIDSearch: function(id: any) {
        return axios.get("https://www.googleapis.com/books/v1/volumes/" + id)
    },
    
    saveBookID: function(id: any) {
        return authenticatedHttpPost(`${BACKEND_BASE_URL}/authenticated/bookshelf/add/" ${id}`, {})
    },

    getBookshelfIDs: function() {
        return authenticatedHttpGet(`${BACKEND_BASE_URL}/authenticated/bookshelf`);
     },

    deleteBook: function(id: any) {
        return axios.delete("/api/books/" + id);
    }
};  