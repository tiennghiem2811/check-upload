import { put, takeEvery } from 'redux-saga/effects'
import upImg from '../FetchAPI/fetchUpload'
function* upLoadImg(action) {
    try {
        const response = yield upImg(action.payload);
        console.log('saga:data::::::',action.payload);
        
        put({
            type: "thanhcong",
            payload: response
        })

    } catch (error) {

    }
}
export const upload = [
    takeEvery('UPLOAD_IMG_REQUEST', upLoadImg)
]