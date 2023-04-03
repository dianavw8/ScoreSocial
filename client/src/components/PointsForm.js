import React, { useState } from "react";
import { Button, Message } from "semantic-ui-react";
import { useMutation, useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { UPDATE_POINTS } from "../utils/mutations";
import { GET_USER } from "../utils/queries";

const PointsForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [addPoints, setAddPoints] = useState(0);
  const [usePoints, setUsePoints] = useState(0);
  const { data } = useQuery(GET_USER, {
    variables: { username: Auth.getProfile().data.username },
  });
  const username = data?.user.username;
  const points = data?.user.points;

  const [updatePoints, { loading: updateLoading, error: updateError }] = useMutation(UPDATE_POINTS);


    
  const handlePointsClick = (addPoints) => {
    let newPoints = points + addPoints
      console.log(username, newPoints)
    updatePoints({ variables: { username: username, points: newPoints } })
      .then((result) => {
        console.log(result);
        setAddPoints(0);
      })
      .catch((err) => {
        console.error('Mutation error:', err);
      });
  };

  const handleUsePointsChange = (event) => {
    setUsePoints(parseInt(event.target.value));
  };
  
  const handleUsePointsSubmit = async (event) => {
    event.preventDefault();
    if (usePoints > points) {
      console.error('Cannot use more points than currently available');
      return;
    }
    try {
      let newPoints = points - usePoints;
      console.log(username, newPoints);
      const result = await new Promise((resolve, reject) => {
        updatePoints({ variables: { username: String(username), points: parseInt(newPoints) } })
          .then((result) => resolve(result))
          .catch((err) => reject(err));
      });
      console.log(result);
      setUsePoints(0);
    } catch (err) {
      console.error(err);
    }
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
          <input
            type="number"
            value={usePoints}
            onChange={handleUsePointsChange}
          />
        </label>
        <button type="submit">Use Points</button>
      </form>
      {updateLoading && <p>Loading...</p>}
      {updateError && <p>Error: {updateError.message}</p>}
    </div>
  );
};

export default PointsForm;
