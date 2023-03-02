import { FC } from 'react'
import './SearchList.css'
import { usePeopleReq } from '../../hooks'
interface Props
{
  textInput: { text: string };
}
export const SearchList: FC<Props> = ({ textInput }) =>
{
  const { data, error } = usePeopleReq(textInput);

  if (error)
  {
    console.log(error);
    return <></>
  }

  return (
    <div className='SearchList_Container'>
      <ul>
        {
            data.length === 0 ?
              <div>There are not People</div> :
            data.map((person) => (<li key={ person.url }>{ person.name }</li>))
        }
      </ul>
    </div>

  )
}
