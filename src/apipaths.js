import { apikey } from "./apikey";

const api = {
    TREADING_API : `https://tenor.googleapis.com/v2/categories?key=${apikey}`,
    FEATURED_API : `https://tenor.googleapis.com/v2/featured?key=${apikey}`,
    SEARCH_API: `https://tenor.googleapis.com/v2/search?key=${apikey}&q=`,
    SEARCH_STICKER_API: `https://tenor.googleapis.com/v2/search?key=${apikey}&searchfilter=sticker&q=`,
 } 

 export default api;