import { FC } from 'react'
import './SearchList.css'
import {usePeopleReq} from '../../hooks'
interface Props
{
  textInput: string
}
export const SearchList: FC<Props> = ({ textInput = '' }) =>
{
  const { data, isLoading, error } = usePeopleReq(textInput);



  return (
    <div className='SearchList_Container'> 
      <ul>
        {
          data.map((person) => (<li key={person.url}>{ person.name}</li>))
        }
        

      </ul>
    </div>
  
  )
}
