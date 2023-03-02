import { FC, PropsWithChildren, useContext, useReducer } from 'react'
import { peopleApi } from '../api';
import { Data, Gender, People } from '../interfaces';
import { ApiContext, ApiReducer } from './';


export interface ApiState
{
  people: People[];
  singlePeople: People;
  singleUrl: string;
}
export const ApiInitialState: ApiState = {
  people: [],
  singlePeople: {
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: Gender.Female,
    homeworld: '',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: new Date(),
    edited: new Date(),
    url: ''
  },
  singleUrl:''
};

export const ApiProvider: FC<PropsWithChildren<{}>> = ({ children }) =>
{
  const [ state, dispatch ] = useReducer(ApiReducer, ApiInitialState);
  const getPeopleByPage = async (url: string) =>
  {
    try
    {
      const { data } = await peopleApi.get<Data>(url);
      dispatch({
        type: '[API] - GetPeopleByPage', payload: [ ...state.people, ...data.results ].filter((item, index, arr) =>
        {
          return arr.findIndex(t => t.name === item.name) === index;
        })
      });
    } catch (error)
    {
      dispatch({ type: '[API] - GetPeopleByPage', payload: [] });
    }
  }

  

  const getPeopleBySearch =  async( url:string) =>
  {
    try
    {
      const { data } = await peopleApi.get<Data>(url);
      dispatch({ type: '[API] - GetPeopleBySearch', payload: data.results });
    } catch (error) {
      dispatch({ type: '[API] - GetPeopleBySearch', payload: [] });
    }
  }

  const getPeopleById = async (url:string) =>
  {
    try {
      const { data } = await peopleApi.get<People>(url)
      dispatch({ type: '[API] - GetPeopleById', payload: data });
    } catch (error) {
      
    }
  }

  const setSingleUrl = (url:string) =>
  {
    dispatch({ type: '[API] - SetSingleUrl', payload: url });
  }


  return (
    <ApiContext.Provider value={ { ...state, getPeopleByPage, getPeopleBySearch, getPeopleById, setSingleUrl}  }>{ children } </ApiContext.Provider>
  )
}