import {  FC, FormEvent, useContext } from "react"
import { ApiContext } from "../../../context";
import { Button } from "../Buttons/Button"
import './SearchInput.css'

interface Props
{
}

export const SearchInput:FC<Props> = () =>
{
  const { getPeopleBySearch} = useContext(ApiContext)
  const onSubmitSearch = (e: FormEvent<HTMLFormElement>) =>
  {
    e.preventDefault();
    const form = e.currentTarget;
    getPeopleBySearch(`?search=${ (form.elements.namedItem('search') as HTMLInputElement).value }`);
  };



  return (
          <form onSubmit={onSubmitSearch} className="seachInput_container" >
              <input autoComplete="off" type="text" name="search" id="search" placeholder="Search People" />
              <Button text="Search" type="submit" />
          </form>
  )
}
