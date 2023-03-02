import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { peopleApi } from "../api/peopleApi";
import { Data, People } from "../interfaces";

interface reqProps
{
    isLoading: boolean,
    data: People[]
    error: string | null
}

export const usePeopleReq = (url: { text: string, page: number }) =>
{
    const [ result, setResult ] = useState<reqProps>({ data: [], isLoading: true, error: null });
    let newUrl = '';
    if (url.text.length > 1)
    {
        newUrl = `?search=${ url.text }`
    } else
    {
        newUrl = `?page=${ url.page }`
    }
    const isFirstRender = useRef(true);
    useEffect(() =>
    {
        if (!isFirstRender.current)
        {
            peopleApi.get<Data>(`${ newUrl }`).then(({ data }) =>
            {
                if (data.results && url.text.length <= 1)
                {
                    setResult(prevState => ({
                        data: [ ...prevState.data, ...data.results ].filter((item, index, arr) =>
                        {
                            return arr.findIndex(t => t.name === item.name) === index;
                        }), isLoading: false, error: null
                    }))
                } else if (data.results && url.text.length > 1 )
                {
                    setResult({ data: data.results, isLoading: false, error: null });   
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
    }, [ url, newUrl ]);
    return result;
}