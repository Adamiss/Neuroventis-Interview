import { useEffect, useState } from "react";
import { get } from "./api/action";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PatientReport from "./components/PatientReport";

function App() {
  const [patientReports, setPatientReports] = useState([]);

  useEffect(() => {
    get("/report")
      .then((response) => {
        setPatientReports(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Route
          path="/"
          exact
          strict
          component={() => <Dashboard patientReports={patientReports} />}
        />
        <Route path="/PatientReport/:id" component={() => <PatientReport />} />
      </Router>
    </div>
  );
}

export default App;
