import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class PatientReport extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  render() {
    const { name, email, gender, registered, reports } =
      this.props.location.state.pReport;
    return (
      <Container>
        <div>
          <h1>Patient Name: {name}</h1>
          <h2>Email: {email}</h2>
          <h2>Gender: {gender}</h2>
          <h2>Registered: {registered}</h2>
        </div>
        <Table striped bordered>
          <thead>
            <tr>
              <th>ReportName</th>
              <th>Created</th>
              <th>Content</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, id) => (
              <tr key={id}>
                <td>{report.reportName}</td>
                <td>{report.created}</td>
                <td>{report.content}</td>
                <td>{report.event}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default withRouter(PatientReport);
