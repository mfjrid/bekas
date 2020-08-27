import React, { Component } from "react";

class FormStudent extends Component {
  // State
  constructor() {
    super();
    this.state = {
      students: ["Muhammad Fajar"],
      currentStudentName: "",
    };
  }

  addStudent() {
    let currentStudents = this.state.students;
    currentStudents.push(this.state.currentStudentName);
    this.setState({
      students: currentStudents,
    });
  }

  render() {
    return (
      <div>
        <span>{this.state.currentStudentName}</span>
        <br />
        <input
          type="text"
          name="student_name"
          onChange={(eventnya) => {
            this.setState({
              currentStudentName: eventnya.target.value,
            });
          }}
        />
        <br />
        <input
          type="submit"
          value="Add Student"
          onClick={() => this.addStudent()}
        />
        <h2>List Students</h2>
        {this.state.students.map((student) => {
          return <h3>{student}</h3>;
        })}
      </div>
    );
  }
}

export default FormStudent;
