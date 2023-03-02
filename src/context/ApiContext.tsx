import { createContext } from "react";
import { People,} from "../interfaces";

export interface ContextProps
{
    singleUrl: string;
    people: People[];
    singlePeople: People;
    getPeopleByPage: (url: string) => Promise<void>
    getPeopleBySearch: (url: string) => Promise<void>
    getPeopleById: (url: string) => Promise<void>
    setSingleUrl:(url:string)=>void
}

export const ApiContext = createContext({} as ContextProps);