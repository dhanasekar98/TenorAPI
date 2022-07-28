import { all, takeLatest } from 'redux-saga/effects';
import actions from './Components/Search/Reducer/constants';
import { getTrending, getFeatured,getSearch,getSearchSticker  } from './Components/Search/Reducer/dispatch';


export function* watchSaga() {
    yield all([
        takeLatest(actions.TRENDING_API_REQUESTED , getTrending ),
        takeLatest(actions.TRENDING_API_REQUESTED , getFeatured ),
        takeLatest(actions.SEARCH_API_REQUESTED , getSearch ),
        takeLatest(actions.SEARCH_STICKER_API_REQUESTED , getSearchSticker  ),
    ])    
}