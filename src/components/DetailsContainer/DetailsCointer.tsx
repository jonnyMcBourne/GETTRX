import { FC } from 'react'
import { usePeopleReq } from '../../hooks'
import './DetailsContainer.css'
interface Props{
  urlDetails: string
}
export const DetailsCointer: FC<Props> = ({ urlDetails }) =>
{
  const { data, error } = usePeopleReq({ page: 1, text: '', singleUrl: urlDetails });
  console.log("data", data);
  return (
    <div className='DetailsContainer_container'>
      <div className='DetailsContainer_title'><p>Show Information:</p></div>
      <div className='DetailsContainer_info'>
        hello
      </div>
    </div>
  )
}
