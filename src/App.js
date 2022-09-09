import "./App.css";
import React from "react"
import Plot from "react-plotly.js"
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import CustomDateTimePicker from "./CustomDateTimePicker"
import Device from "./Device";
import Select from "./Select";
import Navbar from "./Navbar";
import About from "./About";

// Routes
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"

const Layout = (props) => {
    return (
      <div>
          <Navbar />
          <div className="container">
              <Outlet/>
          </div>
      </div>
    );
};

function App() {
    return (
        <div className="App">
            <Navbar />
            <Router>
                <Routes>
                    <Route
                        path="/about"
                        element={<About />}
                    />
                    <Route
                        path="/"
                        element={<Select/>}
                    />
                    <Route
                        path="/kettle"
                        element={<Device field={1} name="Kettle" />}
                    />
                    <Route
                        path="/hairdryer"
                        element={<Device field={2} name="Hair Dryer" />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
