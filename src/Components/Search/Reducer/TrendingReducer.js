import actions from './constants';

const initalState = {
    data: [],
    message : '',
}

const TreadingReducer  = (state = initalState, action) => {
 switch(action.type){
     case actions.TRENDING_API_REQUESTED_SUCCESS: {
         return {...state, data:action.payload.tags}
     }   
       case actions.TRENDING_API_REQUESTED_FAILURE: {
        return {...state, message:action.payload.message}
    }
    default :{
        return state;
    }
 }
}

export default TreadingReducer;