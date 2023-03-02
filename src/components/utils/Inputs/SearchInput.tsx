import { Dispatch, FC, FormEvent, SetStateAction } from "react"
import { Button } from "../Buttons/Button"
import './SearchInput.css'

interface Props
{
  setTextInput: Dispatch<SetStateAction<string>>;
}

export const SearchInput:FC<Props> = ({ setTextInput}) =>

{
  const onSubmitSearch = (e:FormEvent<HTMLFormElement>) =>
  {
    e.preventDefault();
    const form = e.currentTarget;
    const searchInput = form.elements.namedItem('search') as HTMLInputElement;
    setTextInput(searchInput.value);
  }

  return (
          <form onSubmit={onSubmitSearch} className="seachInput_container" >
              <input autoComplete="off" type="text" name="search" id="search" placeholder="Search People" />
              <Button text="Search" type="submit" />
          </form>
  )
}
