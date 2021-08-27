import React, { Component } from "react";
import { Container, Table, Button, Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { v4 as uuidv4 } from "uuid";

class PatientReport extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = {
    reports: this.props.location.state.pReport.reports,
    show: false,
    reportName: "",
    event: "",
    content: "",
  };
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  sendToServer() {
    //const id = this.props.match.params.id;
    //const res = JSON.stringify(this.state.reports);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggle = () =>
    this.setState((currentState) => ({ show: !currentState.show }));

  saveReport = () => {
    let reportName = this.state.reportName;
    let event = this.state.event;
    let content = this.state.content;
    let errors = false;
    if (reportName === "" || event === "" || content === " ") {
      errors = true;
    }

    if (errors) {
      window.alert("Data Error");
    } else {
      var uuid = uuidv4();
      var created = Date().toLocaleString();
      var newReport = {
        _id: uuid,
        created: created,
        reportName: this.state.reportName,
        event: this.state.event,
        content: this.state.content,
      };
      this.toggle();
      this.setState.reports = this.state.reports.push(newReport);
      this.setState.content = "";
      this.setState.reportName = "";
      this.setState.event = "";
      this.sendToServer();
    }
  };

  render() {
    const { name, email, gender, registered } =
      this.props.location.state.pReport;

    let newFormReport;

    if (this.state.show) {
      newFormReport = (
        <Container>
          <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Row>
                  <Col>
                    <Form.Label>ReportName</Form.Label>
                    <Form.Control
                      type="text"
                      name="reportName"
                      value={this.state.reportName}
                      onChange={this.onChange}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Event</Form.Label>
                    <Form.Control
                      type="text "
                      name="event"
                      value={this.state.event}
                      onChange={this.onChange}
                    />
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
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="content"
                      value={this.state.content}
                      onChange={this.onChange}
                    />
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
        {newFormReport}
      </div>
    );
  }
}

export default withRouter(PatientReport);
