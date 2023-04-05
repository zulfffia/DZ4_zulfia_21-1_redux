import {types} from "./types";

export const PlusAction = (plus) =>{
    return{
        type: types.PLUS,
        payload: plus
    }
}

export const MinusAction = (minus) =>{
    return{
        type: types.MINUS,
        payload: minus
    }
}

export const MultiplayAction = (multiplay) =>{
    return{
        type: types.MULTIPLAY,
        payload: multiplay
    }
}
export const divisionAction = (division) =>{
    return{
        type: types.DIVISION,
        payload: division
    }
}