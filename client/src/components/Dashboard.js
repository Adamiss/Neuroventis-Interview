import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <h1>Patient Reports App</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Registered</th>
              <th>E-mail</th>
              <th>Gender</th>
              <th>Reports</th>
            </tr>
          </thead>
          <tbody>
            {this.props.patientReports.map((pReport, id) => (
              <tr key={id}>
                <td>{pReport.name}</td>
                <td>{pReport.registered}</td>
                <td>{pReport.email}</td>
                <td>{pReport.gender}</td>
                <td>{pReport.reports.length}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}
export default Dashboard;
