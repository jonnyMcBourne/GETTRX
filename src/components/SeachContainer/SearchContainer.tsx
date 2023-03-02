import {  FC, useContext } from 'react'
import { ApiContext } from '../../context'
import { SearchList } from '../SearchList/SearchList'
import { Button, SearchInput } from '../utils'
import  './SearchContainer.css'

interface Props
{
}

export const SearchContainer:FC<Props> = () =>
{
  const { singleUrl, getPeopleById } = useContext(ApiContext);
  const handleClick = () =>
  {
    getPeopleById(singleUrl)
  }

  return (
    <div className='searchContainer_container'>
      <SearchInput />
      <SearchList  />
      <Button text='View' onClick={handleClick}  />
    </div>
  )
}
