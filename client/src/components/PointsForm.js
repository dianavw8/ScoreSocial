import React, { useState } from 'react';
import { Button, Form, Message, } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import { REDUCE_POINTS } from '../utils/mutations';

const PointsForm = () => {
    const [pointsFormData, setPointsFormData] = useState({pointsUsed: ' '})
    const [showAlert, setShowAlert] = useState(false);

    const [reducePoints, { error }] = useMutation(REDUCE_POINTS);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPointsFormData({ pointsFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const { data } = await reducePoints({
                variables: pointsFormData,
              });
        // check that points used to bet is less than currentPoints
        // check that number isn't negative
        } catch (err) {
          console.error(err);
          setShowAlert(true);
        }
    
        setPointsFormData({
          pointsUsed: ''
        });
    };
    return(        
    <Form size='large' onSubmit={handleFormSubmit}>
    {showAlert && (
        <Message onDismiss={() => setShowAlert(false)}>
          <p class="red-text">Something went wrong with your login!</p>
        </Message>
      )}
      <Form.Input
              fluid
              icon=''
              iconPosition='left'
              placeholder='100'
              type='value'
              name='pointsUsed'
              onChange={handleInputChange}
              value={pointsFormData.pointsUsed}
              required
            />
            <Button color='teal' fluid size='large' type='submit'>
              Place your bet!
            </Button>
    </Form>
    );
};
export default PointsForm;