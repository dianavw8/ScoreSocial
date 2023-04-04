import React from 'react';
import { Container } from "semantic-ui-react";
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
      <>
        <div className="landing">
          <Container classname="hero">
            <p>
            Want to be able to place bets at anytime, anywhere without hurting your wallet?
              <br></br>We have the site just for you!{" "}
              <br></br>
              Use ScoreSocial to place bets and test your knowledge on the outcomes of games!
              <br></br>
              <Link to="/signup"> {/* Use Link instead of href */}
                <Button
                  color="teal"
                  style={{ marginTop: "1em" }}
                >
                  Sign up for free today!
                </Button>
              </Link>
            </p>
          </Container>
        </div>
      </>
    );
}


export default LandingPage;