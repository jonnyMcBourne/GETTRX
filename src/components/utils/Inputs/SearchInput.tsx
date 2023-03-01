import { SyntheticEvent } from "react"
import { Button } from "../Buttons/Button"
import './SearchInput.css'
export const SearchInput = () =>
{
  const onSubmitSearch = (e:SyntheticEvent) =>
  {
    e.preventDefault();
  }

  return (
          <form onSubmit={onSubmitSearch} className="seachInput_container" >
              <input type="text" placeholder="Search People" />
              <Button text="Search" type="submit" />
          </form>
  )
}
