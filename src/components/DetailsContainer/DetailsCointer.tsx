import { FC, useContext } from 'react'
import { ApiContext } from '../../context'
import './DetailsContainer.css'
interface Props { }
export const DetailsCointer: FC<Props> = () =>
{
  const { singlePeople } = useContext(ApiContext);


  return (
    <div className='DetailsContainer_container'>
      <div className='DetailsContainer_title'><p>Show Information:</p></div>
      <div className='DetailsContainer_info'>
        { !singlePeople?.name ? <></> : (
          <div className='DetailsContainer_info_container'>
            <div className='keys'>
              <p>Name: </p>
              <p>Height: </p>
              <p>Mass: </p>
              <p>Skin Color: </p>
              <p>Birth Year: </p>
              <p>Hair Color: </p>
               <p>Eye Color: </p>
            </div>
            <div className='values'>
              <p>{ singlePeople.name }</p>
              <p>{ singlePeople.height }</p>
              <p>{ singlePeople.mass }</p>
              <p>{ singlePeople.skin_color }</p>
              <p>{ singlePeople.birth_year }</p>
              <p>{ singlePeople.hair_color }</p>
              <p>{ singlePeople.eye_color }</p>
            </div>
          </div>
        )
        }


      </div>
    </div>
  )
}
