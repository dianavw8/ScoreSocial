import React, { useEffect, useState } from 'react';
import { getOdds, getScores } from '../utils/API';

const Nhl = () => {
    //debug useState to accept response array
    const [nhlScores, setNhlScores] = useState([])

    useEffect(() => {
        getScores('icehockey_nhl')
        console.log(nhlScores)
    }, [])


    const getScores = (query) => {
      
        fetch(`https://api.the-odds-api.com/v4/sports/${query}/scores/?daysFrom=1&apiKey=9264d84c86e73245c7c5f05093e91af5`)
        .then(response => response.json())
        .then(function (response) {
          console.log(response)
          const newArray = []
          for(var i = 0; i < response.length; i++) {
            newArray.push(response[i])
          }
          console.log(newArray)
          setNhlScores(newArray)
          console.log(nhlScores)
        }).catch(function (error) {
          console.error(error);
        });
      }


    return (
     
        <div>
               <p>Nhl</p>
            {
                nhlScores.map(score=>{
                    return{
             <p>{score.away_team}</p> 
                    }
                })
            }
        </div>
    )
}


export default Nhl;