import { FC } from "react"
import { People } from "../../interfaces"
import './PeopleCard.css'

interface PersonProps
{
    person: People
}

export const PeopleCard: FC<PersonProps> = ({ person }) =>
{
    const { name, height, birth_year, gender } = person;
    return (
        <div className="peopleCard_container" tabIndex={ 0 }>
            <div className="peopleCard_subContainer">
                <p className="peopleCard_name" >{ name }</p>
                <p className="peopleCard_badge" >{ birth_year }</p>
               
            </div>
            <div className="peopleCard_subContainer" >
                <p className="peopleCard_gender">{ gender.replace(/\b\w/g, (match) => match.toUpperCase()) }</p>
                <p className="peopleCard_height" >{ height}</p>
            </div>

        </div>
    )
}
