import * as actionTypes from './constans'
import { getCarBandListRequest} from '../../../api/request'

export const chageCarBandList = (data) => ({
    type: actionTypes.CHANGE_CAR_BAND_LIST,
    data:data
});

export const getCarBandList = () =>{
    return (dispatch) => {
        getCarBandListRequest().then(data =>{
            console.log(data.data.carList)
            dispatch(chageCarBandList(data.data.carList))
        }).catch(()=>{
            console.log('汽车品牌名单数据传输有误')
        })
    }
}