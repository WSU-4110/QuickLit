// Required module
import axios from "axios";
import { authenticatedHttpGet, authenticatedHttpPost } from "../api/Client";
import { API_GATEWAY_ENDPOINT } from "./Constants";
import { QuickLitUser } from "../model/QuickLitUser";
import { getUser } from "./AuthUtility";

export default {
    
    googleBooks: function(query: any) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },

    googleBooksIDSearch: function(id: any) {
        return axios.get("https://www.googleapis.com/books/v1/volumes/" + id)
    },
    
    saveBookID: function(id: any) {
        return authenticatedHttpPost(API_GATEWAY_ENDPOINT + "/authenticated/bookshelf/add/" + id)
    },

    getBookshelfIDs: function() {
        const user: QuickLitUser = getUser();
        return authenticatedHttpGet(API_GATEWAY_ENDPOINT + "/authenticated/bookshelf")
     },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};  
