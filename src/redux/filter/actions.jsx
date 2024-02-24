import { COLORCHNAGED, STATUSCHANGED } from "./actionTypes"

export const colorChanged = (color, changeType) =>{
    return{
        type:COLORCHNAGED,
        payload:{ color, changeType }
    }
}
export const statusChanged = (status) =>{
    return{
        type:STATUSCHANGED,
        payload: status
    }
}