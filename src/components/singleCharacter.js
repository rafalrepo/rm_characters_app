import React, { useState, useEffect } from 'react';
import axios from'axios';

const SingleCharacter = ({match}) => {

    const [character, setcharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${match.params.id}`)
            .then(res => {
                const data = res.data;
                setcharacter(data);
            })
    }, [])

    // const el = character;

    return (
        
        <article className="singleCharacter">
            {/* {console.log(character.location.name)} */}
            <img src={character.image} alt={character.name} />
            <ul>
                <li>Name: {character.name}</li>
                <li>Status: {character.status}</li>
                <li>Species: {character.species}</li>
                <li>Gender: {character.gender}</li>
                {/* <li>Location: {character.location.name}</li> */}
            </ul>
        </article>
    )
}

export default SingleCharacter;