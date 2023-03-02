import { createContext } from "react";
import { UrlType } from "../interfaces";

export interface ContextProps {
    url: UrlType
}

export const ApiContext = createContext({} as ContextProps);