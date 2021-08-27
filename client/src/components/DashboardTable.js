import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

class DashboardTable extends Component {
  render() {
    return (
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
          {this.props.patientReports.map((pReport) => (
            <tr key={pReport._id}>
              <td>
                <Link
                  to={{
                    pathname: `/PatientReport/${pReport._id}`,
                    state: { pReport },
                  }}
                >
                  {pReport.name}
                </Link>
              </td>
              <td>{pReport.registered}</td>
              <td>{pReport.email}</td>
              <td>{pReport.gender}</td>
              <td>{pReport.reports.length}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default DashboardTable;
