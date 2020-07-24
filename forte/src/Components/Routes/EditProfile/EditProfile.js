import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./EditProfile.scss";
import { DataContext } from "../../../App";
import apiUrl from "../../../apiConfig";
import TeacherForm from "../../Shared/TeacherForm/TeacherForm"
import StudentForm from '../../Shared/StudentForm/StudentForm'

const EditProfile = (props) => {
  const dataContext = useContext(DataContext);
  const activeUser = dataContext.activeUser;
  const setActiveUser = dataContext.setActiveUser;
  const [isStudentUpdated, setIsStudentUpdated] = useState(false);
  const [isTeacherUpdated, setIsTeacherUpdated] = useState(false);

  // console.log('setactive', setActiveUser)
  // const { activeUser, setActiveUser } = useContext(DataContext);
  const [clickedDelete, setIsClickedDelete] = useState(false);

  // console.log("edit profile active user -", activeUser);

  const [teacherInput, setTeacherInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    idiom1: "",
    idiom2: "",
    idiom3: "",
    language: "",
    location: "",
    rate: "",
    teachingStyle: "",
    teacher: true,
  });




  const [studentInput, setStudentInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    idiom: "",
    language: "",
    location: "",
    other: "",
    student: true,
  });

  useEffect (()=>{
    setTeacherInput(activeUser[0])
    setStudentInput(activeUser[0])
  },[])

  // if delete is clicked Go to DeleteProfile.js
  const showDiv = (event) => {
    setIsClickedDelete(true);
  };



  const handleTeacherChange = (e) => {
    const field = e.target.value;
    console.log("field", field);
    setTeacherInput({
      ...teacherInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleStudentChange = (e) => {
    const field = e.target.value;
    console.log("Field", field);
    setStudentInput({
      ...studentInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleTeacherSubmit = (e) => {
    e.preventDefault();
    console.log("handle teacher submit");
    axios({
      url: `${apiUrl}/teachers/${activeUser[0]._id}`,
      method: "PUT",
      data: teacherInput,
    })
      .then(() => setIsTeacherUpdated(true))
      .catch(console.error);
    
  };

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    console.log("handle student submit");
    axios({
      url: `${apiUrl}/students/${activeUser[0]._id}`,
      method: "PUT",
      data: studentInput,
    })
      .then(() => setIsStudentUpdated(true))
      .catch(console.error);
  };

if(isTeacherUpdated){
  axios({url: `${apiUrl}/teachers/email/${activeUser[0].email}`})
    .then((res) => setActiveUser(res.data))
    .then(()=> setIsTeacherUpdated(false))
    .then(()=> props.history.push('/dashboard'))

    .catch(console.error) 
} 

if(isStudentUpdated){
  axios({url: `${apiUrl}/students/email/${activeUser[0].email}`})
    .then((res) => setActiveUser(res.data))
    .then(()=> setIsStudentUpdated(false))
    .then(()=> props.history.push('/dashboard'))
    .catch(console.error);
} 



  if (activeUser[0] !== undefined) {
    if (activeUser[0].teacher === true) {
      return (
        <div className='edit-profile-wrapper'>
          <TeacherForm handleTeacherChange={handleTeacherChange} handleTeacherSubmit={handleTeacherSubmit} teacherInput={teacherInput}/>

          {clickedDelete ? <Redirect to="/deleteprofile" /> : null}
          <button type="button" onClick={showDiv}>
            Delete Profile
          </button>
        </div>
      );
    }

    if (activeUser[0].student === true) {
      return (
        <div className='edit-profile-wrapper'>
          <StudentForm handleStudentChange={handleStudentChange} handleStudentSubmit={handleStudentSubmit} studentInput={studentInput}/>

          {clickedDelete ? <Redirect to="/deleteprofile" /> : null}
          <button type="button" onClick={showDiv}>
            Delete Profile
          </button>
        </div>
      );
    }
  } else {
    return <h3>Loading...</h3>;
  }
};

export default EditProfile;
