import * as actionTypes from './constans'

const defaultState = {
    carBandList:[]
}
export default (state = defaultState,action) =>{
    switch(action.type){
        case actionTypes.CHANGE_CAR_BAND_LIST:
            console.log(action)
            return {...state, carBandList:action.data};
        default:
            return state
    }
}