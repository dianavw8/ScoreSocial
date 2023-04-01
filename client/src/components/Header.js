import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = ({ pointsEarned, userProfile, loginForm, onLogout }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>Points Earned: {pointsEarned}</li>
          <li>User Profile: {userProfile}</li>
          {loginForm ? (
            <li>
               <button onClick={onLogout}>Log Out</button> {/*callback function to log the user out when the "Log Out" button is clicked */}
            </li>
          ) : (
            <React.Fragment>
              <li>
                <Link to="/login"></Link>
              </li>
              <li>
                <Link to="/signup"></Link>
              </li>
            </React.Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;


