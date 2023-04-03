import React from 'react';
import { Link } from 'react-router-dom';
import {useQuery} from "@apollo/client"
import {GET_CURRENT_USER} from "../utils/queries"
const Profile = () => {
    //insert get current user query here, store data return in variable
    const {loading, data} = useQuery(GET_CURRENT_USER)
    const userData = data?.me || {}
    return (
        //map userData
        <p>Profile</p>
        // need to show the bets that are associated with the profile (should show UserBets component)
        // need to put link to the specific bets like this path='/bet/:id' component={Bet} />
    )
}


export default Profile;