import { ApiInitialState } from "./ApiProvider"
import { ApiContext } from "./ApiContext"

type action = { type:'change',payload:{}};

export const ApiReducer = (state=ApiInitialState, action:action) =>{
    switch (action.type) {
        case 'change':
        return {...state}
    }
}