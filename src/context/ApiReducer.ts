import { ApiInitialState } from "./ApiProvider"
import { People } from "../interfaces";

type action =
  | { type: '[API] - SetSingleUrl', payload: string }
  | { type: '[API] - GetPeopleByPage', payload: People[] }
  | { type: '[API] - GetPeopleBySearch', payload: People[] }
  | { type: '[API] - GetPeopleById', payload: People }


export const ApiReducer = ( state = ApiInitialState, action: action) =>{
    switch (action.type) {
        case '[API] - GetPeopleByPage':
            return { ...state, people: action.payload }
        case '[API] - GetPeopleBySearch':
            return { ...state, people: action.payload }
        case '[API] - GetPeopleById':
            return { ...state, singlePeople: action.payload }
        case '[API] - SetSingleUrl':
            return { ...state, singleUrl: action.payload }
        default:
            return {...state}
    }
}