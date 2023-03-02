import { useState } from 'react'
import { SearchList } from '../SearchList/SearchList'
import { Button, SearchInput } from '../utils'
import  './SearchContainer.css'

export const SearchContainer = () =>
{
  const [ textInput, setTextInput ] = useState<{text:string,page:number}>({ text: '',page: 1 }); 
  
  return (
    <div className='searchContainer_container'>
      <SearchInput setTextInput={ setTextInput} />
      <SearchList textInput={textInput} setInput={setTextInput}  />
      <Button text='View'  />
    </div>
  )
}
