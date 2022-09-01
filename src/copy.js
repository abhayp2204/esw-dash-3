import "./App.css";
import axios from "axios"
import React, { useState } from "react"
import Plot from "react-plotly.js"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function App() {
    const [res, setRes] = useState(null)
    const [date1, setDate1] = useState(null)

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

    function timeFilter(feed) {
        return true
        // return feed["created_at"] < 
    }

    function formatTime(date) {
        let str = ""
        str += date.getFullYear() + "-"
        str += (1 + date.getMonth()) + "-"
        str += date.getDate() + "T"
        str += date.getHours() + ":"
        str += date.getMinutes() + ":"
        str += "00Z"
        return str
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
        const feedsFiltered = feeds.filter(timeFilter)
        console.log(feeds)
        X = feedsFiltered.map((value, index) => {return value["created_at"]})
        Y = feedsFiltered.map((value, index) => {return value["field1"]})
    }


    return (
        <div className="App">
            {!res && <div>loading...</div>}
            {res &&
                <div>
                    <DatePicker 
                        selected={date1}
                        onChange={date => setDate1(date)}
                    />

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
                </div>
            }
        </div>
    );
}

export default App;
