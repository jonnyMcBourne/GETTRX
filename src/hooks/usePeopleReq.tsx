import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { peopleApi } from "../api/peopleApi";
import { Data, People } from "../interfaces";

interface reqProps {
    isLoading: boolean,
    data: People[]
    error: string | null
}

export const usePeopleReq = (url: string) =>
{
    const [ result, setResult ] = useState<reqProps>({ data: [], isLoading: true, error: null });
    const isFirstRender = useRef(true);
    console.log({ url });
    useEffect(() =>
    {
        console.log(isFirstRender.current);
        if (!isFirstRender.current)
        {
            peopleApi.get<Data>(`${url}`).then(( {data} ) =>
            {
                
                if (data.results)
                {   
                    setResult({data: data.results, isLoading:false, error:null})
                } else
                {
                    setResult({ data: [ data as unknown as People ] , isLoading:false, error:null})
                }
                               
            }).catch((error) =>
            {
                if (axios.isAxiosError(error))
                {
                    setResult({ data: [], isLoading: false, error: error.message })
                }
            })
        }

        isFirstRender.current = false;

    }, [url])

    console.log(result)

    return result;
}