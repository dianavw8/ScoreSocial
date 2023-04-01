import React from 'react';
import { useState, useEffect } from 'react';
import API from '../utils/API';

const Mlb = () => {
    // const [games, setGames] = useState('');

    // API.getGames()
    //     .then((res) => console.log(res.data))
    //     .catch((err) => console.log(err));

    // useEffect(() => {
    //     getGames('MLB');
    // }, []);

    return (
        <>
        <div className="centered-text">
            <h1>Major League Baseball</h1>
        </div>
      </>
    )
}


export default Mlb;