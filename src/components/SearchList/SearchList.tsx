import { Dispatch, FC, SetStateAction, useRef } from 'react'
import './SearchList.css'
import { usePeopleReq } from '../../hooks'
import { PeopleCard } from '../PeopleCard/PeopleCard';
import { UrlType } from '../../interfaces';
interface Props
{
  textInput: UrlType;
  setInput: Dispatch<SetStateAction<UrlType>>
  setUrlDetails: Dispatch<SetStateAction<string>>;
}
export const SearchList: FC<Props> = ({ textInput,setInput, setUrlDetails }) =>
{
  const { data, error } = usePeopleReq(textInput);
  const ref = useRef<HTMLUListElement>(null);
  if (error)
  {
    console.log(error);
    return <></>
  }

  const handleScroll = () =>
  {
    const elementUl = ref.current;
    if (elementUl)
    {
      const { scrollTop, scrollHeight, clientHeight } = elementUl;
      if (Math.floor(scrollTop + clientHeight)  === Math.floor(scrollHeight))
      {
       setInput(prev=>({...prev,page:prev.page+1}))
      }
    }
  }

  return (
    <div className='SearchList_Container'>
      <ul onScroll={handleScroll} ref={ref}  >
        {
            data.length === 0 ?
              <div>There are not People</div> :
            data.map((person) => (<PeopleCard person={person} key={person.url} setUrlDetails={setUrlDetails} />))
        }
      </ul>
    </div>

  )
}
