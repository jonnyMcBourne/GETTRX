import {  FC, useContext } from "react"
import { ApiContext } from "../../context"
import { People } from "../../interfaces"
import './PeopleCard.css'

interface PersonProps
{
    person: People
}

export const PeopleCard: FC<PersonProps> = ({ person }) =>
{
    const { setSingleUrl }=useContext(ApiContext)
    const { name, height, birth_year, gender, url } = person;
    const handleClick = () =>
    {
        let startIndex = url.indexOf("people");
        if (startIndex !== -1)
        {
            let lastIndex = url.indexOf("/",startIndex)
            const newurl = url.slice(lastIndex)
            setSingleUrl(newurl);
        } else
        {
            
        }
        //setUrlDetails(url); 
    }
    return (
        <div className="peopleCard_container container" tabIndex={ 0 } onClick={handleClick} >
            <div>
                <div className="peopleCard_subContainer">
                <p className="peopleCard_name" >{ name }</p>
                <p className="peopleCard_badge" >{ birth_year }</p>
            </div>
            <div className="peopleCard_subContainer" >
                <p className="peopleCard_gender">{ gender.replace(/\b\w/g, (match) => match.toUpperCase()) }</p>
                <p className="peopleCard_height" >{ height}</p>
            </div>
            </div>
        </div>
    )
}
