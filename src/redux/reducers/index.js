import { combineReducers} from "redux";
import { LeagueReducer } from "./leagueReducer";

const reducers =combineReducers({
    allProducts:LeagueReducer,
})
export default reducers