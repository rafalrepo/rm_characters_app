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
            console.log(data)
            setCharacters(data.results);
            setNextPage(data.info.next);
            setPrevPage(data.info.prev);
        })
    }, [API]);

    const listCharacters = characters.map(character => {
        return <Character character={character}/>;
    })

    const prev = () => {
        if(prevPage !== null)
        setAPI(prevPage)
    }

    const next = () => {
        setAPI(nextPage)
    }

    return(
        <div>
            <section className='cards'>
                {listCharacters}
            </section>
            <div className="pagination">
                <button onClick={() => prev()} className="pagination__btn">Prev</button>
                <button onClick={() => next()} className="pagination__btn">Next</button>
            </div>
        </div>
    )
}

export default Characters;