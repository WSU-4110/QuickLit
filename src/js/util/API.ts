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
        const user: QuickLitUser = getUser();
        return authenticatedHttpPost(API_GATEWAY_ENDPOINT + "/authenticated/bookshelf/add/" + id)

/*         return authenticatedHttpPost(API_GATEWAY_ENDPOINT + "/" + user.cognitoTokenJWT + "/bookshelf/add/" + id)
 */    
},

    getBookshelfIDs: function() {
        const user: QuickLitUser = getUser();
        return authenticatedHttpGet(API_GATEWAY_ENDPOINT + "/authenticated/bookshelf")

/*         return authenticatedHttpGet(API_GATEWAY_ENDPOINT + "/" + user.cognitoTokenJWT + "/bookshelf")
 */    },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }

    /*     saveBookIDOG: function(id) {
        return axios.post(BASE_URL + "/bookshelf/add/" + id);
    }, */
};  
