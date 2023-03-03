import { FC, useContext, useEffect, useRef, useState } from 'react'
import './SearchList.css'
import { PeopleCard } from '../PeopleCard/PeopleCard';
import { ApiContext } from '../../context';
interface Props { };
export const SearchList: FC<Props> = ( ) =>
{

  const { getPeopleByPage, people } = useContext(ApiContext);
  const [ page, setPage ] = useState(1);

  const ref = useRef<HTMLUListElement>(null);
  const isFirstRender = useRef(false)
  
  const handleScroll = () =>
  {
    const elementUl = ref.current;
    if (elementUl)
    {
      const { scrollTop, scrollHeight, clientHeight } = elementUl;
      if (Math.floor(scrollTop + clientHeight)  === Math.floor(scrollHeight))
      {
        setPage(prev => prev + 1);
      }
    }
  }
       /* eslint-disable */
  useEffect(() =>
  {
    if (isFirstRender.current)
    {
      getPeopleByPage(`?page=${ page }`);
    }
    isFirstRender.current = true;
  },[page])
  /* eslint-enable */
  return (
    <div className='SearchList_Container'>
      <ul onScroll={handleScroll} ref={ref}  >
        {
            people.length === 0 ?
              <div>There are not People</div> :
            people.map((person) => (<PeopleCard person={person} key={person.url}/>))
        }
      </ul>
    </div>

  )
}
