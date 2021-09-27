import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";

export default function CharctersList() {
  const { error, loading, data } = useCharacters();

  if (loading) return <div>Loading</div>;
  if (error) return <div>Something went wrong</div>;
  return (
    <div className='CharcterList'>
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`} key={character.id}>
            <img src={character.image} alt='Ahsan' />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
