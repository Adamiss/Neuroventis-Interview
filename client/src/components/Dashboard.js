import React, { Component } from "react";
import { Container } from "react-bootstrap";
import DashboardTable from "./DashboardTable";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <h1>Patient Reports App</h1>
        <DashboardTable patientReports={this.props.patientReports} />
      </Container>
    );
  }
}
export default Dashboard;
