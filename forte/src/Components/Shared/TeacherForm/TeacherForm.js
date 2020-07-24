import React from "react";
import "./TeacherForm.scss";

export default function TeacherForm({
  handleTeacherChange,
  handleTeacherSubmit,
  teacherInput,
}) {
  return (
    <div>
      <form onSubmit={handleTeacherSubmit}>
        <label>First Name:</label>
        <input
          onChange={handleTeacherChange}
          name="firstName"
          value={teacherInput.firstName}
        />
        <label>Last Name:</label>

        <input
          onChange={handleTeacherChange}
          name="lastName"
          value={teacherInput.lastName}
        />
        <label>Email:</label>
        <input
          onChange={handleTeacherChange}
          name="email"
          value={teacherInput.email}
        />
        <label>Primary Instrument:</label>

        <input
          onChange={handleTeacherChange}
          name="idiom1"
          value={teacherInput.idiom1}
        />
        <label>Secondary Instrument:</label>

        <input
          onChange={handleTeacherChange}
          name="idiom2"
          value={teacherInput.idiom2}
        />
        <label>Other Instrument:</label>

        <input
          onChange={handleTeacherChange}
          name="idiom3"
          value={teacherInput.idiom3}
        />
        <label>Language:</label>
        <input
          onChange={handleTeacherChange}
          name="language"
          value={teacherInput.language}
        />
        <label>Location (City, State):</label>

        <input
          onChange={handleTeacherChange}
          name="location"
          value={teacherInput.location}
        />
        <label>Rate/hr:</label>
        <input
          onChange={handleTeacherChange}
          name="rate"
          value={teacherInput.rate}
        />
        <label>Teaching Style:</label>
        <input
          onChange={handleTeacherChange}
          name="teachingStyle"
          value={teacherInput.teachingStyle}
        />
        <input type="submit" id='submit-button-wrapper' />
      </form>
    </div>
  );
}
