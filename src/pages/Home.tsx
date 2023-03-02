import { useState } from "react";
import { DetailsCointer, SearchContainer } from "../components"


export const Home = () =>
{
  const [ urlDetails, setUrlDetails ] = useState('');
  console.log({ urlDetails });

    return (
        <div className='App_container'>
            <SearchContainer setUrlDetails={setUrlDetails} />
            <DetailsCointer urlDetails={urlDetails} />
    </div>
  )
}
