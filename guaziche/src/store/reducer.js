import {combineReducers} from "redux";
import { reducer as sellCarsReducer } from '../components/sellingCars/store/index';

export default combineReducers({
    sellCar:sellCarsReducer
})