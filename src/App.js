import "./App.css";
import axios from "axios"
import React, { useState } from "react"
import Plot from "react-plotly.js"
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import DatePicker from "./DatePicker"

function App() {
    const [res, setRes] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)

    let X
    let Y

    async function getData() {
        try {
            // get data fron thingspeak asynchronously
            const response = await axios.get("https://api.thingspeak.com/channels/1825637/fields/1.json")
            return response
        } catch (error) {
            console.log(error)
        }
    }

    // if statement to avoid infinite render loop
    if (!res) {
        getData()
        // set res to rerender after receiving the response
        .then(res => setRes(res))
        .catch(err => console.log(err)) 
    }
    else {
        const feeds = res.data.feeds
        const feedsFiltered = feeds
        console.log(feeds)
        X = feedsFiltered.map((value, index) => {return value["created_at"]})
        Y = feedsFiltered.map((value, index) => {return value["field1"]})
    }


    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className="App">
                {!res && <div>loading...</div>}
                {res &&
                    <div>
                        <Plot
                            data={[
                                {
                                    x: X,
                                    y: Y,
                                    type: "scatter",
                                    mode: "lines+markers",
                                    marker: {color: "red"},
                                },
                            ]}
                            layout={ {width: 1200, height: 450, title: 'A Fancy Plot'} }
                        />
                        <DatePicker />
                    </div>
                }
            </div>
        </LocalizationProvider>
    );
}

export default App;
