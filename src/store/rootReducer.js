import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { mainReducer } from "../reducers/index";
import { cartReducer } from "../pages/Сart/reducers/index";

const persistConfig = {
	key: "root",
	storage,
	whiteList: ["mainReducer", "cartReducer"],
};

const rootReducer = combineReducers({
	mainReducer,
	cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
