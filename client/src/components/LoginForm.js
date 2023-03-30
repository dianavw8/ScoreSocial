

import { loginUser } from '../utils/API';
import Auth from '../utils/auth';

import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='grey' textAlign='center'>
        <Image style={{ width: "90px", height: "80px" }}
              src={"./assets/logo2.png"}
              alt="logo" /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='dark purple' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='signupform'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoginForm