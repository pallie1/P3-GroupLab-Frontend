import React, { useState, useEffect, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { DataContext } from '../../../App';
import apiUrl from '../../../apiConfig';
import "./DeleteProfile.scss";

const DeleteProfile = () => {
  const dataContext = useContext(DataContext);
  const activeUser = dataContext.activeUser;
  const [ isDeleted, setIsDeleted ] = useState(false);


  if (activeUser[0]) {
      
    const deleteOnClick = async () => {

      if (activeUser[0].student === true) {
        let userId = activeUser[0]._id
        const response = await axios({
          url: `${apiUrl}/students/${userId}`,
          method: 'DELETE'
        })
        setIsDeleted(true);
        console.log('is click? ', isDeleted)
      }

      if (activeUser[0].teacher === true) {
        let userId = activeUser[0]._id
        const response = await axios({
          url: `${apiUrl}/teachers/${userId}`,
          method: 'DELETE'
        })
        setIsDeleted(true);
        console.log('is click? ', isDeleted)
      }
    }

    if (isDeleted === true) {
      return <Redirect to={'/'}/>
    }


    return (
      <div>
        <h1>Are you sure you want to delete?</h1>
        <h1>This will be permanent.</h1>
        <button onClick={deleteOnClick} >Delete Profile</button>
        <Link to='/editprofile'>
          <button >Cancel</button>
        </Link>
      </div>
    )
  } else {return <h1>Loading...</h1>}
}

export default DeleteProfile;




