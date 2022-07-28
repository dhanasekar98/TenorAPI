import actions from './constants';

const initalState = {
    data: [],
    message : '',
    sticker:[],
}

const FeaturedReducer  = (state = initalState, action) => {
 switch(action.type){
     case actions.FEATURED_API_REQUESTED_SUCCESS: {
         return {...state, data:action.payload.results}
     }   
       case actions.FEATURED_API_REQUESTED_FAILURE: {
        return {...state, message:action.payload.message}
    }
    case actions.SEARCH_API_REQUESTED_SUCCESS: {
        return {...state, data:action.payload.results}
    }   
      case actions.SEARCH_API_REQUESTED_FAILURE: {
       return {...state, message:action.payload.message}
   }
   case actions.SEARCH_STICKER_API_REQUESTED_SUCCESS: {
    return {...state, sticker:action.payload.results}
}   
  case actions.SEARCH_STICKER_API_REQUESTED_FAILURE: {
   return {...state, message:action.payload.message}
}
    default :{
        return state;
    }
 }
}

export default FeaturedReducer;