import React from "react";
import "./StudentForm.scss";

export default function StudentForm({
  handleStudentChange,
  handleStudentSubmit,
  studentInput,
}) {
  return (
    <div>
      <form onSubmit={handleStudentSubmit}>
        <label>First Name:</label>
        <input
          onChange={handleStudentChange}
          name="firstName"
          value={studentInput.firstName}
        />
        <label>Last Name:</label>
        <input
          onChange={handleStudentChange}
          name="lastName"
          value={studentInput.lastName}
        />
        <label>Email:</label>
        <input
          onChange={handleStudentChange}
          name="email"
          value={studentInput.email}
        />
        <label>Instrument:</label>
        <input
          onChange={handleStudentChange}
          name="idiom"
          value={studentInput.idiom}
        />
        <label>Language</label>
        <input
          onChange={handleStudentChange}
          name="language"
          value={studentInput.language}
        />
        <label>Location:</label>
        <input
          onChange={handleStudentChange}
          name="location"
          value={studentInput.location}
        />
        <label>Other:</label>
        <input
          onChange={handleStudentChange}
          name="other"
          value={studentInput.other}
        />
        <input type="submit" id='submit-button-wrapper' />
      </form>
    </div>
  );
}
