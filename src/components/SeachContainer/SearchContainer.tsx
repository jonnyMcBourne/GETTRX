import { Dispatch, FC, SetStateAction, useState } from 'react'
import { UrlType } from '../../interfaces';
import { SearchList } from '../SearchList/SearchList'
import { Button, SearchInput } from '../utils'
import  './SearchContainer.css'

interface Props
{
  setUrlDetails: Dispatch<SetStateAction<string>>;
}

export const SearchContainer:FC<Props> = ({setUrlDetails}) =>
{
  const [ textInput, setTextInput ] = useState<UrlType>({ text: '', page: 1, singleUrl:'' });
  return (
    <div className='searchContainer_container'>
      <SearchInput setTextInput={ setTextInput} />
      <SearchList textInput={textInput} setInput={setTextInput} setUrlDetails={setUrlDetails} />
      <Button text='View'  />
    </div>
  )
}
