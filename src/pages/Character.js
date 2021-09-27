import React from "react";
import { useParams } from "react-router";
import { useCharacter } from "../hooks/useCharacter";

export default function Character() {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Something went wrong</div>;
  return (
    <div className='Character'>
      <img src={data.character.image} alt='Ali' height={750} width={750} />
      <div className='Character-content'>
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className='Character-episode'>
          {data.character.episode.map((episode) => (
            <div key={episode.name}>
              {episode.name} -- <b>{episode.episode}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
