import React from 'react';

const Epl = () => {
    const [sport, setSport] = useState("soccer_usa_mls");
    console.log(sport);
  
    const { loading, data } = useQuery(GET_ODDS, {
      // need to set the sport_key: whatever staate variable we createed to hold the sport_key of what sport we are looking for the games for
      variables: { sport },
    });
    if (loading) {
      return <h1>Loading...</h1>;
    }
    
    const gameOdds = data?.gameOdds;
    console.log(gameOdds)
    return (
        <>
        <div className="centered-text">
            <h1>English Premier League</h1>
        </div>
      </>
    )
}


export default Epl;