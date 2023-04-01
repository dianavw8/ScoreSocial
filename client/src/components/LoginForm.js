import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {useState} from 'react';
import { loginUser } from '../utils/API';
import Auth from '../utils/auth';


    const LoginForm = () => {

        const [userFormData, setUserFormData] = useState({ email: "", password: "" });
        const [validated] = useState(false);
        //const [showAlert, setShowAlert] = useState(false);
      //const [errorMessage, setErrorMessage] = React.useState("");

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
            const response = await loginUser(userFormData);
      
            if (!response.ok) {
              throw new Error('something went wrong!');
            }
      
            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);
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
              alt="logo" /> Log-in to your account
      </Header>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        
      
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' 
          name='email'
          type='text'
          onChange={handleInputChange}
          value={userFormData.email}
          required/>
          
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            name='password'
            type='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
         
          <Button color='teal' fluid size='large'
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='signupform'>Sign Up</a>
      </Message>
    </Form></Grid.Column>
  </Grid>
        );
    };

export default LoginForm;
