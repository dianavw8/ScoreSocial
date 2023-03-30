//import React, { useState } from 'react';
//import { Form, Button, Alert } from 'react-bootstrap';
//import { useMutation } from '@apollo/client';
//import { ADD_USER } from '../utils/mutations';
//import Auth from '../utils/auth';

//const SignupForm = () => {

  import React from 'react'
  import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
  
  const SignupForm = () => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='grey' textAlign='center'>
          <Image style={{ width: "90px", height: "80px" }}
              src={"./assets/logo2.png"}
              alt="logo" /> Create an Account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Username'
              type='username'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
  
            <Button color='dark purple' fluid size='large'>
              Sign Up!
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
  
  export default SignupForm