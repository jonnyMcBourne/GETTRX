import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { PeopleCard } from './components/PeopleCard/PeopleCard';
import  { DetailsCointer} from './components/DetailsContainer/DetailsCointer'
import { Gender, People } from './interfaces';
import { ApiContext } from './context';

const person:People = {
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": Gender.Female,
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/"
    ],
    "created": new Date("2014-12-09T13:50:51.644000Z"),
    "edited": new Date("2014-12-09T13:50:51.644000Z"),
    "url": "https://swapi.dev/api/people/1/"
}


test('FIRST RENDER APP', () => {
  render(<App />);
});

test('RENDER SINGLE CARD OF PEOPLE', () => {
  render(<PeopleCard person={person} />);
});

test('RENDER DETAILS CONTAINER', () => {
  render(<DetailsCointer/>);
});


  test('should display information about the single person when there is data', () => {

    const mockSinglePerson = {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      skin_color: 'fair',
      birth_year: '19BBY',
      hair_color: 'blond',
      eye_color: 'blue'
    };


  const mockContext = jest.fn(() => ({
    singlePeople: person,
    singleUrl: '',
    people: [person ],
    getPeopleByPage:jest.fn() ,
    getPeopleBySearch: jest.fn() ,
    getPeopleById: jest.fn() ,
    setSingleUrl: ()=>{}
  }));

  const { getByText } = render(
    <ApiContext.Provider value={mockContext()}>
      <DetailsCointer />
    </ApiContext.Provider>
  );
    // Comprobar que se muestra la información correcta
    expect(getByText('Name:')).toBeInTheDocument();
    expect(getByText('Luke Skywalker')).toBeInTheDocument();
    expect(getByText('Height:')).toBeInTheDocument();
    expect(getByText('172')).toBeInTheDocument();
    expect(getByText('Mass:')).toBeInTheDocument();
    expect(getByText('77')).toBeInTheDocument();
    expect(getByText('Skin Color:')).toBeInTheDocument();
    expect(getByText('fair')).toBeInTheDocument();
    expect(getByText('Birth Year:')).toBeInTheDocument();
    expect(getByText('19BBY')).toBeInTheDocument();
    expect(getByText('Hair Color:')).toBeInTheDocument();
    expect(getByText('blond')).toBeInTheDocument();
    expect(getByText('Eye Color:')).toBeInTheDocument();
    expect(getByText('blue')).toBeInTheDocument();
  })
