import React from 'react';
import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import API from '../utils/API';
import { GET_ODDS } from '../utils/queries';

const Mlb = () => {
    const { loading, data } = useQuery(GET_ODDS);
    console.log(data);
    // const [games, setGames] = useState('');

    // API.getGames()
    //     .then((res) => console.log(res.data))
    //     .catch((err) => console.log(err));

    // useEffect(() => {
    //     getGames('MLB');
    // }, []);

    return (
        <>
        <p>Mlb</p>
        {loading ? (<h1>loading...</h1>) : (<div>{data?.gameOdds[0].id}</div>)}
        </>
    )
}

export default Mlb;