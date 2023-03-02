import { useState } from 'react'
import { SearchList } from '../SearchList/SearchList'
import { Button, SearchInput } from '../utils'
import  './SearchContainer.css'

export const SearchContainer = () =>
{
  const [ textInput, setTextInput ] = useState(''); 
  console.log({ textInput })
  
  return (
    <div className='searchContainer_container'>
      <SearchInput setTextInput={ setTextInput} />
      <SearchList textInput={textInput}  />
      <Button text='View'  />
    </div>
  )
}
