import { call, put } from 'redux-saga/effects'
import actions from './constants';
import { getTrendingApi ,getFeaturedApi ,getSearchApi,getSearchStickerApi } from '../../../routes';

export function* getTrending (params){
    try{
        const result = yield call(()=>getTrendingApi());
        yield put({type: actions.TRENDING_API_REQUESTED_SUCCESS, payload:result.data})
    }catch (e){
        yield put({type: actions.TRENDING_API_REQUESTED_FAILURE, payload:'Error Occured'})
    }
}

export function* getFeatured (params){
    try{
        const result = yield call(()=>getFeaturedApi());
        yield put({type: actions.FEATURED_API_REQUESTED_SUCCESS, payload:result.data})
    }catch (e){
        yield put({type: actions.FEATURED_API_REQUESTED_FAILURE, payload:'Error Occured'})
    }
}

export function* getSearch (params){
    try{
        const result = yield call(()=>getSearchApi(params));
        yield put({type: actions.SEARCH_API_REQUESTED_SUCCESS, payload:result.data})
    }catch (e){
        yield put({type: actions.SEARCH_API_REQUESTED_FAILURE, payload:'Error Occured'})
    }
}

export function* getSearchSticker (params){
    try{
        const result = yield call(()=>getSearchStickerApi(params));
        console.log(result.data);
        yield put({type: actions.SEARCH_STICKER_API_REQUESTED_SUCCESS, payload:result.data})
    }catch (e){
        yield put({type: actions.SEARCH_STICKER_API_REQUESTED_FAILURE, payload:'Error Occured'})
    }
}

