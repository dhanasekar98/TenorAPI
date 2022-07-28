import axios from 'axios';
import api from './apipaths';

export function getTrendingApi(){
    return axios.request({
        'method':'get',
        'url':api.TREADING_API
    }).then((res)=>res)
}

export function getFeaturedApi(){
    return axios.request({
        'method':'get',
        'url':api.FEATURED_API
    }).then((res)=>res)
}

export function getSearchApi(data){
    return axios.request({
        'method':'get',
        'url':api.SEARCH_API + data.value
    }).then((res)=>res)
}

export function getSearchStickerApi(data){
    return axios.request({
        'method':'get',
        'url':api.SEARCH_STICKER_API + data.value
    }).then((res)=>res)
}
