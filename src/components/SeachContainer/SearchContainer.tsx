import React from 'react'
import { SearchList } from '../SearchList/SearchList'
import { Button, SearchInput } from '../utils'
import  './SearchContainer.css'

export const SearchContainer = () => {
  return (
    <div className='searchContainer_container'>
      <SearchInput />
      <SearchList/>
      <Button text='View'  />
    </div>
  )
}
