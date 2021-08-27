import { useEffect, useState } from "react";
import { get } from "./api/action";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";

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
      <Dashboard patientReports={patientReports} />
    </div>
  );
}

export default App;
