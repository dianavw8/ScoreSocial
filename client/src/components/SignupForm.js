import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { useMutation } from '@apollo/client';
import {useState} from 'react';

const SignupForm = () => {
    const [userFormData, setUserFormData] = useState({ username: "", email: "", password: "" });
    const [validated] = useState(false);
    //const [showAlert, setShowAlert] = useState(false);
  
    const [addUser, { error }] = useMutation(ADD_USER);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      try {
        const { data } = await addUser({
          variables: userFormData,
        });
  
        Auth.login(data.addUser.token);
      } catch (err) {
        console.error(err);
        //setShowAlert(true);
      }
  
      setUserFormData({
        username: '',
        email: '',
        password: '',
      });
    };

return (


  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='grey' textAlign='center'>
        <Image style={{ width: "90px", height: "80px" }}
            src={"./assets/logo2.png"}
            alt="logo" /> Create an Account
      </Header>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}></Form>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' 
          type='email'
          name='email'
          onChange={handleInputChange}
          value={userFormData.email}
          required
          />
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            type='username'
            required
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            type='password'
            required
          />

    <Button color='teal' fluid size='large'
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
            Sign Up!
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)
}

export default SignupForm;
