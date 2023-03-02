import { Dispatch, FC, FormEvent, SetStateAction } from "react"
import { UrlType } from "../../../interfaces";
import { Button } from "../Buttons/Button"
import './SearchInput.css'

interface Props
{
  setTextInput: Dispatch<SetStateAction<UrlType>>;
}

export const SearchInput:FC<Props> = ({ setTextInput,}) =>
{
  const onSubmitSearch = (e: FormEvent<HTMLFormElement>) =>
  {
    e.preventDefault();
    const form = e.currentTarget;
    setTextInput({ text: (form.elements.namedItem('search') as HTMLInputElement).value, page: 1, singleUrl:'' });
  };

  return (
          <form onSubmit={onSubmitSearch} className="seachInput_container" >
              <input autoComplete="off" type="text" name="search" id="search" placeholder="Search People" />
              <Button text="Search" type="submit" />
          </form>
  )
}
