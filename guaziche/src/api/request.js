import {carList} from './config'

export const getCarBandListRequest = () =>{
    return new Promise((resolve,reject)=>{
        resolve({
            data:{carList}
        })
    })
}