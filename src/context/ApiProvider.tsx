import { FC, PropsWithChildren, useReducer } from 'react'
import { UrlType } from '../interfaces';
import { ApiContext } from './';

export interface ApiState {
  url: UrlType    
}
export const ApiInitialState: ApiState = {
  url:{page:1,singleUrl:'',text:''}        
};

export const ApiProvider: FC<PropsWithChildren<{}>> = ({ children }) =>
{
  const getPeopleByPage = async () =>
  {
    
  }


  return (
    <ApiContext.Provider value={ApiInitialState}></ApiContext.Provider>
  )
}