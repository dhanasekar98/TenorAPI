import { combineReducers } from "redux";
import TreadingReducer from "./Components/Search/Reducer/TrendingReducer";
import FeaturedReducer from "./Components/Search/Reducer/FeaturedReducer";

export default combineReducers({
  Treading: TreadingReducer,
  Featured: FeaturedReducer
});

