import React, { useState, useContext } from 'react';
import { Button, Form, Message, } from 'semantic-ui-react';
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../utils/auth'
import { UPDATE_POINTS } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
// import { User } from '../../../server/models';


const UpdatePoints = (props) => {
    const [addPoints, setAddPoints] = useState(0)
    const [usePoints, setUsePoints] = useState(0)
    const { loading, data } = useQuery(GET_USER, {
      variables: { username: Auth.getProfile().data.username },
    });
    const username = data?.user.username
    const points = data?.user.points

    const [updatePoints, { loading: updateLoading, error: updateError }] = useMutation(UPDATE_POINTS);

     const handlePointsClick = (points) => {
    setAddPoints(points);
    updatePoints({ variables: { username, points } }).then((result) => {
      console.log(result.data.updateUser.user.points);
      setAddPoints(0);
    });
  };
    const handleUsePointsSubmit = async (event) => {
        event.preventDefault();
        updatePoints({variables: { username, points: -usePoints }})
        .then(result => {
          console.log(result.data.updateUser.user.points);
          setUsePoints(0);
        });
    };
    
    return (
    <div>
      <h2>Points: {points}</h2>
      <h3>Add Points:</h3>
      <Button.Group>
        <Button onClick={() => handlePointsClick(10)}>Add 10 Points</Button>
        <Button onClick={() => handlePointsClick(20)}>Add 20 Points</Button>
        <Button onClick={() => handlePointsClick(50)}>Add 50 Points</Button>
      </Button.Group>
      {updateLoading && <p>Loading...</p>}
      {updateError && <Message negative>{updateError.message}</Message>}
      <h3>Use Points:</h3>
      <form onSubmit={handleUsePointsSubmit}>
        <label>
          Points to use:
          <input type="number" value={usePoints} onChange={(event) => setUsePoints(parseInt(event.target.value))} />
        </label>
        <button type="submit">Use Points</button>
      </form>
      {updateLoading && <p>Loading...</p>}
      {updateError && <p>Error: {updateError.message}</p>}
    </div>
  );
};


export default UpdatePoints;