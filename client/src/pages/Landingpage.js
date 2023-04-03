import React from 'react';
import { Container } from "semantic-ui-react";
import { Button } from 'semantic-ui-react';


const LandingPage = () => {
    return (
        <>
          <div className="landing">
            <Container className="hero">
              <p>Are you a sports enthusiast? <br></br>Are you competitive? <br></br>
                Use ScoreSocial to place bets against your friends and engage in friendly competition.
                <br></br><Button color='teal' type='submit' href='/signup'>
              Sign up for free today!
            </Button>
                </p>
        
            </Container>
          </div>
        </>
    )
}


export default LandingPage;