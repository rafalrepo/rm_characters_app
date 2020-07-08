import React, { useState, useEffect } from 'react';
import axios from'axios';
import Character from './character';
import '../css/style.css';

const Characters = () => {

    const [API, setAPI] = useState('https://rickandmortyapi.com/api/character/');
    const [characters, setCharacters] = useState([]);
    const [nextPage, setNextPage] = useState('');
    const [prevPage, setPrevPage] = useState('');

    useEffect(() => {
        axios(API)
        .then(res => {
            const data = res.data;
            setCharacters(data.results);
            setNextPage(data.info.next);
            setPrevPage(data.info.prev);
        })
    }, [API]);

    const listCharacters = characters.map(character => {
        return <Character character={character}/>;
    })

    return(
        <div>
            <section className='cards'>
                {listCharacters}
            </section>
            {/* <button onClick={() => setAPI(prevPage)}>Prev</button> */}
            {/* <button onClick={() => setAPI(nextPage)}>Next</button> */}
        </div>
    )
}

export default Characters;