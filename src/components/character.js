import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css'

const Character = ({character}) => {

    return(
        <article className="card">
            <Link to={`/${character.id}`}>
                <img src={character.image} />
            </Link>  
        </article>
    )
}   

export default Character;