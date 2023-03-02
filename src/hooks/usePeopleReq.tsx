import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { peopleApi } from "../api/peopleApi";
import { Data, People, UrlType } from "../interfaces";

interface reqProps
{
    isLoading: boolean,
    data: People[]
    error: string | null
}

export const usePeopleReq = (url: UrlType) =>
{
    const [ result, setResult ] = useState<reqProps>({ data: [], isLoading: true, error: null });
    let newUrl = '';
    if (url.singleUrl)
    {
        newUrl = url.singleUrl;
    } else if (url.text.length > 1 && !url.text.localeCompare)
    {
        newUrl = `?search=${ url.text }`
    } else
    {
        newUrl = `?page=${ url.page }`
    }
    console.log({ newUrl });
    const isFirstRender = useRef(true);
    useEffect(() =>
    {
        if (!isFirstRender.current)
        {
            peopleApi.get<Data>(`${ newUrl }`).then(({ data }) =>
            {
                console.log('DATA', data);
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
    }, [ newUrl ]);
    return result;
}