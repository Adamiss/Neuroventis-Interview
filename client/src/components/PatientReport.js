import React, { Component } from "react";
import { Container, Table, Button, Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class PatientReport extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  state = {
    reports: this.props.location.state.pReport.reports,
    show: false,
  };

  toggle = () =>
    this.setState((currentState) => ({ show: !currentState.show }));

  saveReport = () => {
    this.setState((currentState) => ({
      reports: this.state.reports,
      show: false,
    }));
    console.log("saveReport");
  };

  render() {
    const { name, email, gender, registered } =
      this.props.location.state.pReport;
    let newFormReport;

    if (this.state.show) {
      newFormReport = (
        <Container>
          <div class="shadow-lg p-3 mb-5 bg-white rounded">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Row>
                  <Col>
                    <Form.Label>ReportName</Form.Label>
                    <Form.Control type="reportName" />
                  </Col>
                  <Col>
                    <Form.Label>Event</Form.Label>
                    <Form.Control type="event " />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Row>
                  <Col>
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="success" onClick={this.saveReport}>
                      Save
                    </Button>{" "}
                  </Col>
                  <Col>
                    <Button variant="danger">Cancel</Button>{" "}
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </div>
        </Container>
      );
    }

    return (
      <div>
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
              {this.state.reports.map((report, id) => (
                <tr key={id}>
                  <td>{report.reportName}</td>
                  <td>{report.created}</td>
                  <td>{report.content}</td>
                  <td>{report.event}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="primary" onClick={this.toggle}>
            Add Report
          </Button>{" "}
        </Container>
        {console.log(this.state)}
        {newFormReport}
      </div>
    );
  }
}

export default withRouter(PatientReport);
